"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Op = "+" | "-" | "*" | "/" | null

export function Calculator() {
  const [display, setDisplay] = useState("0")
  const [acc, setAcc] = useState<number | null>(null)
  const [op, setOp] = useState<Op>(null)
  const [waitingForNew, setWaitingForNew] = useState(false)
  const [memory, setMemory] = useState<number | null>(null)

  function inputDigit(d: string) {
    if (waitingForNew) {
      setDisplay(d)
      setWaitingForNew(false)
    } else {
      setDisplay((s) => (s === "0" ? d : s + d))
    }
  }

  function inputDot() {
    if (waitingForNew) {
      setDisplay("0.")
      setWaitingForNew(false)
      return
    }
    if (!display.includes(".")) setDisplay((s) => s + ".")
  }

  function clearAll() {
    setDisplay("0")
    setAcc(null)
    setOp(null)
    setWaitingForNew(false)
  }

  function clearEntry() {
    setDisplay("0")
  }

  function toggleSign() {
    setDisplay((s) => (s.startsWith("-") ? s.slice(1) : "-" + s))
  }

  function percent() {
    setDisplay((s) => String(Number(s) / 100))
  }

  function reciprocal() {
    setDisplay((s) => {
      const n = Number(s)
      return n === 0 ? "Error" : String(1 / n)
    })
    setWaitingForNew(true)
  }

  function sqrt() {
    setDisplay((s) => {
      const n = Number(s)
      return n < 0 ? "Error" : String(Math.sqrt(n))
    })
    setWaitingForNew(true)
  }

  function applyOperator(nextOp: Op) {
    const inputValue = Number(display)
    if (acc == null) {
      setAcc(inputValue)
    } else if (op) {
      const result = compute(acc, inputValue, op)
      setAcc(result)
      setDisplay(String(result))
    }
    setWaitingForNew(true)
    setOp(nextOp)
  }

  function compute(a: number, b: number, operator: Op): number {
    switch (operator) {
      case "+":
        return a + b
      case "-":
        return a - b
      case "*":
        return a * b
      case "/":
        return b === 0 ? NaN : a / b
      default:
        return b
    }
  }

  function handleEquals() {
    if (op == null) return
    const inputValue = Number(display)
    const result = compute(acc ?? inputValue, inputValue, op)
    setDisplay(String(result))
    setAcc(null)
    setOp(null)
    setWaitingForNew(true)
  }

  // Memory handlers
  function mc() {
    setMemory(null)
    setAnnouncement("memory cleared")
  }
  function mr() {
    if (memory != null) {
      setDisplay(String(memory))
      setWaitingForNew(true)
      setAnnouncement(`memory recalled: ${memory}`)
    }
  }
  function ms() {
    setMemory(Number(display))
    setWaitingForNew(true)
    setAnnouncement(`memory stored: ${display}`)
  }
  function mplus() {
    setMemory((m) => (m == null ? Number(display) : m + Number(display)))
    setWaitingForNew(true)
    setAnnouncement(`memory added: ${display}`)
  }

  // accessible announcement for screen readers
  const [announcement, setAnnouncement] = useState<string | null>(null)

  const buttons: {
    label: string
    onClick: () => void
    className?: string
    disabled?: boolean
  }[] = [
    {
      label: "MC",
      onClick: mc,
      className: undefined,
      disabled: memory == null,
    },
    {
      label: "MR",
      onClick: mr,
      className: undefined,
      disabled: memory == null,
    },
    { label: "MS", onClick: ms, className: "text-windows-blue" },
    { label: "M+", onClick: mplus, className: "text-destructive" },
    { label: "sqrt", onClick: sqrt, className: "text-windows-blue" },
    {
      label: "7",
      onClick: () => inputDigit("7"),
      className: "text-windows-blue",
    },
    {
      label: "8",
      onClick: () => inputDigit("8"),
      className: "text-windows-blue",
    },
    {
      label: "9",
      onClick: () => inputDigit("9"),
      className: "text-windows-blue",
    },
    {
      label: "/",
      onClick: () => applyOperator("/"),
      className: "text-destructive",
    },
    { label: "%", onClick: percent, className: "text-windows-blue" },
    {
      label: "4",
      onClick: () => inputDigit("4"),
      className: "text-windows-blue",
    },
    {
      label: "5",
      onClick: () => inputDigit("5"),
      className: "text-windows-blue",
    },
    {
      label: "6",
      onClick: () => inputDigit("6"),
      className: "text-windows-blue",
    },
    {
      label: "*",
      onClick: () => applyOperator("*"),
      className: "text-destructive",
    },
    { label: "1/x", onClick: reciprocal, className: "text-windows-blue" },
    {
      label: "1",
      onClick: () => inputDigit("1"),
      className: "text-windows-blue",
    },
    {
      label: "2",
      onClick: () => inputDigit("2"),
      className: "text-windows-blue",
    },
    {
      label: "3",
      onClick: () => inputDigit("3"),
      className: "text-windows-blue",
    },
    {
      label: "-",
      onClick: () => applyOperator("-"),
      className: "text-destructive",
    },
    { label: "+/-", onClick: toggleSign, className: "text-windows-blue" },
    {
      label: "0",
      onClick: () => inputDigit("0"),
      className: "text-windows-blue",
    },
    { label: ".", onClick: inputDot, className: "text-windows-blue" },
    {
      label: "+",
      onClick: () => applyOperator("+"),
      className: "text-destructive",
    },
    {
      label: "=",
      onClick: handleEquals,
      className: "text-destructive col-span-1",
    },
  ]

  // map a label to a helpful aria-label
  function ariaLabelFor(label: string) {
    switch (label) {
      case "MC":
        return "memory clear"
      case "MR":
        return "memory recall"
      case "MS":
        return "memory store"
      case "M+":
        return "memory add"
      case "sqrt":
        return "square root"
      case "1/x":
        return "reciprocal"
      case "+/-":
        return "toggle sign"
      case "CE":
        return "clear entry"
      case "C":
        return "clear"
      case "%":
        return "percent"
      case ".":
        return "decimal point"
      case "=":
        return "equals"
      default:
        return label
    }
  }

  useEffect(() => {
    if (!announcement) return
    const t = setTimeout(() => setAnnouncement(null), 2000)
    return () => clearTimeout(t)
  }, [announcement])

  // keyboard support
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const k = e.key
      if (/^[0-9]$/.test(k)) {
        e.preventDefault()
        inputDigit(k)
        return
      }
      if (k === ".") {
        e.preventDefault()
        inputDot()
        return
      }
      if (k === "+" || k === "-" || k === "*" || k === "/") {
        e.preventDefault()
        applyOperator(k as Op)
        return
      }
      if (k === "Enter" || k === "=") {
        e.preventDefault()
        handleEquals()
        return
      }
      if (k === "Escape") {
        e.preventDefault()
        clearAll()
        return
      }
      if (k === "Backspace") {
        e.preventDefault()
        clearEntry()
        return
      }
      // memory shortcuts: m = store, r = recall, x = clear memory
      if (k === "m" || k === "M") {
        e.preventDefault()
        ms()
        return
      }
      if (k === "r" || k === "R") {
        e.preventDefault()
        mr()
        return
      }
      if (k === "x" || k === "X") {
        e.preventDefault()
        mc()
        return
      }
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [display, waitingForNew, acc, op, memory])

  return (
    <div className="bg-windows flex flex-1 flex-col gap-4 px-2 pt-2 pb-8">
      <div
        className="bg-windows-white border-t-windows-dark border-r-windows border-l-windows-dark border-b-windows relative w-full border-2 p-2 text-right font-mono text-2xl shadow-inner"
        role="region"
        aria-label="calculator display"
      >
        {memory != null && (
          <span
            className="text-windows-blue absolute top-1 left-2 text-sm font-bold"
            aria-hidden="false"
            aria-live="polite"
          >
            M
          </span>
        )}
        <div aria-live="polite">{display}</div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {buttons.map((b) => (
          <Button
            key={b.label}
            variant="windows"
            className={cn(
              "rounded-none",
              b.className,
              b.disabled ? "cursor-not-allowed opacity-50" : ""
            )}
            onClick={() => {
              if (b.disabled) return
              b.onClick()
            }}
            disabled={b.disabled}
            aria-label={ariaLabelFor(b.label)}
            aria-disabled={b.disabled ? "true" : "false"}
          >
            {b.label}
          </Button>
        ))}
        <Button
          variant="windows"
          className="text-destructive col-span-3"
          onClick={clearEntry}
        >
          CE
        </Button>
        <Button
          variant="windows"
          className="text-destructive col-span-2"
          onClick={clearAll}
        >
          C
        </Button>
      </div>
      {/* live region for announcements (memory stored/cleared) */}
      <div className="sr-only" aria-live="polite">
        {announcement}
      </div>
    </div>
  )
}
