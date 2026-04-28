import { Sun, Moon } from "lucide-react"
import { useSettings } from "../context/SettingsContext"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { state, dispatch } = useSettings()

  const isDark = state.theme === "dark"

  const toggleTheme = () => {
    dispatch({
      type: "SET_THEME",
      payload: isDark ? "light" : "dark",
    })
  }

  return (
    <Button 
      onClick={toggleTheme}
      size="icon"
      className="bg-slate-950 text-white dark:bg-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-100"
      >
      {isDark ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </Button>
  )
}