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

const orderStatusData = [
	{ name: "Pending", value: 30 },
	{ name: "Processing", value: 45 },
	{ name: "Shipped", value: 60 },
	{ name: "Delivered", value: 120 },
];
const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766", "#2AB7CA"];

function OrderStatusDistribution({coloro}) {
  const [color, setColor] = useState("#6366F1");
  return (
    <div className={`"p-3.5 grid grid-rows-5 ${coloro} rounded-2xl border-slate-200 border-1"`}>
      <p className="m-5 font-bold text-xl gris">Order Status Distribution</p>
      <ResponsiveContainer width={"100%"} className={"row-span-4"}>
        <PieChart>
          <Pie
            fontSize={12}
            width={130}
            outerRadius={70}
            data={orderStatusData}
            dataKey="value"
            labelLine={false}
            label={({ name, value }) => `${name} : ${value}`}
            onMouseOver={(e) => {
              setColor(e.fill);
            }}
          >
            {orderStatusData.map((entry, index) => (
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

export default OrderStatusDistribution;
