import React, { createContext, useContext, useState } from "react"

interface WindowContextType {
  isMax: boolean
  setIsMax: React.Dispatch<React.SetStateAction<boolean>>
  icon: JSX.Element
  title: string
}

interface WindowProviderProps {
  children: React.ReactNode
  icon: JSX.Element
  title: string
}

const WindowContext = createContext<WindowContextType | undefined>(undefined)

export function WindowProvider({ children, icon, title }: WindowProviderProps) {
  const [isMax, setIsMax] = useState(false)

  return (
    <WindowContext.Provider value={{ isMax, setIsMax, icon, title }}>
      {children}
    </WindowContext.Provider>
  )
}

export const useWindowContext = () => {
  const context = useContext(WindowContext)

  if (context === undefined) {
    throw new Error("useWindowContext must be used within a WindowProvider")
  }

  return context
}
