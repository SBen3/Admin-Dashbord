import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarAngleAxis,
  Legend,
} from "recharts";
const customerSegmentationData = [
	{ subject: "Engagement", SegmentA: 120, SegmentB: 110, fullMark: 150 },
	{ subject: "Loyalty", SegmentA: 98, SegmentB: 130, fullMark: 150 },
	{ subject: "Satisfaction", SegmentA: 86, SegmentB: 130, fullMark: 150 },
	{ subject: "Spend", SegmentA: 99, SegmentB: 100, fullMark: 150 },
	{ subject: "Frequency", SegmentA: 85, SegmentB: 90, fullMark: 150 },
	{ subject: "Recency", SegmentA: 65, SegmentB: 85, fullMark: 150 },
];
function CustomerSegmentation({coloro}) {
  return (
    <div className={`p-3.5 ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-2 font-bold text-xl">Customer Segmentation</p>
      <ResponsiveContainer width={"100%"} height={300}>
        <RadarChart data={customerSegmentationData} outerRadius={70} >
        <PolarAngleAxis dataKey={"subject"} stroke="gray" />
            <Radar dataKey={"SegmentA"} fill="#c34a36b8"/>
            <Radar dataKey={"SegmentB"} fill="#bea6a0b0"/>
            <Legend/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomerSegmentation;
