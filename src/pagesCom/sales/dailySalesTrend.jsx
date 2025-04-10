import React from "react";
import { color, motion } from "motion/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { option } from "motion/react-client";

const dailySalesData = [
	{ name: "Mon", sales: 1000 },
	{ name: "Tue", sales: 1200 },
	{ name: "Wed", sales: 900 },
	{ name: "Thu", sales: 1100 },
	{ name: "Fri", sales: 1300 },
	{ name: "Sat", sales: 1600 },
	{ name: "Sun", sales: 1400 },
];
const COLORS = ["#7D1C4A" , "#A9B5DF" , "#1F7D53" , "#1363DF"]
function DailySalesTrend({coloro}) {
  return (
    <div className={`${coloro} rounded-2xl border-slate-200 border-1`}>
         <p className="p-5 font-bold text-xl ">Sales by Channel</p>
      <ResponsiveContainer
        width={"100%"}
        height={300}
      >
        <BarChart data={dailySalesData}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip
            itemStyle={{ color: "#3182bd" }}
            contentStyle={{
              backgroundColor: "white",
              color: "#3182bd",
              borderRadius: "5px",
              padding: "10px",
            }}
          />
           <Bar dataKey="sales" fill="#1e921ea8" >
           </Bar>
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailySalesTrend;
