'use client'

import { useTheme } from './ThemeProvider'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={toggleTheme}
      className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-xl hover:bg-background/80"
    >
      {theme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

