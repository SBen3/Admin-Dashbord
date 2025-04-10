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
const monthlySalesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
  { month: "Jul", sales: 7000 },
];
function SalesOverview({coloro}) {
  return (
    <div className={`${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-5 font-bold text-xl">Sales Overview</p>
      <ResponsiveContainer width={"100%"} height={300}>
        <AreaChart data={monthlySalesData} width={400} height={300}>
          <XAxis dataKey="mounth" />
          <YAxis />
          <CartesianGrid strokeDasharray={"3 3"}/>
          <Area dataKey="sales" type="monotone" fill="#1e921ea8"/>    
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

export default SalesOverview;
