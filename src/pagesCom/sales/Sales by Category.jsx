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

const categoryData = [
  { name: "Electronics", value: 4500 },
  { name: "Clothing", value: 3200 },
  { name: "Home & Garden", value: 2800 },
  { name: "Books", value: 2100 },
  { name: "Sports & Outdoors", value: 1900 },
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

function SalesByCategory({coloro}) {
  const [color, setColor] = useState("#6366F1");
  return (
    <div className={`p-3.5 grid grid-rows-5 ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-5 font-bold text-xl">Category Distribution</p>
      <ResponsiveContainer width={"100%"} className={"row-span-4"}>
        <PieChart>
          <Pie
            fontSize={12}
            width={130}
            outerRadius={70}
            data={categoryData}
            dataKey="value"
            labelLine={false}
            label={({ name, value }) => `${name} : ${value}`}
            onMouseOver={(e) => {
              setColor(e.fill);
            }}
          >
            {categoryData.map((entry, index) => (
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

export default SalesByCategory;
    