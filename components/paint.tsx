"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import {
  imageDataAtom,
  isTriggerDownloadAtom,
  redoRequestedAtom,
  undoRequestedAtom,
} from "@/atoms/atoms"
import { useAtomValue, useSetAtom } from "jotai"
import { RedoIcon, UndoIcon } from "lucide-react"

import { COLOR_PALETTE, TOOLS } from "@/lib/constants/paint-items"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function LineWidthSlider({
  lineWidth,
  setLineWidth,
}: {
  lineWidth: number
  setLineWidth: (value: number) => void
}) {
  return (
    <Slider
      defaultValue={[lineWidth]}
      max={10}
      step={1}
      onValueChange={(value) => setLineWidth(value[0])}
      className={cn("w-[60%]")}
    />
  )
}

export function Win98Paint() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const isDrawingRef = useRef(false)
  const startXRef = useRef<number | null>(null)
  const startYRef = useRef<number | null>(null)
  const snapshotRef = useRef<ImageData | null>(null)
  // history stacks store Blobs (preferred) or dataURL strings as a fallback
  const undoStackRef = useRef<Array<Blob | string>>([])
  const redoStackRef = useRef<Array<Blob | string>>([])
  const [historyVersion, setHistoryVersion] = useState(0)

  const [tool, setTool] = useState<string>("pencil")
  const [primaryColor, setPrimaryColor] = useState("oklch(0.0 0.0 0.0)")
  const [secondaryColor, setSecondaryColor] = useState("oklch(1.0 0.0 0.0)")
  const [lineWidth, setLineWidth] = useState(1)

  const canUndo = undoStackRef.current.length > 0
  const canRedo = redoStackRef.current.length > 0

  // initialize canvas with devicePixelRatio scaling and preserve content
  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = Math.max(window.devicePixelRatio || 1, 1)
    const context = canvas.getContext("2d")
    if (!context) return

    // preserve current drawing as image so we can redraw after resize
    // use toDataURL as the resize path is synchronous; this is a rare path
    // and only used to restore content immediately after resizing.
    const prevDataUrl = canvas.toDataURL()

    // set canvas pixel size according to dpr while keeping css size
    const cssWidth = canvas.offsetWidth
    const cssHeight = canvas.offsetHeight
    canvas.width = Math.max(1, Math.floor(cssWidth * dpr))
    canvas.height = Math.max(1, Math.floor(cssHeight * dpr))
    canvas.style.width = `${cssWidth}px`
    canvas.style.height = `${cssHeight}px`

    // scale the drawing context so 1 unit = 1 css px
    context.setTransform(dpr, 0, 0, dpr, 0, 0)

    // fill background white (ms paint style)
    context.fillStyle = "#ffffff"
    // fill in pixel space
    context.fillRect(0, 0, canvas.width, canvas.height)

    // draw previous image scaled to new size
    if (prevDataUrl) {
      const img = new Image()
      img.onload = () => {
        context.drawImage(img, 0, 0, canvas.width / dpr, canvas.height / dpr)
      }
      img.src = prevDataUrl
    }

    ctxRef.current = context
  }, [])

  // capture a snapshot of the current canvas. Prefer Blob (toBlob) to avoid
  // large data URLs; fall back to dataURL when needed.
  async function captureSnapshot(): Promise<Blob | string | null> {
    const canvas = canvasRef.current
    if (!canvas) return null
    if (typeof canvas.toBlob === "function") {
      return await new Promise<Blob | string | null>((resolve) => {
        try {
          canvas.toBlob((b) => {
            if (b) resolve(b)
            else resolve(canvas.toDataURL())
          })
        } catch (e) {
          try {
            resolve(canvas.toDataURL())
          } catch (err) {
            resolve(null)
          }
        }
      })
    }
    try {
      return canvas.toDataURL()
    } catch (e) {
      return null
    }
  }

  // Instead of using useEffect to wire up ResizeObserver / resize listener,
  // attach them via a ref-callback on the canvas container element. This
  // ensures initialization runs as soon as the container mounts and that the
  // observer is tied to the actual parent element (so maximize/resize events
  // immediately trigger a reinit) without relying on additional effects.
  const containerObserverRef = useRef<ResizeObserver | null>(null)
  const canvasContainerRef = useRef<HTMLDivElement | null>(null)

  const setCanvasContainerRef = useCallback(
    (node: HTMLDivElement | null) => {
      // if the same node is re-set (react re-render), do nothing to avoid
      // reinitializing the canvas and clearing its contents. Only react when
      // the node actually changes (mount/unmount or different element).
      if (node === canvasContainerRef.current) return

      // cleanup previous observer and listeners when node changes to null or a
      // different node
      if (canvasContainerRef.current) {
        if (containerObserverRef.current) {
          try {
            containerObserverRef.current.disconnect()
          } catch (e) {
            /* ignore */
          }
          containerObserverRef.current = null
        }
        try {
          window.removeEventListener("resize", initializeCanvas)
        } catch (e) {
          /* ignore */
        }
      }

      canvasContainerRef.current = node

      if (node) {
        // initial sizing
        initializeCanvas()
        // sometimes the canvas child hasn't attached its ref yet; schedule a
        // follow-up on the next animation frame to ensure the canvas ref is
        // available and properly sized (covers initial render -> maximize case)
        requestAnimationFrame(() => initializeCanvas())

        // attach a resize observer to the container so changes from the window
        // wrapper (including maximize) immediately trigger a reinit
        if (typeof ResizeObserver !== "undefined") {
          containerObserverRef.current = new ResizeObserver(() => {
            initializeCanvas()
          })
          containerObserverRef.current.observe(node)
        }

        // also keep a window resize listener as a fallback
        window.addEventListener("resize", initializeCanvas)
      }
    },
    [initializeCanvas]
  )

  // helpers to get pointer coords relative to canvas in css pixels (account for dpr)
  function getPointerPos(
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    const anyEvent = e as any
    if (anyEvent.touches && anyEvent.touches.length) {
      const t = anyEvent.touches[0]
      return {
        // return css pixel coords; context transform handles dpr scaling
        x: t.clientX - rect.left,
        y: t.clientY - rect.top,
        isRight: false,
      }
    }
    const m = e as React.MouseEvent<HTMLCanvasElement>
    return {
      x: m.clientX - rect.left,
      y: m.clientY - rect.top,
      isRight: (m.buttons & 2) === 2,
    }
  }

  function startDrawing(
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) {
    const ctx = ctxRef.current
    // ensure the canvas buffer matches the current css size before drawing.
    // this covers the case where the window was later maximized after initial
    // render but we didn't yet reinitialize the canvas buffer.
    const canvas = canvasRef.current
    if (canvas) {
      const dpr = Math.max(window.devicePixelRatio || 1, 1)
      const cssW = canvas.offsetWidth
      const cssH = canvas.offsetHeight
      const expectedW = Math.max(1, Math.floor(cssW * dpr))
      const expectedH = Math.max(1, Math.floor(cssH * dpr))
      if (canvas.width !== expectedW || canvas.height !== expectedH) {
        initializeCanvas()
      }
    }

    if (!ctxRef.current) return
    const ctx2 = ctxRef.current
    // push current canvas state into undo stack so it can be restored.
    // Use toBlob when available to avoid memory-heavy data URLs.
    ;(async () => {
      try {
        const snap = await captureSnapshot()
        if (snap) {
          const stack = undoStackRef.current
          stack.push(snap)
          if (stack.length > 50) stack.shift()
          // starting a new action clears redo
          redoStackRef.current.length = 0
          setHistoryVersion((v) => v + 1)
        }
      } catch (err) {
        /* ignore snapshot errors */
      }
    })()
    const { x, y } = getPointerPos(e)
    // for shapes we'll snapshot the current pixels
    try {
      snapshotRef.current = ctx2.getImageData(
        0,
        0,
        ctx2.canvas.width,
        ctx2.canvas.height
      )
    } catch (err) {
      snapshotRef.current = null
    }
    isDrawingRef.current = true
    startXRef.current = x
    startYRef.current = y

    ctx2.beginPath()
    ctx2.moveTo(x, y)
  }

  function draw(
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) {
    const ctx = ctxRef.current
    if (!ctx || !isDrawingRef.current) return
    const { x, y, isRight } = getPointerPos(e)

    const currentTool = tool
    // set drawing style
    if (currentTool === "eraser") {
      // use destination-out to erase to transparency; background is white
      ctx.globalCompositeOperation = "destination-out"
      ctx.strokeStyle = "rgba(0,0,0,1)"
    } else {
      ctx.globalCompositeOperation = "source-over"
      ctx.strokeStyle = isRight ? secondaryColor : primaryColor
    }
    ctx.lineWidth = lineWidth
    ctx.lineCap = "round"
    ctx.lineJoin = "round"

    if (
      currentTool === "pencil" ||
      currentTool === "brush" ||
      currentTool === "eraser" ||
      currentTool === "spray"
    ) {
      if (currentTool === "spray") {
        // spray: randomly place small dots around the pointer within a radius
        const density = Math.max(10, lineWidth * 20)
        const radius = Math.max(1, lineWidth * 4)
        const fillColor = isRight ? secondaryColor : primaryColor
        for (let i = 0; i < density; i++) {
          const angle = Math.random() * Math.PI * 2
          const r = Math.sqrt(Math.random()) * radius
          const sx = x + Math.cos(angle) * r
          const sy = y + Math.sin(angle) * r
          ctx.fillStyle = fillColor
          ctx.fillRect(sx, sy, 1, 1)
        }
      } else {
        ctx.lineTo(x, y)
        ctx.stroke()
      }
    } else {
      // shape preview: restore snapshot then draw preview shape
      const s = snapshotRef.current
      if (s) {
        // putImageData operates in pixel space and is not affected by the
        // current transform. reset transform to identity while restoring
        // the snapshot, then restore the previous transform.
        const prevTransform = ctx.getTransform()
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        try {
          ctx.putImageData(s, 0, 0)
        } finally {
          // restore transform (accepts DOMMatrix)
          ctx.setTransform(prevTransform)
        }
      }
      ctx.beginPath()
      const sx = startXRef.current ?? x
      const sy = startYRef.current ?? y
      if (currentTool === "line") {
        ctx.moveTo(sx, sy)
        ctx.lineTo(x, y)
        ctx.stroke()
      } else if (currentTool === "rectangle") {
        ctx.strokeRect(sx, sy, x - sx, y - sy)
      } else if (currentTool === "ellipse") {
        const cx = (sx + x) / 2
        const cy = (sy + y) / 2
        const rx = Math.abs(x - sx) / 2
        const ry = Math.abs(y - sy) / 2
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2)
        ctx.stroke()
      }
    }
  }

  function endDrawing() {
    const ctx = ctxRef.current
    if (!ctx || !isDrawingRef.current) return
    ctx.closePath()
    isDrawingRef.current = false
    startXRef.current = null
    startYRef.current = null
    snapshotRef.current = null
    // reset composite just in case
    ctx.globalCompositeOperation = "source-over"
  }

  async function restoreSnapshot(snapshot: Blob | string | null) {
    if (!snapshot) return
    const ctx = ctxRef.current
    const canvas = canvasRef.current
    if (!ctx || !canvas) return

    // Helper to draw an ImageBitmap into the pixel buffer with identity
    async function drawBitmap(bitmap: ImageBitmap) {
      const ctxNonNull = ctx!
      const canvasNonNull = canvas!
      const prev = ctxNonNull.getTransform()
      ctxNonNull.setTransform(1, 0, 0, 1, 0, 0)
      try {
        ctxNonNull.clearRect(0, 0, canvasNonNull.width, canvasNonNull.height)
        ctxNonNull.drawImage(
          bitmap,
          0,
          0,
          canvasNonNull.width,
          canvasNonNull.height
        )
      } finally {
        ctxNonNull.setTransform(prev)
        try {
          // close bitmap if supported
          bitmap.close()
        } catch (e) {
          /* ignore */
        }
      }
    }

    try {
      if (typeof Blob !== "undefined" && snapshot instanceof Blob) {
        // createImageBitmap is efficient and avoids creating an extra data URL
        if (typeof createImageBitmap !== "undefined") {
          const bmp = await createImageBitmap(snapshot)
          await drawBitmap(bmp)
          return
        }
        // fallback to object URL + Image
        const url = URL.createObjectURL(snapshot)
        const img = new Image()
        await new Promise<void>((res, rej) => {
          img.onload = () => {
            try {
              // draw using pixel-sized buffer
              const ctxNonNull = ctx!
              const canvasNonNull = canvas!
              const prev = ctxNonNull.getTransform()
              ctxNonNull.setTransform(1, 0, 0, 1, 0, 0)
              try {
                ctxNonNull.clearRect(
                  0,
                  0,
                  canvasNonNull.width,
                  canvasNonNull.height
                )
                ctxNonNull.drawImage(
                  img,
                  0,
                  0,
                  canvasNonNull.width,
                  canvasNonNull.height
                )
              } finally {
                ctxNonNull.setTransform(prev)
              }
              res()
            } catch (e) {
              rej(e)
            }
          }
          img.onerror = () => rej(new Error("image load error"))
          img.src = url
        })
        URL.revokeObjectURL(url)
        return
      }

      if (typeof snapshot === "string") {
        // data URL path (fallback)
        const img = new Image()
        await new Promise<void>((res, rej) => {
          img.onload = () => {
            try {
              const ctxNonNull = ctx!
              const canvasNonNull = canvas!
              const prev = ctxNonNull.getTransform()
              ctxNonNull.setTransform(1, 0, 0, 1, 0, 0)
              try {
                ctxNonNull.clearRect(
                  0,
                  0,
                  canvasNonNull.width,
                  canvasNonNull.height
                )
                ctxNonNull.drawImage(
                  img,
                  0,
                  0,
                  canvasNonNull.width,
                  canvasNonNull.height
                )
              } finally {
                ctxNonNull.setTransform(prev)
              }
              res()
            } catch (e) {
              rej(e)
            }
          }
          img.onerror = () => rej(new Error("image load error"))
          img.src = snapshot
        })
        return
      }
    } catch (err) {
      // ignore restore errors
      console.error("restoreSnapshot error", err)
    }
  }

  const undo = useCallback(() => {
    ;(async () => {
      const stack = undoStackRef.current
      if (!stack.length) return
      const canvas = canvasRef.current
      if (!canvas) return
      try {
        const current = await captureSnapshot()
        if (current) redoStackRef.current.push(current)
      } catch (e) {
        /* ignore */
      }
      const last = stack.pop() || null
      await restoreSnapshot(last)
      setHistoryVersion((v) => v + 1)
    })()
  }, [])

  const redo = useCallback(() => {
    ;(async () => {
      const stack = redoStackRef.current
      if (!stack.length) return
      const canvas = canvasRef.current
      if (!canvas) return
      try {
        const current = await captureSnapshot()
        if (current) undoStackRef.current.push(current)
      } catch (e) {
        /* ignore */
      }
      const last = stack.pop() || null
      await restoreSnapshot(last)
      setHistoryVersion((v) => v + 1)
    })()
  }, [])

  // Listen for menu-driven Undo/Redo/Save triggers via atoms
  const isTriggerDownload = useAtomValue(isTriggerDownloadAtom)
  const undoRequested = useAtomValue(undoRequestedAtom)
  const redoRequested = useAtomValue(redoRequestedAtom)
  const setImageData = useSetAtom(imageDataAtom)
  const setUndoRequested = useSetAtom(undoRequestedAtom)
  const setRedoRequested = useSetAtom(redoRequestedAtom)
  const setTriggerDownload = useSetAtom(isTriggerDownloadAtom)

  useEffect(() => {
    if (undoRequested) {
      // perform undo and reset trigger
      undo()
      setUndoRequested(false)
    }
  }, [undoRequested, undo, setUndoRequested])

  useEffect(() => {
    if (redoRequested) {
      redo()
      setRedoRequested(false)
    }
  }, [redoRequested, redo, setRedoRequested])

  useEffect(() => {
    if (!isTriggerDownload) return
    ;(async () => {
      try {
        const canvas = canvasRef.current
        if (!canvas) return

        // prefer blob to avoid huge dataurls in memory
        const blobOrData = await captureSnapshot()
        if (!blobOrData) return

        // create a filename with timestamp
        const filename = `paint-${new Date().toISOString().replace(/[:.]/g, "-")}.png`

        if (typeof blobOrData === "string") {
          // data URL
          // attempt navigator.share on mobile
          if ((navigator as any).share) {
            try {
              const res = await fetch(blobOrData)
              const blob = await res.blob()
              const file = new File([blob], filename, { type: blob.type })
              await (navigator as any).share({ files: [file] })
            } catch (e) {
              // fallback to opening in new tab
              window.open(blobOrData, "_blank")
            }
          } else {
            // desktop/mobile fallback
            const a = document.createElement("a")
            a.href = blobOrData
            a.download = filename
            document.body.appendChild(a)
            a.click()
            a.remove()
          }
          setImageData(blobOrData)
        } else {
          // Blob path
          // On supporting browsers, prefer navigator.share with Files
          if ((navigator as any).canShare && (navigator as any).share) {
            try {
              const file = new File([blobOrData], filename, {
                type: blobOrData.type,
              })
              await (navigator as any).share({ files: [file] })
            } catch (e) {
              // fallback to download
              const url = URL.createObjectURL(blobOrData)
              const a = document.createElement("a")
              a.href = url
              a.download = filename
              document.body.appendChild(a)
              a.click()
              a.remove()
              URL.revokeObjectURL(url)
            }
          } else {
            const url = URL.createObjectURL(blobOrData)
            const a = document.createElement("a")
            a.href = url
            a.download = filename
            document.body.appendChild(a)
            a.click()
            a.remove()
            URL.revokeObjectURL(url)
          }

          try {
            // also set imageData as dataURL for other consumers
            const dataUrl = await new Promise<string | null>((res) => {
              const reader = new FileReader()
              reader.onload = () => res(String(reader.result))
              reader.onerror = () => res(null)
              reader.readAsDataURL(blobOrData)
            })
            if (dataUrl) setImageData(dataUrl)
          } catch (e) {
            /* ignore */
          }
        }
      } catch (e) {
        console.error("save failed", e)
      } finally {
        // reset trigger
        setTriggerDownload(false)
      }
    })()
  }, [isTriggerDownload, setImageData, setTriggerDownload])

  // keyboard shortcuts: ctrl/cmd+z (undo), ctrl/cmd+y or ctrl+shift+z (redo)
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.defaultPrevented) return
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      )
        return

      const isMod = e.ctrlKey || e.metaKey
      if (!isMod) return

      // z -> undo (shift => redo)
      if (e.key === "z" || e.key === "Z") {
        e.preventDefault()
        if (e.shiftKey) redo()
        else undo()
      } else if (e.key === "y" || e.key === "Y") {
        e.preventDefault()
        redo()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [undo, redo])

  return (
    // root flex container that fits the parent window
    <div className="bg-windows flex h-full min-h-0 w-full flex-col gap-1 select-none">
      <div className="flex min-h-0 flex-1 gap-1">
        <div className="bg-windows grid size-fit max-h-full w-20 flex-none grid-cols-1 gap-0.5 space-y-2 sm:w-24 md:w-auto md:grid-cols-2">
          <TooltipProvider>
            {TOOLS.map((t) => (
              <Tooltip key={t.id}>
                <TooltipTrigger asChild>
                  <button
                    disabled={!t.enabled}
                    onClick={() => setTool(t.id)}
                    className={`border-windows-dark border-r-windows-white border-b-windows-white bg-windows mb-1 flex size-10 items-center justify-center border p-1 ${
                      tool === t.id ? "bg-windows-dark border-black" : ""
                    }`}
                  >
                    <t.icon size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-windows-blue text-windows-white rounded-none">
                  {t.tooltip}
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
          <div className="col-span-full mt-2 w-full flex-col gap-1">
            <span className="text-windows-black">Width: {lineWidth}</span>
            <LineWidthSlider
              lineWidth={lineWidth}
              setLineWidth={setLineWidth}
            />
          </div>
          <button
            onClick={undo}
            disabled={!canUndo}
            className={`border-windows-dark col-span-1 mx-auto size-6 border p-0.5 ${
              !canUndo ? "cursor-not-allowed opacity-50" : ""
            }`}
            aria-label="undo"
            title="Undo (Ctrl+Z)"
          >
            <UndoIcon className="size-4" />
          </button>
          <button
            onClick={redo}
            disabled={!canRedo}
            className={`border-windows-dark col-span-1 mx-auto size-6 border p-0.5 ${
              !canRedo ? "cursor-not-allowed opacity-50" : ""
            }`}
            aria-label="redo"
            title="Redo (Ctrl+Y / Ctrl+Shift+Z)"
          >
            <RedoIcon className="size-4" />
          </button>
        </div>
        <div
          ref={setCanvasContainerRef}
          className="border-windows-dark border-r-windows-white border-b-windows-white bg-windows-white min-h-0 flex-1 overflow-hidden border"
        >
          <canvas
            ref={canvasRef}
            onMouseDown={(e) => startDrawing(e)}
            onMouseMove={(e) => draw(e)}
            onMouseUp={() => endDrawing()}
            onMouseOut={() => endDrawing()}
            onTouchStart={(e) => {
              e.preventDefault()
              startDrawing(e)
            }}
            onTouchMove={(e) => {
              e.preventDefault()
              draw(e)
            }}
            onTouchEnd={(e) => {
              e.preventDefault()
              endDrawing()
            }}
            onContextMenu={(e) => e.preventDefault()}
            // prevent browser touch gestures while interacting with the canvas
            style={{ touchAction: "none" }}
            className="block h-full w-full"
          />
        </div>
      </div>
      <div className="bg-windows flex gap-0.5 p-1">
        <div className="relative mr-1 size-8">
          <div
            className="absolute top-0 left-0 z-10 size-4 border border-black"
            style={{ backgroundColor: primaryColor }}
          />
          <div
            className="absolute right-0 bottom-0 z-0 size-4 border border-black"
            style={{ backgroundColor: secondaryColor }}
          />
        </div>
        <div className="flex flex-col gap-0.5">
          {COLOR_PALETTE.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-0.5">
              {row.map((color) => (
                <button
                  key={color}
                  className="border-windows-dark size-4 cursor-pointer border p-0 hover:border-black"
                  style={{ backgroundColor: color }}
                  onClick={() => setPrimaryColor(color)}
                  onContextMenu={(e) => {
                    e.preventDefault()
                    setSecondaryColor(color)
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
