import React from "react";
import { motion } from "motion/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const dailyOrdersData = [
	{ date: "07/01", orders: 45 },
	{ date: "07/02", orders: 52 },
	{ date: "07/03", orders: 49 },
	{ date: "07/04", orders: 60 },
	{ date: "07/05", orders: 55 },
	{ date: "07/06", orders: 58 },
	{ date: "07/07", orders: 62 },
];
function DailyOrders({coloro}) {
  return (
    <div className={`w-[100%] ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-5 font-bold text-xl">Sales Overview</p>
      <ResponsiveContainer width={"100%"} height={300} className={""}>
        <LineChart data={dailyOrdersData}>
            <CartesianGrid />
          <XAxis dataKey="date" />
          <YAxis />
          <Line dataKey="orders" type="natural" strokeWidth={3} stroke="#48A6A7" dot={false}/>
          <Tooltip itemStyle={{color:'#3182bd'}} contentStyle={{backgroundColor:'white' ,color:"#3182bd" , borderRadius:'5px', padding:"10px"}}/>
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyOrders
;
