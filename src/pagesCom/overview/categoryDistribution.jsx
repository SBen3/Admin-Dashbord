import React from "react";
import { useState } from "react";
import Piechart from "../../common/pieChart";

const categoryData = [
  { name: "Electronics", value: 4500 },
  { name: "Clothing", value: 3200 },
  { name: "Home & Garden", value: 2800 },
  { name: "Books", value: 2100 },
  { name: "Sports & Outdoors", value: 1900 },
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];
const windowWidth = window.innerWidth
function CategoryDistribution({coloro}) {
  const [color, setColor] = useState("#6366F1");
  return (
    <div className={`p-3.5 grid grid-rows-5  ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-2 font-bold text-xl gris">Category Distribution</p>
      <Piechart
        fontSize={12}
        outerRadius={70}
        data={categoryData}
        datakey={"value"}
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
