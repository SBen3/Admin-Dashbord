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

const categoryData = [
  { name: "Wireless Earbuds", sales: 1200 },
  { name: "Leather Wallet", sales: 800 },
  { name: "Smart Watch", sales: 650 },
  { name: "old watch", sales: 950  },
  { name: "Coffee Maker", sales: 720 },
];

const COLORS = ["#00cea8", "#C14600", "#AA60C8", "#41644A", "#F59E0B"];

function CategoryDistribution({coloro}) {
  const [color, setColor] = useState("#6366F1");
  return (
    <div className={`p-3.5 grid grid-rows-5 ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-2 font-bold text-xl gris">Category Distribution</p>
      <ResponsiveContainer width={"100%"} height={"100%"} className={"row-span-4"}>
        <PieChart>
          <Pie
            fontSize={12}
            width={400}
            height={400}
            outerRadius={70}
            data={categoryData}
            dataKey="sales"
            labelLine={false}
            label={({ name, sales }) => `${name} : ${sales}`}
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

export default CategoryDistribution;
