import React from 'react'
import {
    PieChart,
    Pie,
    ResponsiveContainer,
    Tooltip,
    Legend,
    Cell,
  } from "recharts";

function Piechart({fontSize , width ,height, outerRadius , data , datakey ,colors , setColor , color  }) {
  return (
    <ResponsiveContainer width={"100%"} className={"row-span-4"}>
        <PieChart>
          <Pie
            fontSize={fontSize}
            width={width}
            height={height}
            outerRadius={outerRadius}
            data={data}
            dataKey={datakey}
            labelLine={false}
            label={({name , value}) => `${name} : ${value}`}
            onMouseOver={() => {
              setColor
            }}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip
            itemStyle={{ color: color }}
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "5px",
              padding: "10px",
            }}
          />
          <Legend/>
        </PieChart>
      </ResponsiveContainer>
  )
}

export default Piechart
