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
const userRetentionData = [
	{ name: "Week 1", retention: 100 },
	{ name: "Week 2", retention: 75 },
	{ name: "Week 3", retention: 60 },
	{ name: "Week 4", retention: 50 },
	{ name: "Week 5", retention: 45 },
	{ name: "Week 6", retention: 40 },
	{ name: "Week 7", retention: 38 },
	{ name: "Week 8", retention: 35 },
];

function UserRetention({coloro}) {
  return (
    <div className={`w-[100%] ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-5 font-bold text-xl">User Retention</p>
      <ResponsiveContainer width={"100%"} height={300} className={""}>
        <LineChart data={userRetentionData} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <YAxis />
          <Line dataKey="retention" type="monotone" stroke="#ce3e2b"/>
          <Tooltip itemStyle={{color:'#3182bd'}} contentStyle={{backgroundColor:'white' ,color:"#3182bd" , borderRadius:'5px', padding:"10px"}}/>
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserRetention;
