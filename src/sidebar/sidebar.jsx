import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import { motion } from "motion/react";
import { useContext } from "react";
import { theme } from "../common/useContext.jsx";
import { colors } from "../common/useContext.jsx";
import { AlignJustify } from "lucide-react";
import {
  Telescope,
  ShoppingBasket,
  User,
  CircleDollarSign,
  SquareArrowOutDownLeft,
  ChartColumnIncreasing,
  Settings,
} from "lucide-react";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: Telescope,
    color: "#845ec2",
    href: "/",
  },
  {
    name: "Products",
    icon: ShoppingBasket,
    color: "oklch(0.646 0.222 41.116)",
    href: "/products",
  },
  {
    name: "Users",
    icon: User,
    color: "#2c73d2",
    href: "/users",
  },
  {
    name: "Sales",
    icon: CircleDollarSign,
    color: "oklch(0.627 0.194 149.214)",
    href: "/sales",
  },
  {
    name: "Orders",
    icon: SquareArrowOutDownLeft,
    color: "oklch(0.681 0.162 75.834)",
    href: "/orders",
  },
  {
    name: "Analytics",
    icon: ChartColumnIncreasing,
    color: "#ff006d",
    href: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "oklch(0.554 0.046 257.417)",
    href: "/settings",
  },
];

function Sidebar() {
  const [shrink, setShrink] = useState(true);
  const {change , changeFunc} = useContext(theme)
  return (
    <>
      <motion.div
        className={`relative ${change? colors.light : colors.dark} p-6 overflow-hidden transition-[width] delay-200 duration-400 ${shrink ?  " w-24" : "w-80 " }`}
        initial={{opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div whileTap={{ opacity: 0 }} transition={{ duration:0.5 }}>
          <AlignJustify
            className={`w-10 h-10 stroke-3 p-1.5 hover:rounded-full ${change?"hover:bg-violet-300/20" : "hover:bg-indigo-900/30"} cursor-pointer fixed`}
            onClick={() => {
              window.innerWidth>=500 ? setShrink(!shrink) : false
            }}
          />
        </motion.div>
        <div className={`ml-4 mt-12 fixed -translate-x-1 `}>
          <ul>
            {SIDEBAR_ITEMS.map((item) => {
              return (
                <motion.li
                  initial={{ translateX: 20 }}
                  animate={{ translateX: 0 }}
                  whileTap={{ opacity: 0, transition: { duration: 0.7 } }}
                  className={`${shrink ? '-translate-x-4' : 'translate-x-0'} duration-300`}
                >
                  <Link
                    rel="stylesheet"
                    className={`flex gap-5 mt-3 cursor-pointer ${change?"hover:bg-violet-300/20" : "hover:bg-indigo-900/30"} p-3 w-fit rounded-2xl`}
                    to={item.href}
                  >
                    {<item.icon color={item.color} className="" />}
                    <p className={`${shrink ? 'opacity-0 w-0' : 'opacity-100'} transition-opacity ease-in-out delay-300` }>{item.name}</p>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
