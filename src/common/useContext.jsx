import { createContext } from "react"

export const theme = createContext()
export const themeSwitch = {
    trueState : true , 
    falseState : false
}
export const colors = {
    dark : "bg-indigo-950 text-white border-slate-800 " , 
    light : "bg-gradient-to-r from-violet-100 to-blue-100 border-slate-200 "
}
