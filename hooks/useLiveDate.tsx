"use client"

import { useCallback, useEffect, useRef } from "react"
import { dateAtom } from "@/atoms/atoms"
import { useAtom } from "jotai"

export function useLiveDate(interval: number = 60000) {
  const [date, setDate] = useAtom(dateAtom)
  const timerRef = useRef<number | null>(null)

  const updateDate = useCallback(() => {
    setDate(new Date())
  }, [setDate])

  useEffect(() => {
    if (!timerRef.current) {
      updateDate() // Set initial date
      timerRef.current = window.setInterval(updateDate, interval)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [interval, updateDate])

  return { date, setDate }
}
