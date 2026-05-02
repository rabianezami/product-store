import { View } from "lucide-react"

const savedTheme = localStorage.getItem("theme") || "system"

export const initialState =  {
  theme: savedTheme,
  view: "grid" // or list
}

export function settingsReducer(state, action) {
   switch (action.type) {
     case "SET_THEME": 
       return { ...state, theme: action.payload }

      case "SET_VIEW":
        return {...state, view: action.payload}
        
     default:
       return state
   }
}