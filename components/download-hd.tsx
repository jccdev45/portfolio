"use client"

import { useState } from "react"
import { FileWarning } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface DriveOption {
  value: string
  label: string
}

interface SpaceOption {
  value: string
  label: string
}

const DRIVE_OPTIONS: DriveOption[] = [
  { value: "c", label: "C: Drive" },
  { value: "d", label: "D: Drive" },
  { value: "e", label: "E: Drive" },
]

const SPACE_OPTIONS: SpaceOption[] = [
  { value: "10gb", label: "10 GB" },
  { value: "50gb", label: "50 GB" },
  { value: "100gb", label: "100 GB" },
  { value: "500gb", label: "500 GB" },
  { value: "1tb", label: "1 TB" },
]

export function DownloadHD() {
  const [progress, setProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)
  const [showScan, setShowScan] = useState(false)
  const [showEmbed, setShowEmbed] = useState(false)
  const [selectedDrive, setSelectedDrive] = useState("")
  const [selectedSpace, setSelectedSpace] = useState("")

  const handleDownload = () => {
    if (isDownloading) {
      setIsDownloading(false)
      return
    }

    setProgress(0)
    setIsDownloading(true)
    setShowScan(false)
    setShowEmbed(false)

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10
        if (newProgress >= 100) {
          clearInterval(interval)
          setIsDownloading(false)
          return 100
        }
        return newProgress
      })
    }, 500)
  }

  const handleScan = () => setShowEmbed(true)

  return (
    <div
      className={cn(
        "bg-windows border-windows absolute inset-0 grid grid-cols-1 gap-4 overflow-y-auto border p-4 shadow-inner md:grid-cols-2",
        showEmbed ?? "lg:grid-cols-3"
      )}
    >
      <section className="flex flex-col md:col-span-2 lg:col-span-1">
        <h1 className="text-windows-black mb-4 text-2xl font-bold">
          Download More Hard Drive Space
        </h1>
        <SelectField
          label="Select Drive:"
          options={DRIVE_OPTIONS}
          value={selectedDrive}
          onChange={setSelectedDrive}
        />
        <SelectField
          label="Select Space to Download:"
          options={SPACE_OPTIONS}
          value={selectedSpace}
          onChange={setSelectedSpace}
        />
        <Button
          className="disabled:text-windows-black/50 text-windows-black mb-4 w-fit disabled:opacity-50"
          variant="windows"
          onClick={handleDownload}
          disabled={!selectedDrive || !selectedSpace}
        >
          {isDownloading ? "Stop Download" : "Download More Space"}
        </Button>
        <ProgressBar progress={progress} />
        {progress === 100 && !showScan && (
          <CompletionMessage onScanClick={() => setShowScan(true)} />
        )}
        {showScan && (
          <Button variant="windows" className="mt-4 w-fit" onClick={handleScan}>
            Run Scan
          </Button>
        )}
      </section>

      {showEmbed ? <EmbeddedVideo /> : <LowDiskSpacePlaceholder />}
    </div>
  )
}

function SelectField({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="mb-4">
      <label className="text-windows-black mb-2 block">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="bg-windows-white text-windows-black w-[180px] rounded-none">
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>
        <SelectContent className="rounded-none">
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="focus:bg-windows-blue focus:text-windows-white focus:rounded-none"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div>
      <p className="text-windows-black mb-2">Download Progress:</p>
      <Progress
        value={progress}
        className="border-windows-dark bg-windows *:bg-windows-blue h-[20px] w-[300px] rounded-none border"
      />
    </div>
  )
}

function CompletionMessage({ onScanClick }: { onScanClick: () => void }) {
  return (
    <div className="mt-4">
      <p className="text-windows-green font-bold">Download Complete!</p>
      <Button variant="windows" className="mt-2" onClick={onScanClick}>
        Click to run scans for additional info
      </Button>
    </div>
  )
}

function EmbeddedVideo() {
  return (
    <div className="order-first w-full md:order-last md:col-span-2 lg:col-span-1">
      <iframe
        className="mx-auto aspect-video w-full max-w-lg"
        width="600"
        height="355"
        src="https://www.youtube.com/embed/h1HDWY9rO10?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

function LowDiskSpacePlaceholder() {
  return (
    <section className="order-first w-full md:order-last md:col-span-2 lg:col-span-1">
      <div className="bg-windows border-windows-dark mx-auto flex max-w-lg flex-col items-center justify-center border-2 p-4 shadow-inner">
        <div className="bg-windows -mt-3 ml-2 flex w-fit items-center px-1">
          <FileWarning className="text-windows-blue" />
          <h2 className="text-windows-black text-xl font-bold">Warning</h2>
        </div>
        <p className="text-windows-black mb-4 text-center">
          Your hard drive is running low on space! Immediate action is
          recommended to avoid system instability.
        </p>
        <div className="bg-windows border-windows-dark mb-4 border p-2 text-center text-sm">
          <p className="text-windows-black font-bold">Disk Space:</p>
          <p className="text-windows-red">5% remaining (2.5 GB free)</p>
        </div>
        <ul className="bg-windows border-windows-dark mb-4 w-full list-disc border p-4 text-left text-sm">
          <li className="text-windows-black">
            Close unnecessary applications to free up memory.
          </li>
          <li className="text-windows-black">
            Consider deleting temporary files or unused programs.
          </li>
          <li className="text-windows-black">
            Use the "Analyze Disk Space" tool to identify large files.
          </li>
        </ul>
        <div className="bg-windows border-windows-dark w-full border p-4 text-sm">
          <p className="text-windows-black font-bold">Tips:</p>
          <p className="text-windows-black">
            - Moving files to an external drive can help free up space.
          </p>
          <p className="text-windows-black">
            - Compressing large files can save disk space.
          </p>
        </div>
      </div>
    </section>
  )
}
