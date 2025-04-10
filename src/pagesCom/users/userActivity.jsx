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

const userActivityData = [
	{ name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
	{ name: "Tue", "0-4": 30, "4-8": 50, "8-12": 70, "12-16": 90, "16-20": 110, "20-24": 40 },
	{ name: "Wed", "0-4": 40, "4-8": 60, "8-12": 80, "12-16": 100, "16-20": 120, "20-24": 50 },
	{ name: "Thu", "0-4": 50, "4-8": 70, "8-12": 90, "12-16": 110, "16-20": 130, "20-24": 60 },
	{ name: "Fri", "0-4": 60, "4-8": 80, "8-12": 100, "12-16": 120, "16-20": 140, "20-24": 70 },
	{ name: "Sat", "0-4": 70, "4-8": 90, "8-12": 110, "12-16": 130, "16-20": 150, "20-24": 80 },
	{ name: "Sun", "0-4": 80, "4-8": 100, "8-12": 120, "12-16": 140, "16-20": 160, "20-24": 90 },
];
function UserActivity({coloro}) {
  return (
    <div className={`${coloro} rounded-2xl border-slate-200 border-1`}>
         <p className="p-5 font-bold text-xl">User Activity Heat Map</p>
      <ResponsiveContainer
        width={"100%"}
        height={300}
      >
        <BarChart data={userActivityData}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name" />
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
          <Legend />
          <Bar dataKey={"0-4"} stackId={"a"} fill="gray"></Bar>
          <Bar dataKey={"4-8"} stackId={"a"} fill="#FFAB5B"></Bar>
          <Bar dataKey={"8-12"} stackId={"a"} fill="#4E70F4"></Bar>
          <Bar dataKey={"12-16"} stackId={"a"} fill="#89AC46"></Bar>
          <Bar dataKey={"16-20"} stackId={"a"} fill="#C0D6E8"></Bar>
          <Bar dataKey={"20-24"} stackId={"a"} fill="#A34343"></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserActivity;
