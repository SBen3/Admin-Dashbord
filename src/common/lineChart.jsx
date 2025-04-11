import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";

function Linechart({width , height , data , name , value , type , strokeColor , strokeWidth }) {
  return (
    <ResponsiveContainer width={width} height={height}>
           <LineChart data={data} >
             <CartesianGrid strokeDasharray="3 3"/>
             <XAxis dataKey={name}/>
             <YAxis />
             <Line dataKey={value} type={type} stroke={strokeColor} strokeWidth={strokeWidth} dot={false}/>
             <Tooltip itemStyle={{color:'#3182bd'}} contentStyle={{backgroundColor:'white' ,color:"#3182bd" , borderRadius:'5px', padding:"10px"}}/>
             <Legend />
           </LineChart>
         </ResponsiveContainer>
  )
}

export default Linechart
