import React from 'react'
import { useContext } from "react";
import { theme } from "../common/useContext.jsx";
import { colors } from "../common/useContext.jsx";

function SettingCard({icon , title , children}) {
  const {change , changeFunc} = useContext(theme)
  return (
    <div className={`flex flex-col gap-10 p-10 w-[70%] h-auto m-5 ${change? colors.light : colors.dark} rounded-2xl border-slate-200 border-1 cursor-default`}>
        <div className='flex gap-5'><p className='text-amber-600'>{icon}</p> <h2 className='font-medium text-xl -mt-0.5'>{title}</h2></div>
        {children}
    </div>
  )
}
export default SettingCard
