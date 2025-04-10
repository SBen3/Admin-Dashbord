import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
	{ month: "Jan", revenue: 4000, target: 3800 },
	{ month: "Feb", revenue: 2500, target: 3200 },
	{ month: "Mar", revenue: 5000, target: 4500 },
	{ month: "Apr", revenue: 4500, target: 4200 },
	{ month: "May", revenue: 6000, target: 5500 },
	{ month: "Jun", revenue: 5000, target: 5800 },
	{ month: "Jul", revenue: 8000, target: 6500 },
];
function RevenuevsTarget({coloro}) {
  return (
    <div className={`${coloro} rounded-2xl border-slate-200 border-1`}>
      <div className="flex justify-between m-5 ">
      <p className="font-bold text-xl">Revenue vs Target</p>
      <select name="" id="" className={`bg-gray-300 text-gray-600 rounded-md border-gray-500 border-[1px] p-2 pt-0 pb-0`} >
        <option value="This Week">This Week</option>
        <option value="This Mounth">This Mounth</option>
        <option value="This Quarter">This Quarter</option>
        <option value="This Year">This Year</option>
      </select>
      </div>
      <ResponsiveContainer width={"100%"} height={300}>
        <AreaChart data={revenueData} width={400} height={300}>
          <XAxis dataKey="mounth" />
          <YAxis />
          <CartesianGrid strokeDasharray={"3 3"}/>
          <Area dataKey="revenue" type="monotone" fill="#1e921ea8"/>  
          <Area dataKey="target" type="monotone" fill="#bea6a0"/>    
          <Tooltip
            itemStyle={{ color: "#3182bd" }}
            contentStyle={{
              backgroundColor: "white",
              color: "#3182bd",
              borderRadius: "5px",
              padding: "10px",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenuevsTarget;
