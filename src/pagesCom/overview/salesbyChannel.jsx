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

const SALES_CHANNEL_DATA = [
  { name: "Website", value: 45600 , color: "#211C84"  },
  { name: "Mobile App", value: 38200 , color: "#FFA725" },
  { name: "Marketplace", value: 29800 , color: "#1F7D53" },
  { name: "Social Media", value: 18700 , color:  "#1363DF"},
];
const COLORS = ["#7D1C4A" , "#A9B5DF" , "#1F7D53" , "#1363DF"]
function SalesByChannel({coloro}) {
  return (
    <div className={`${coloro} rounded-2xl border-slate-200 border-1`}>
         <p className="p-5 font-bold text-xl">Sales by Channel</p>
      <ResponsiveContainer
        width={"100%"}
        height={300}
      >
        <BarChart data={SALES_CHANNEL_DATA}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis />
          <Legend />
          <Tooltip
            itemStyle={{ color: "#3182bd" }}
            contentStyle={{
              backgroundColor: "white",
              color: "#3182bd",
              borderRadius: "5px",
              padding: "10px",
            }}
          />
            <Bar dataKey="value"  fill="gray">
          {SALES_CHANNEL_DATA.map((entry , index)=>(
            <Cell key={index} fill={COLORS[index]} />
          ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesByChannel;
