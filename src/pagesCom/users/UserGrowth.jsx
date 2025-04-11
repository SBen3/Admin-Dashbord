import React from "react";
import Linechart from "../../common/lineChart";
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
function UserGrowth({ coloro }) {
  return (
    <div className={`w-[100%] ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-5 font-bold text-xl">User Growth</p>
      <Linechart
        width={"100%"}
        height={300}  
        data={salesData}
        name={"name"}
        value={"sales"}
        type={"natural"}
        strokeColor={"#89AC46"}
        strokeWidth={3}
      />
    </div>
  );
}

export default UserGrowth;
