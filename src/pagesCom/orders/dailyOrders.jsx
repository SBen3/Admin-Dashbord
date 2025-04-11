import React from "react";
import Linechart from "../../common/lineChart";
const dailyOrdersData = [
  { date: "07/01", orders: 45 },
  { date: "07/02", orders: 52 },
  { date: "07/03", orders: 49 },
  { date: "07/04", orders: 60 },
  { date: "07/05", orders: 55 },
  { date: "07/06", orders: 58 },
  { date: "07/07", orders: 62 },
];
function DailyOrders({ coloro }) {
  return (
    <div className={`w-[100%] ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-5 font-bold text-xl">Sales Overview</p>
      <Linechart
        width={"100%"}
        height={300}
        data={dailyOrdersData}
        name={"date"}
        value={"orders"}
        type={"natural"}
        strokeColor={"#48A6A7"}
        strokeWidth={3}
      />
    </div>
  );
}

export default DailyOrders;
