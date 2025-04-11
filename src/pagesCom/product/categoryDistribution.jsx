import React from "react";
import { useState } from "react";
import Piechart from "../../common/pieChart";

const categoryData = [
  { name: "Wireless Earbuds", sales: 1200 },
  { name: "Leather Wallet", sales: 800 },
  { name: "Smart Watch", sales: 650 },
  { name: "old watch", sales: 950 },
  { name: "Coffee Maker", sales: 720 },
];

const COLORS = ["#00cea8", "#C14600", "#AA60C8", "#41644A", "#F59E0B"];

function CategoryDistribution({ coloro }) {
  const [color, setColor] = useState("#6366F1");
  return (
    <div
      className={`p-3.5 grid grid-rows-5 ${coloro} rounded-2xl border-slate-200 border-1`}
    >
      <p className="m-2 font-bold text-xl gris">Category Distribution</p>
      <Piechart
        fontSize={12}
        width={400}
        height={400}
        outerRadius={70}
        data={categoryData}
        datakey={"sales"}
        setColor={() => {
          setColor(e.fill);
        }}
        colors={COLORS}
        color={color}
      />
    </div>
  );
}

export default CategoryDistribution;
