import React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const channelData = [
	{ name: "Organic Search", value: 4000 },
	{ name: "Paid Search", value: 3000 },
	{ name: "Direct", value: 2000 },
	{ name: "Social Media", value: 2780 },
	{ name: "Referral", value: 1890 },
	{ name: "Email", value: 2390 },
];
const COLORS = ["#ffc75f", "#d65db1", "#b0a8b9", "#0081cf", "#ff8066", "#00c9a7"];


function ChannelPerformance({coloro}) {
  const [color, setColor] = useState("#6366F1");
  return (
    <div className={`p-3.5 grid grid-rows-5 ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-2 font-bold text-xl gris">Channel Performance</p>
      <ResponsiveContainer width={"100%"} className={"row-span-4"}>
        <PieChart>
          <Pie
            fontSize={12}
            width={130}
            outerRadius={70}
            data={channelData}
            dataKey="value"
            labelLine={false}
            label={({ name, value }) => `${name} : ${value}`}
            onMouseOver={(e) => {
              setColor(e.fill);
            }}
          >
            {channelData.map((entry, index) => (
              <Cell fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip
            itemStyle={{ color: color }}
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "5px",
              padding: "10px",
            }}
          />
          <Legend/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChannelPerformance;
