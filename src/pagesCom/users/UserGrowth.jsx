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
const salesData = [
  { name: "Jul", sales: 1000 },
  { name: "Aug", sales: 2500 },
  { name: "Sep", sales: 3000 },
  { name: "Oct", sales: 3500 },
  { name: "Nov", sales: 4000 },
  { name: "Dec", sales: 4500 },
  { name: "Jan", sales: 6000 },
  { name: "Feb", sales: 6500 },
  { name: "Mar", sales: 7000 },
  { name: "Apr", sales: 7500 },
  { name: "May", sales: 8000 },
  { name: "Jun", sales: 9500 },
];
function UserGrowth({coloro}) {
  return (
    <div className={`w-[100%] ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-5 font-bold text-xl">User Growth</p>
      <ResponsiveContainer width={"100%"} height={300} >
        <LineChart data={salesData}>
          <XAxis dataKey="name"/>
          <YAxis />
          <CartesianGrid strokeDasharray={"1 1"}/>
          <Line dataKey="sales" type="natural" strokeWidth={3} stroke="#89AC46" dot={false}/>
          <Tooltip itemStyle={{color:'#3182bd'}} contentStyle={{backgroundColor:'white' ,color:"#3182bd" , borderRadius:'5px', padding:"10px"}}/>
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserGrowth;