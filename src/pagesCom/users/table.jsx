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
    name: "Shadow Fox",
    email: "Fox@example.com",
    role: "Customer",
    status: "Active",
    statusColor: true,
  },
  {
    id: 2,
    name: "Night Hawk",
    email: "Hawk@example.com",
    role: "Customer",
    status: "Inactive",
    statusColor: false,
  },
  {
    id: 3,
    name: "Silver Moon",
    email: "Silver@example.com",
    role: "Admin",
    status: "Active",
    statusColor: true,
  },
  {
    id: 4,
    name: "Iron Clad",
    email: "Clad@example.com",
    role:"Customer",
    status: "Active",
    statusColor: true,
  },
  {
    id: 5,
    name: "Blue Jay",
    email: "Jay@example.com",
    role: "Moderator",
    status: "Active",
    statusColor: false,
  },
];
function Table() {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div>
      <div className="flex justify-between max-md:flex-col">
        <p className="pl-5 pt-1 text-2xl self-center">Users</p>
        <p className="relative flex justify-around self-center gap-2 h-12 m-3">
          <Search className="absolute text-slate-700 top-4 left-5 w-4 h-4 ml-0 "/>
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
        <thead>
          <tr className="flex justify-between border-b-1 border-slate-400 p-6 min-w-[800px]">
            <td className="w-[20%] ">Name</td>
            <td className="w-[16%] flex justify-center">email</td>
            <td className="w-[16%] flex justify-center">role</td>
            <td className="w-[16%] flex justify-center">status</td>
            <td className="w-[16%] flex justify-center">Action</td>
          </tr>
        </thead>
        <tbody>
          {PRODUCT_DATA.filter((item) => {
            return searchItem.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(searchItem) ||
                  item.email.toLowerCase().includes(searchItem);
          }).map((item, index) => (
            <tr className="flex justify-between border-t-1 border-slate-400 p-6 min-w-[800px]">
              <td className="flex gap-2 w-[20%]">
                <p className="flex justify-center pt-0.5 font-bold bg-gradient-to-r from-emerald-500 to-emerald-900 w-8 h-8 rounded-full">{item.name[0].toUpperCase()}</p> {item.name}
              </td>
              <td className="w-[15%] flex justify-center">{item.email}</td>
              <td className="w-[15%]  rounded-md bg-blue-300 flex justify-center p-1">{item.role}</td>
              <td className={`w-[15%] flex justify-center text-white p-1 rounded-md ${item.statusColor ? 'bg-emerald-600' : 'bg-red-400'}`}>{item.status}</td>
              <td className="flex gap-3 w-[15%] justify-center">
                <p className="text-blue-500 hover:opacity-50 cursor-pointer">Edit</p>
                <p className="text-red-400 hover:opacity-50 cursor-pointer">Delete</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
