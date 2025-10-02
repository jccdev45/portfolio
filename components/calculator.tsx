"use client"

import { useState } from "react"
import Link from "next/link"
import { CalculatorIcon, XIcon } from "lucide-react"

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
  }
  function mr() {
    if (memory != null) {
      setDisplay(String(memory))
      setWaitingForNew(true)
    }
  }
  function ms() {
    setMemory(Number(display))
    setWaitingForNew(true)
  }
  function mplus() {
    setMemory((m) => (m == null ? Number(display) : m + Number(display)))
    setWaitingForNew(true)
  }

  const buttons: { label: string; onClick: () => void; className?: string }[] =
    [
      { label: "MC", onClick: mc },
      { label: "MR", onClick: mr },
      { label: "MS", onClick: ms },
      { label: "M+", onClick: mplus },
      { label: "sqrt", onClick: sqrt },
      { label: "7", onClick: () => inputDigit("7") },
      { label: "8", onClick: () => inputDigit("8") },
      { label: "9", onClick: () => inputDigit("9") },
      { label: "/", onClick: () => applyOperator("/") },
      { label: "%", onClick: percent },
      { label: "4", onClick: () => inputDigit("4") },
      { label: "5", onClick: () => inputDigit("5") },
      { label: "6", onClick: () => inputDigit("6") },
      { label: "*", onClick: () => applyOperator("*") },
      { label: "1/x", onClick: reciprocal },
      { label: "1", onClick: () => inputDigit("1") },
      { label: "2", onClick: () => inputDigit("2") },
      { label: "3", onClick: () => inputDigit("3") },
      { label: "-", onClick: () => applyOperator("-") },
      { label: "+/-", onClick: toggleSign },
      { label: "0", onClick: () => inputDigit("0") },
      { label: ".", onClick: inputDot },
      { label: "+", onClick: () => applyOperator("+") },
      {
        label: "=",
        onClick: handleEquals,
        className: "col-span-1 text-red-500",
      },
    ]

  return (
    <section className="border-b-windows-dark border-l-windows border-r-windows-dark border-t-windows bg-windows shadow-windows-dark absolute inset-1/2 flex w-[28rem] -translate-x-1/2 -translate-y-1/2 flex-col border">
      <header className="from-windows-blue text-windows-white flex h-8 w-full items-center justify-between bg-linear-to-r to-[rgb(0,126,196)] px-1.5 py-0.5 select-none md:h-9">
        <div className="flex items-center gap-x-2 text-sm">
          <CalculatorIcon />
          <p className="font-bold">Calculator</p>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            className="border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white bg-windows text-windows-black size-6 rounded-none border p-0.5"
            asChild
          >
            <Link href="/">
              <XIcon />
            </Link>
          </Button>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="bg-windows-white border-t-windows-dark border-r-windows border-l-windows-dark border-b-windows w-full border-2 p-2 text-right font-mono text-2xl shadow-inner">
          {display}
        </div>

        <div className="grid grid-cols-5 gap-2">
          {buttons.map((b) => (
            <Button
              key={b.label}
              variant="windows"
              className={cn("rounded-none", b.className)}
              onClick={b.onClick}
            >
              {b.label}
            </Button>
          ))}
          <Button variant="windows" className="col-span-3" onClick={clearEntry}>
            CE
          </Button>
          <Button variant="windows" className="col-span-2" onClick={clearAll}>
            C
          </Button>
        </div>
      </div>
    </section>
  )
}
