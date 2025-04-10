import React, { useState } from "react";
import Header from "../common/header.jsx";
import Card from "../common/card.jsx";
import { motion } from "motion/react";
import { Gem, ShoppingCart, User, ChartSpline } from "lucide-react";
import SalesOverview from "../pagesCom/overview/salesOverview.jsx";
import CategoryDistribution from "../pagesCom/overview/categoryDistribution.jsx";
import SalesByChannel from "../pagesCom/overview/salesbyChannel.jsx";
import { useContext } from "react";
import { theme } from "../common/useContext.jsx";
import { colors } from "../common/useContext.jsx";

function Overview() {
  const {change , changeFunc} = useContext(theme)
  return (
    <div className={`w-full h-fit ${change? "bg-white": "bg-gray-900"}`}>
      <div> 
        <Header title="Overview"  />
      </div>
      <motion.div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20`}
        initial={{ translateY: 20 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <Card
          name="Total Sales"
          icon={<Gem color="#9A1663" />}
          value="$12,345"
        />
        <Card name="New Users" icon={<User color="#000B58" />} value="1,234" />
        <Card
          name="Total Products"
          icon={<ShoppingCart color="#48A6A7" />}
          value="567"
        />
        <Card
          name="Conversion Rate"
          icon={<ChartSpline color="#C14600" />}
          value="12.5%"
        />
      </motion.div>
      <motion.div
        className="grid grid-cols-1 xl:grid-cols-2 max-lg:h-[800px] p-5 gap-10"
        initial={{ translateY: -20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SalesOverview coloro={change? colors.light : colors.dark}/>
        <CategoryDistribution coloro= {change? colors.light : colors.dark}/>
      </motion.div>
      <motion.div
        className="p-5"
        initial={{ translateY: -20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SalesByChannel coloro={change? colors.light : colors.dark}/>
      </motion.div>
    </div>
  );
}

export default Overview;
