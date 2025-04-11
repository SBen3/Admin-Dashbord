import React from "react";
import { useState } from "react";
import Piechart from "../../common/pieChart";
const orderStatusData = [
	{ name: "Pending", value: 30 },
	{ name: "Processing", value: 45 },
	{ name: "Shipped", value: 60 },
	{ name: "Delivered", value: 120 },
];
const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766", "#2AB7CA"];

function OrderStatusDistribution({coloro}) {
  const [color, setColor] = useState("#6366F1");
  return (
    <div className={`"p-3.5 grid grid-rows-5 ${coloro} rounded-2xl border-slate-200 border-1"`}>
      <p className="m-5 font-bold text-xl gris">Order Status Distribution</p>
      <Piechart
        fontSize={12}
        width={130}
        outerRadius={70}
        data={orderStatusData}
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

export default OrderStatusDistribution;
