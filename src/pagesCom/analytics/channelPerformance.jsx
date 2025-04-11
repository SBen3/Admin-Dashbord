import React from "react";
import { useState } from "react";
import Piechart from "../../common/pieChart";

const channelData = [
	{ name: "Organic Search", value: 4000 },
	{ name: "Paid Search", value: 3000 },
	{ name: "Direct", value: 2000 },
	{ name: "Social Media", value: 2780 },
	{ name: "Referral", value: 1890 },
	{ name: "Email", value: 2390 },
];
const COLORS = ["#ffc75f", "#d65db1", "#b0a8b9", "#0081cf", "#ff8066", "#00c9a7"];


function ChannelPerformance({coloro}) {
  const [color, setColor] = useState("#6366F1");
  return (
    <div className={`p-3.5 grid grid-rows-5 ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-2 font-bold text-xl gris">Channel Performance</p>
      <Piechart
        fontSize={12}
        width={130}
        outerRadius={80}
        data={channelData}
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

export default ChannelPerformance;
