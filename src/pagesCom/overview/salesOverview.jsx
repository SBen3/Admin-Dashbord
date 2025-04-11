import React from "react";
import Linechart from "../../common/lineChart";
const salesData = [
  { name: "Jul", sales: 4200 },
  { name: "Aug", sales: 3800 },
  { name: "Sep", sales: 5100 },
  { name: "Oct", sales: 4600 },
  { name: "Nov", sales: 5400 },
  { name: "Dec", sales: 7200 },
  { name: "Jan", sales: 6100 },
  { name: "Feb", sales: 5900 },
  { name: "Mar", sales: 6800 },
  { name: "Apr", sales: 6300 },
  { name: "May", sales: 7100 },
  { name: "Jun", sales: 7500 },
];
function SalesOverview({ coloro }) {
  return (
    <div className={`w-[100%] ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-5 font-bold text-xl">Sales Overview</p>
      <Linechart
        width={"100%"}
        height={300}
        data={salesData}
        name={"name"}
        value={"sales"}
        type={"monotone"}
        strokeWidth={3}
      />
    </div>
  );
}

export default SalesOverview;
