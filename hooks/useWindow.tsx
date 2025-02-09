import { isMaxAtom, windowIconAtom, windowTitleAtom } from "@/atoms/atoms"
import { useAtom, useAtomValue, useSetAtom } from "jotai"

export function useWindow() {
  const [isMax, setIsMax] = useAtom(isMaxAtom)
  const icon = useAtomValue(windowIconAtom)
  const title = useAtomValue(windowTitleAtom)

  return { isMax, setIsMax, icon, title }
}

export function useSetWindow() {
  const setIcon = useSetAtom(windowIconAtom)
  const setTitle = useSetAtom(windowTitleAtom)

  return { setIcon, setTitle }
}
