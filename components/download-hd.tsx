"use client"

import React, { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DownloadHD() {
  const [progress, setProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)
  const [showScan, setShowScan] = useState(false)
  const [showEmbed, setShowEmbed] = useState(false)
  const [selectedDrive, setSelectedDrive] = useState("")
  const [selectedSpace, setSelectedSpace] = useState("")

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isDownloading && progress < 100) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + Math.random() * 10
          return newProgress > 100 ? 100 : newProgress
        })
      }, 500)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isDownloading, progress])

  const handleDownload = () => {
    if (isDownloading) {
      setIsDownloading(false)
    } else {
      setProgress(0)
      setIsDownloading(true)
      setShowScan(false)
      setShowEmbed(false)
    }
  }

  const handleScan = () => {
    setShowEmbed(true)
  }

  return (
    <div className="absolute inset-0 overflow-y-auto border-2 border-windows-white bg-windows p-4 shadow-[inset_-1px_-1px_0_0_#868a8e,inset_1px_1px_0_0_#fff]">
      {showEmbed && (
        <div className="mt-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <h1 className="mb-4 text-2xl font-bold text-windows-black">
        Download More Hard Drive Space
      </h1>

      <div className="mb-4">
        <label className="mb-2 block text-windows-black">Select Drive:</label>
        <Select onValueChange={setSelectedDrive}>
          <SelectTrigger className="w-[180px] bg-windows-white text-windows-black">
            <SelectValue placeholder="Choose a drive" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="c">C: Drive</SelectItem>
            <SelectItem value="d">D: Drive</SelectItem>
            <SelectItem value="e">E: Drive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-windows-black">
          Select Space to Download:
        </label>
        <Select onValueChange={setSelectedSpace}>
          <SelectTrigger className="w-[180px] bg-windows-white text-windows-black">
            <SelectValue placeholder="Choose space" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10gb">10 GB</SelectItem>
            <SelectItem value="50gb">50 GB</SelectItem>
            <SelectItem value="100gb">100 GB</SelectItem>
            <SelectItem value="500gb">500 GB</SelectItem>
            <SelectItem value="1tb">1 TB</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        className="mb-4 bg-windows-blue text-windows-white hover:bg-windows-dark disabled:opacity-50"
        onClick={handleDownload}
      >
        {isDownloading ? "Stop Download" : "Download More Space"}
      </Button>

      <div>
        <p className="mb-2 text-windows-black">Download Progress:</p>
        <Progress
          value={progress}
          className="h-[20px] w-[300px] border border-windows-dark bg-windows-white"
        />
      </div>

      {progress === 100 && !showScan && (
        <div className="mt-4">
          <p className="text-windows-green">Download Complete!</p>
          <Button
            className="mt-2 bg-windows-blue text-windows-white hover:bg-windows-dark"
            onClick={() => setShowScan(true)}
          >
            Click to run scans for additional info
          </Button>
        </div>
      )}

      {showScan && (
        <div className="mt-4">
          <Button
            className="bg-windows-blue text-windows-white hover:bg-windows-dark"
            onClick={handleScan}
          >
            Run Scan
          </Button>
        </div>
      )}
    </div>
  )
}
