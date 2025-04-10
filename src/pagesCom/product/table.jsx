import React from "react";
import { useState } from "react";
import {
  Search,
  Ear,
  Wallet,
  Watch,
  Timer,
  Coffee,
  Trash,
  FilePenLine,
} from "lucide-react";
import { style } from "motion/react-client";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
    icon: <Ear color="#00cea8" />,
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
    icon: <Wallet color="#C14600" />,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 56,
    sales: 650,
    icon: <Watch color="#AA60C8" />,
  },
  {
    id: 4,
    name: "old watch",
    category: "Accessories",
    price: 29.99,
    stock: 210,
    sales: 950,
    icon: <Timer color="#41644A" />,
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
    icon: <Coffee color="#854836" />,
  },
];
function Table() {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div>
      <div className="flex justify-between max-md:flex-col ">
        <p className="pl-5 pt-1 text-2xl self-center">Product List</p>
        <p className="relative flex justify-around self-center gap-2 h-12 m-3">
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
        </p>
      </div>
      <table className="flex flex-col justify-between w-full overflow-auto cursor-default">
        <tr className="flex justify-between border-b-1 border-slate-400 p-6 min-w-[800px]">
          <td className="w-[20%]">Name</td>
          <td className="w-[15%]">Category</td>
          <td className="w-[15%]">Price</td>
          <td className="w-[15%]">Stock</td>
          <td className="w-[15%]">Sales</td>
          <td className="w-[15%]">Action</td>
        </tr>
        {PRODUCT_DATA.filter((item) => {
          return searchItem.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(searchItem) ||
                item.category.toLowerCase().includes(searchItem);
        }).map((item, index) => (
          <tr className="flex justify-between border-t-1 border-slate-400 p-6 min-w-[800px]">
            <td className="flex gap-2 w-[20%]">
              {item.icon} {item.name}
            </td>
            <td className="w-[15%]">{item.category}</td>
            <td className="w-[15%]">{item.price}</td>
            <td className="w-[15%]">{item.stock}</td>
            <td className="w-[15%]">{item.sales}</td>
            <td className="flex gap-3 w-[15%]">
              <FilePenLine
                className="hover:opacity-50 duration-300 cursor-pointer "
                size={20}
                color="#4E70F4"
              />{" "}
              <Trash
                size={20}
                color="#F44E4E"
                className="hover:opacity-50 duration-300 cursor-pointer"
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
