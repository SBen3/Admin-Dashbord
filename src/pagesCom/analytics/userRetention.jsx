import React from "react";
import Linechart from "../../common/lineChart";
const userRetentionData = [
  { name: "Week 1", retention: 100 },
  { name: "Week 2", retention: 75 },
  { name: "Week 3", retention: 60 },
  { name: "Week 4", retention: 50 },
  { name: "Week 5", retention: 45 },
  { name: "Week 6", retention: 40 },
  { name: "Week 7", retention: 38 },
  { name: "Week 8", retention: 35 },
];

function UserRetention({ coloro }) {
  return (
    <div className={`w-[100%] ${coloro} rounded-2xl border-slate-200 border-1`}>
      <p className="m-5 font-bold text-xl">User Retention</p>
      <Linechart
        width={"100%"}
        height={300}
        data={userRetentionData}
        name={"name"}
        value={"retention"}
        type={"monotone"}
        strokeColor={"#ce3e2b"}
      />
    </div>
  );
}

export default UserRetention;
