import React, { useState , useContext } from "react";
import { theme } from "./useContext";
import { Sun, Moon } from "lucide-react";
function Header({ title }) {
const {change , changeFunc} = useContext(theme)
  return (
    <div>
      <div className={`fixed z-10 ${change?"bg-gradient-to-r from-blue-100 to-violet-100" : "bg-indigo-950 text-white"} border-x-2 border-slate-700 w-full py-5 px-15 text-2xl cursor-default tracking-wider`} >
        {title}
      </div>
     
      <div
        className={`fixed w-20 h-9 ${change?"bg-orange-200 border-orange-500" : "bg-indigo-200 border-indigo-500"} rounded-2xl top-5 right-10 border-2 z-10 cursor-pointer duration-500`}
        onClick={() => {
          changeFunc()
        }}
      >
         <div className={`absolute ${change? "bg-orange-500 translate-x-0.5" : "bg-indigo-800 translate-x-11.5"} opacity-30 top-0.5 rounded-full w-7 h-7 duration-500 z-20 `}></div>
          <Sun color={`${change?"#ff9671":"gray"}`} className="absolute top-1 left-1 duration-500"/>
          <Moon color={`${change?"gray":"#3e207c"}`} className="absolute top-1 right-1 duration-500"/>
      </div>
    </div>
  );
}

export default Header;
