import React from "react";
import Linechart from "../../common/lineChart";
const salesData = [
	{ month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
];
function SalesOverview({ coloro }) {
  return (
    <div className={`w-[100%] ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-5 font-bold text-xl">Sales Overview</p>
      <Linechart
        width={"100%"}
        height={300}
        data={salesData}
        name={"month"}
        value={"sales"}
        type={"natural"}
        strokeColor={"#48A6A7"}
        strokeWidth={3}
      />
    </div>
  );
}

export default SalesOverview;
