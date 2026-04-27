import { createContext, useContext, useEffect, useReducer } from "react";
import { settingsReducer, initialState } from "../reducer/settingsReducer";

const SettingsContext = createContext()

function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light" 
}

export function SettingsProvider({ children }) {
   const [state, dispatch] = useReducer(settingsReducer, initialState)

   useEffect(() => {
     const root = document.documentElement

     const appliedTheme =
       state.theme === "system" ? getSystemTheme() : state.theme

       root.classList.toggle("dark", appliedTheme === "dark")

       localStorage.setItem("theme", state.theme)
   }, [state.theme])


   return (
    <SettingsContext.Provider value={{ state, dispatch }}>
        {children}
    </SettingsContext.Provider>
 )
}

export const useSettings = () => useContext(SettingsContext)