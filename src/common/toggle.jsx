import React from 'react'
import { useState } from 'react'

function Toggle({state}) {
const [change , setChange] = useState(state)
  return (
    <div className={`relative w-12 h-6 bg-amber-500 rounded-2xl border-amber-800 cursor-pointer duration-400 ${change? "bg-gray-400" : "bg-amber-500"}`} onClick={()=>{setChange(!change)}}>
       <p className={`absolute bg-white top-1 rounded-full w-4 h-4 duration-500 ease-in-out ${change?"translate-x-1" : "translate-x-7"}`}></p>
    </div>
  )
}

export default Toggle
