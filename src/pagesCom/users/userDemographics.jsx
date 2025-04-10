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
import { label } from "motion/react-client";

const userGrowthData = [
	{ month: "Jan", users: 1000 },
	{ month: "Feb", users: 1500 },
	{ month: "Mar", users: 2000 },
	{ month: "Apr", users: 3000 },
	{ month: "May", users: 4000 },
	{ month: "Jun", users: 5000 },
];

const COLORS = ["gray", "#FFAB5B", "#4E70F4", "#89AC46", "#C0D6E8" ,"#A34343"];

function UserDemographics({coloro}) {
  const [color, setColor] = useState("#6366F1");
  return (
    <div className={`m-5 p-3.5 grid grid-rows-5 ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-5 font-bold text-xl gris">User Demographics</p>
      <ResponsiveContainer width={"100%"} className={"row-span-4"}>
        <PieChart>
          <Pie
            fontSize={12}
            width={130}
            outerRadius={80}
            data={userGrowthData}
            dataKey="users"
            labelLine={false}
            label={({ name, value }) => `${name} : ${value}`}
            onMouseOver={(e) => {
              setColor(e.fill);
            }}
          >
            {userGrowthData.map((entry, index) => (
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

export default UserDemographics;
