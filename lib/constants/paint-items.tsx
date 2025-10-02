import {
  Circle,
  Eraser,
  MinusSquare,
  Paintbrush,
  Pencil,
  SquareUserRoundIcon as RoundedCorner,
  SprayCanIcon as Spray,
  Square,
} from "lucide-react"

interface Tool {
  id: string
  icon: React.ComponentType<{ size: number }>
  enabled: boolean
  tooltip: string
}

export const TOOLS: Tool[] = [
  {
    id: "pencil",
    icon: Pencil,
    enabled: true,
    tooltip: "Pencil - Freehand drawing",
  },
  {
    id: "brush",
    icon: Paintbrush,
    enabled: true,
    tooltip: "Brush - Similar to pencil",
  },
  {
    id: "spray",
    icon: Spray,
    enabled: true,
    tooltip: "Spray - Basic spray effect",
  },
  {
    id: "line",
    icon: MinusSquare,
    enabled: true,
    tooltip: "Line - Straight line",
  },
  {
    id: "rectangle",
    icon: Square,
    enabled: true,
    tooltip: "Rectangle - Rectangle drawing",
  },
  {
    id: "ellipse",
    icon: Circle,
    enabled: true,
    tooltip: "Ellipse - Circle drawing",
  },
  {
    id: "rounded-rect",
    icon: RoundedCorner,
    enabled: true,
    tooltip: "Rounded Rect - Rounded corners",
  },
  {
    id: "eraser",
    icon: Eraser,
    enabled: true,
    tooltip: "Eraser - Erases with background",
  },
]

export const COLOR_PALETTE = [
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
