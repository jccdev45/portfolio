// TODO: Restyle to this https://guidebookgallery.org/pics/gui/applications/multimedia/volume/win98se-1-1.png

"use client"

import { volumeAtom } from "@/atoms/atoms"
import { useAtom } from "jotai"
import { Volume, Volume2 } from "lucide-react"

import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Slider } from "@/components/ui/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function VolumeSlider() {
  const [volume, setVolume] = useAtom(volumeAtom)

  return (
    <MenubarMenu>
      <TooltipProvider>
        <Tooltip>
          <MenubarTrigger className="rounded-none focus:bg-transparent data-[state=open]:bg-transparent">
            <TooltipTrigger asChild>
              <span>
                {volume && volume[0] === 0 ? <Volume /> : <Volume2 />}
              </span>
            </TooltipTrigger>
          </MenubarTrigger>
          <TooltipContent className="bg-windows-dark text-windows-white rounded-none">
            <div>Volume: {volume && volume.length > 0 ? volume[0] : 0} %</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <MenubarContent className="bg-windows rounded-none">
        <MenubarItem className="hover:bg-windows focus:bg-windows rounded-none">
          <Slider
            id="volume"
            defaultValue={volume}
            max={100}
            step={1}
            className="bg-windows rounded-none *:rounded-none [&_[role=slider]]:size-5"
            onValueChange={setVolume}
            aria-label="Volume"
          />
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  )
}
