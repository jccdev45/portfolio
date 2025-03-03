"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import {
  ArrowDownIcon as BendDown,
  Circle,
  Eraser,
  MinusSquare,
  MousePointer,
  Paintbrush,
  Pencil,
  Pentagon,
  SquareUserRoundIcon as RoundedCorner,
  Search,
  SprayCanIcon as Spray,
  Square,
  Type,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Tool {
  id: string
  icon: React.ComponentType<{ size: number }>
  enabled: boolean
  tooltip: string
}

const tools: Tool[] = [
  {
    id: "pencil",
    icon: Pencil,
    enabled: true,
    tooltip: "Pencil âœ… - Freehand drawing",
  },
  {
    id: "brush",
    icon: Paintbrush,
    enabled: true,
    tooltip: "Brush âœ… - Similar to pencil",
  },
  {
    id: "spray",
    icon: Spray,
    enabled: true,
    tooltip: "Spray âœ… - Basic spray effect",
  },
  {
    id: "line",
    icon: MinusSquare,
    enabled: true,
    tooltip: "Line âœ… - Straight line",
  },
  {
    id: "rectangle",
    icon: Square,
    enabled: true,
    tooltip: "Rectangle âœ… - Rectangle drawing",
  },
  {
    id: "ellipse",
    icon: Circle,
    enabled: true,
    tooltip: "Ellipse âœ… - Circle drawing",
  },
  {
    id: "rounded-rect",
    icon: RoundedCorner,
    enabled: true,
    tooltip: "Rounded Rect âœ… - Rounded corners",
  },
  {
    id: "eraser",
    icon: Eraser,
    enabled: true,
    tooltip: "Eraser âœ… - Erases with background",
  },
]

const colorPalette = [
  [
    "oklch(0.0 0.0 0.0)",
    "oklch(0.53 0.0 0.0)",
    "oklch(0.33 0.25 29.0)",
    "oklch(0.53 0.25 109.0)",
    "oklch(0.53 0.25 142.0)",
    "oklch(0.53 0.25 195.0)",
    "oklch(0.33 0.25 264.0)",
    "oklch(0.53 0.25 327.0)",
    "oklch(0.53 0.25 60.0)",
    "oklch(0.33 0.25 180.0)",
    "oklch(0.53 0.25 240.0)",
    "oklch(0.33 0.25 300.0)",
    "oklch(0.53 0.25 360.0)",
    "oklch(0.53 0.25 30.0)",
  ],
  [
    "oklch(1.0 0.0 0.0)",
    "oklch(0.8 0.0 0.0)",
    "oklch(0.6 0.25 29.0)",
    "oklch(0.8 0.25 109.0)",
    "oklch(0.8 0.25 142.0)",
    "oklch(0.8 0.25 195.0)",
    "oklch(0.6 0.25 264.0)",
    "oklch(0.8 0.25 327.0)",
    "oklch(0.8 0.25 60.0)",
    "oklch(0.6 0.25 180.0)",
    "oklch(0.8 0.25 240.0)",
    "oklch(0.6 0.25 300.0)",
    "oklch(0.8 0.25 360.0)",
    "oklch(0.8 0.25 30.0)",
  ],
]

interface PaintProps {
  tool: string
  primaryColor: string
  secondaryColor: string
  lineWidth: number
  isDrawing: boolean
  ctx: CanvasRenderingContext2D | null
  canvasRef: React.RefObject<HTMLCanvasElement | null> // Allow null in ref type
  startX?: number
  startY?: number
  imageData?: string | null
}

function handleDrawingStart(
  e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>,
  props: PaintProps
) {
  const { ctx, canvasRef, isDrawing } = props
  if (!ctx || isDrawing) return
  const rect = canvasRef.current!.getBoundingClientRect()
  const x = (e as React.MouseEvent).clientX
    ? (e as React.MouseEvent).clientX - rect.left
    : (e as React.TouchEvent).touches[0].clientX - rect.left
  const y = (e as React.MouseEvent).clientY
    ? (e as React.MouseEvent).clientY - rect.top
    : (e as React.TouchEvent).touches[0].clientY - rect.top
  ctx.beginPath()
  ctx.moveTo(x, y)
  props.isDrawing = true
  props.startX = x
  props.startY = y
}

function handleDrawing(
  e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>,
  props: PaintProps
) {
  const {
    ctx,
    canvasRef,
    isDrawing,
    tool,
    primaryColor,
    secondaryColor,
    lineWidth,
    startX,
    startY,
  } = props
  if (!isDrawing || !ctx) return
  const rect = canvasRef.current!.getBoundingClientRect()
  const x = (e as React.MouseEvent).clientX
    ? (e as React.MouseEvent).clientX - rect.left
    : (e as React.TouchEvent).touches[0].clientX - rect.left
  const y = (e as React.MouseEvent).clientY
    ? (e as React.MouseEvent).clientY - rect.top
    : (e as React.TouchEvent).touches[0].clientY - rect.top

  const isRightClick = (e as React.MouseEvent).buttons === 2

  ctx.strokeStyle =
    tool === "eraser"
      ? "oklch(1.0 0.0 0.0)"
      : isRightClick
        ? secondaryColor
        : primaryColor
  ctx.lineWidth = lineWidth

  if (tool === "pencil" || tool === "brush" || tool === "eraser") {
    ctx.lineTo(x, y)
    ctx.stroke()
  } else if (tool === "line" && startX !== undefined && startY !== undefined) {
    const canvas = canvasRef.current
    if (!canvas) return

    ctx.save()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (props.imageData) {
      const img = new Image()
      img.src = props.imageData
      ctx.drawImage(img, 0, 0)
    }
    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.restore()
  } else if (
    tool === "rectangle" &&
    startX !== undefined &&
    startY !== undefined
  ) {
    const canvas = canvasRef.current
    if (!canvas) return

    ctx.save()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (props.imageData) {
      const img = new Image()
      img.src = props.imageData
      ctx.drawImage(img, 0, 0)
    }
    ctx.strokeRect(startX, startY, x - startX, y - startY)
    ctx.restore()
  } else if (
    tool === "ellipse" &&
    startX !== undefined &&
    startY !== undefined
  ) {
    const canvas = canvasRef.current
    if (!canvas) return

    ctx.save()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (props.imageData) {
      const img = new Image()
      img.src = props.imageData
      ctx.drawImage(img, 0, 0)
    }
    ctx.beginPath()
    ctx.ellipse(
      (startX + x) / 2,
      (startY + y) / 2,
      Math.abs(x - startX) / 2,
      Math.abs(y - startY) / 2,
      0,
      0,
      2 * Math.PI
    )
    ctx.stroke()
    ctx.restore()
  }
}

function handleDrawingEnd(props: PaintProps) {
  const { ctx, canvasRef, isDrawing } = props
  if (!ctx || !isDrawing) return
  ctx.closePath()
  props.isDrawing = false
  const canvas = canvasRef.current
  if (canvas) {
    props.imageData = canvas.toDataURL()
  }
}

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
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [tool, setTool] = useState<string>("pencil")
  const [primaryColor, setPrimaryColor] = useState("oklch(0.0 0.0 0.0)")
  const [secondaryColor, setSecondaryColor] = useState("oklch(1.0 0.0 0.0)")
  const [lineWidth, setLineWidth] = useState(1)
  const [imageData, setImageData] = useState<string | null>(null)

  const initializeCanvas = useCallback(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas.getContext("2d")
      if (context) {
        const tempImageData = canvas.toDataURL()
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
        context.fillStyle = "oklch(1.0 0.0 0.0)"
        context.fillRect(0, 0, canvas.width, canvas.height)
        setCtx(context)
        if (tempImageData) {
          const img = new Image()
          img.src = tempImageData
          img.onload = () => {
            context.drawImage(img, 0, 0)
          }
        }
      }
    }
  }, [])

  useEffect(() => {
    initializeCanvas()
    window.addEventListener("resize", initializeCanvas)
    return () => {
      window.removeEventListener("resize", initializeCanvas)
    }
  }, [initializeCanvas])

  const paintProps: PaintProps = {
    tool,
    primaryColor,
    secondaryColor,
    lineWidth,
    isDrawing,
    ctx,
    canvasRef,
    imageData,
  }

  return (
    <div className="bg-windows flex h-[calc(100%-24px)] flex-col justify-between gap-1 select-none">
      <div className="flex h-full w-full justify-between gap-1">
        <div className="bg-windows grid size-fit grid-cols-1 gap-0.5 md:grid-cols-2">
          <TooltipProvider>
            {tools.map((t) => (
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
          <div className="col-span-full mt-2 flex w-full flex-col gap-1">
            <span className="text-windows-black">Width: {lineWidth}</span>
            <LineWidthSlider
              lineWidth={lineWidth}
              setLineWidth={setLineWidth}
            />
          </div>
        </div>
        <div className="border-windows-dark border-r-windows-white border-b-windows-white bg-windows-white flex-grow border">
          <canvas
            ref={canvasRef}
            onMouseDown={(e) => handleDrawingStart(e, paintProps)}
            onMouseMove={(e) => handleDrawing(e, paintProps)}
            onMouseUp={() => handleDrawingEnd(paintProps)}
            onMouseOut={() => handleDrawingEnd(paintProps)}
            onTouchStart={(e) => handleDrawingStart(e, paintProps)}
            onTouchMove={(e) => handleDrawing(e, paintProps)}
            onTouchEnd={() => handleDrawingEnd(paintProps)}
            onContextMenu={(e) => e.preventDefault()}
            className="h-full w-full"
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
          {colorPalette.map((row, rowIndex) => (
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
