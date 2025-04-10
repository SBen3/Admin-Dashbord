import React from "react";
import Header from "../common/header.jsx";
import Card from "../common/card.jsx";
import { motion } from "motion/react";
import { Box, ArrowUp, ArrowDown, BadgeCheck } from "lucide-react";
import SalesOverview from "../pagesCom/product/salesOverview.jsx";
import CategoryDistribution from "../pagesCom/product/categoryDistribution.jsx";
import Table from "../pagesCom/product/table.jsx";
import { useContext } from "react";
import { theme } from "../common/useContext.jsx";
import { colors } from "../common/useContext.jsx";

function Product() {
  const {change , changeFunc} = useContext(theme)
  return (
    <div className={`w-full h-fit ${change? "bg-white": "bg-gray-900"}`}>
      <div>
        <Header title="Product" />
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20"
        initial={{ translateY: 20 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <Card
          name="Total Products"
          icon={<Box color="#6366F1" />}
          value={1234}
        />
        <Card
          name="Top Selling"
          icon={<ArrowUp color="#10B981" />}
          value={89}
        />
        <Card
          name="Low Stock"
          icon={<ArrowDown color="#F59E0B" />}
          value={23}
        />
        <Card
          name="Total Revenue"
          icon={<BadgeCheck color="#EF4444" />}
          value={"$543,210"}
        />
        
      </motion.div>
      <motion.div className={`grid grid-cols-1 overflow-auto h-full p-10 ${change? colors.light : colors.dark} m-5 rounded-2xl border-slate-200 border-1`}
        initial={{ translateY: -20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Table />
      </motion.div>
      <motion.div
        className="grid grid-cols-1 xl:grid-cols-2 p-5 gap-10"
        initial={{ translateY: -20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SalesOverview coloro={change? colors.light : colors.dark}/>
        <CategoryDistribution coloro={change? colors.light : colors.dark}/>
      </motion.div>
    </div>
  );
}

export default Product;
