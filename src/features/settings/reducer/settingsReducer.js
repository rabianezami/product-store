const savedTheme = localStorage.getItem("theme") || "system"

export const initialState =  {
  theme: savedTheme
}

export function settingsReducer(state, action) {
   switch (action.type) {
     case "SET_THEME": 
       return { ...state, theme: action.payload }
     default:
       return state
   }
}