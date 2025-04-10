import React from "react";
import { motion } from "motion/react";
import { useContext } from "react";
import { theme } from "../../common/useContext";
import { colors } from "../../common/useContext";

function AnalyticsCard({ name, icon, value, rate , changeIcon , state}) {
  const {change , changeFunc} = useContext(theme)
  return (
    <motion.div
      className={`flex flex-col gap-5 ${change? colors.light + "hover:drop-shadow-[0_5px_5px_#B1B1B1]" : colors.dark + "hover:drop-shadow-[0_5px_5px_#212A4A]"} m-5 p-5 rounded-2xl h-36 border-slate-200 border-1 cursor-default `}
      whileHover={{ translateY: -10 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
    >
      <div className="text-gray-500">{name}</div>
      <div className="flex justify-between -m-2">
        <p className=" text-2xl">{value}</p>
        <p className={`${state?"bg-emerald-200 text-emerald-800" : "bg-red-200 text-red-800"} rounded-full p-2 -mt-1`}>{icon}</p>
      </div>
      <div className={`mt-0 flex gap-1 ${state ? "text-emerald-700" : "text-red-700"}`}>{changeIcon}{rate} vs last period</div>
    </motion.div>
  );
}

export default AnalyticsCard;
