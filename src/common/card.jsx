import React from 'react'
import {motion} from 'motion/react'
import { useContext } from "react";
import { theme } from "../common/useContext.jsx";
import { colors } from "./useContext";

function Card({name , icon , value}) {
    const {change , changeFunc} = useContext(theme)
  return (
    <motion.div className={`flex flex-col max-sm:items-center gap-5 ${change? colors.light + "hover:drop-shadow-[0_5px_5px_#B1B1B1]" : colors.dark + "hover:drop-shadow-[0_5px_5px_#212A4A]"} m-5 p-5 rounded-2xl h-32 border-1 cursor-default`}
    whileHover={{translateY:-10}}
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:.5}}
    >
        <div className='flex gap-2 max-sm:items-center'>{icon} {name}</div>
        <p className=' text-2xl ml-2'>{value}</p>
    </motion.div>
  )
}
export default Card
