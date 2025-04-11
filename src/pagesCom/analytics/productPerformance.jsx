import React from "react";
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

const productPerformanceData = [
	{ name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
	{ name: "Product B", sales: 3000, revenue: 1398, profit: 2210 },
	{ name: "Product C", sales: 2000, revenue: 9800, profit: 2290 },
	{ name: "Product D", sales: 2780, revenue: 3908, profit: 2000 },
	{ name: "Product E", sales: 1890, revenue: 4800, profit: 2181 },
];
function ProductPerformance({coloro}) {
  return (
    <div className={`${coloro} rounded-2xl border-slate-200 border-1`}>
         <p className="p-5 font-bold text-xl">Product Performance</p>
      <ResponsiveContainer
        width={"100%"}
        height={300}
      >
        <BarChart data={productPerformanceData}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
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
          <Bar dataKey="sales" fill="#ff9671"> </Bar>
          <Bar dataKey="revenue" fill="#00896f"> </Bar>
          <Bar dataKey="profit" fill="#845ec2"> </Bar>
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProductPerformance;
