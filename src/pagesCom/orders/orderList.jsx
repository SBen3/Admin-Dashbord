import React from "react";
import { useState } from "react";
import {
    Search,
Eye
} from "lucide-react";
import { style } from "motion/react-client";

const orderData = [
  {
    id: "ORD001",
    customer: "River Stone",
    total: 235.4,
    status: "Delivered",
    date: "2023-07-01",
    bgColor: "#ffc75f94",
    color: "#ffc75f",
  },
  {
    id: "ORD002",
    customer: "Willow Creek",
    total: 412.0,
    status: "Processing",
    date: "2023-07-02",
    bgColor: "#845ec2b0",
    color: "#845ec2",
  },
  {
    id: "ORD003",
    customer: "Sun Flower",
    total: 162.5,
    status: "Shipped",
    date: "2023-07-03",
    bgColor: "#008f7aad",
    color: "#008f7a",
  },
  {
    id: "ORD004",
    customer: "Mountain Peak",
    total: 750.2,
    status: "Pending",
    date: "2023-07-04",
    bgColor: "#c34a369e",
    color: "#c34a36",
  },
  {
    id: "ORD005",
    customer: "Ocean Breeze",
    total: 95.8,
    status: "Delivered",
    date: "2023-07-05",
    bgColor: "#d5cabdad",
    color: "#d5cabd",
  },
  {
    id: "ORD006",
    customer: "Forest Whisper",
    total: 310.75,
    status: "Processing",
    date: "2023-07-06",
    bgColor: "#adc5cfad",
    color: "#adc5cf",
  },
  {
    id: "ORD007",
    customer: "Star Dust",
    total: 528.9,
    status: "Shipped",
    date: "2023-07-07",
    bgColor: "#b93dafb8",
    color: "#b93daf",
  },
  {
    id: "ORD008",
    customer: "Thunder Bolt",
    total: 189.6,
    status: "Delivered",
    date: "2023-07-08",
    bgColor: "#150159ab",
    color: "#150159",
  },
];

function OrderList() {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div>
      <div className="flex justify-between max-md:flex-col">
        <p className="pl-5 pt-1 text-2xl self-center">Order List</p>
        <div className="relative flex justify-around self-center gap-2 h-12 m-3">
          <Search className="absolute text-slate-700 top-4 left-5 w-4 h-4 ml-0 " />
          <input
            type="text"
            placeholder="Search Products..."
            value={searchItem}
            className="m-2 pl-10  text-slate-700 bg-slate-300 rounded-xl focus:outline-2 focus: focus:outline-blue-400"
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
        </div>
      </div>
      <table className="flex flex-col justify-between w-full overflow-auto cursor-default">
        <thead>
          <tr className="flex justify-between border-b-1 border-slate-400 p-6 min-w-[800px]">
            <td className="w-[20%] ">Order ID</td>
            <td className="w-[15%] flex justify-center">Customer</td>
            <td className="w-[15%] flex justify-center">Total</td>
            <td className="w-[15%] flex justify-center">Status</td>
            <td className="w-[15%] flex justify-center">Date</td>
            <td className="w-[15%] flex justify-center">Actions</td>
          </tr>
        </thead>
        <tbody>
          {orderData
            .filter((item) => {
              return searchItem.toLowerCase() === ""
                ? item
                : item.id.toLowerCase().includes(searchItem) ||
                    item.customer.toLowerCase().includes(searchItem);
            })
            .map((item, index) => (
              <tr key={index} className="flex justify-between border-t-1 border-slate-400 p-6 min-w-[800px]">
                <td className="flex gap-2 w-[20%]">{item.id}</td>
                <td className="w-[15%] flex justify-center">{item.customer}</td>
                <td className="w-[15%] flex justify-center">{item.total}</td>
                <td
                  className={`w-[15%] flex justify-center p-1 rounded-md ${
                    item.status === "Delivered"
                      ? "bg-emerald-200 text-emerald-600"
                      : item.status === "Shipped"
                      ? "bg-blue-200 text-blue-500"
                      : item.status === "Processing"
                      ? "bg-amber-200 text-amber-500"
                      : item.status === "Pending"
                      ? "bg-purple-200 text-purple-500"
                      : true
                  }`}
                >
                  {item.status}
                </td>
                <td className="w-[15%] flex justify-center">{item.date}</td>
                <td className="gap-3 w-[15%] flex justify-center">
                  <Eye
                    className="hover:opacity-50 duration-300 cursor-pointer "
                    size={20}
                    color="#4E70F4"
                  />{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
