import { ThemeContext } from '@/types/themeContext.type'
import { createContext, PropsWithChildren } from 'react'

const themeContext = createContext<ThemeContext | null>(null)

export default function useThemeContext() {
  if (!themeContext) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return themeContext
}

export function ThemeProvider({ children }: PropsWithChildren) {
  return <themeContext.Provider value={{}}>{children}</themeContext.Provider>
}
