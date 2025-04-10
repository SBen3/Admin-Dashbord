import React from "react";
import Header from "../common/header.jsx";
import Card from "../common/card.jsx";
import { motion } from "motion/react";
import { Gem, ShoppingCart, ChartSpline, ArrowUpNarrowWide } from "lucide-react";
import SalesOverview from "../pagesCom/sales/areaChart.jsx";
import DailySalesTrend from "../pagesCom/sales/dailySalesTrend.jsx";
import SalesByCategory from "../pagesCom/sales/Sales by Category.jsx";
import { useContext } from "react";
import { theme } from "../common/useContext.jsx";
import { colors } from "../common/useContext.jsx";

function Sales() {
    const {change , changeFunc} = useContext(theme)
  return (
    <div className={`w-full h-fit ${change? "bg-white": "bg-gray-900"}`}>
      <div>
        <Header title="Sales" />
      </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20"
          initial={{ translateY: 20 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1 }}
        >
          <Card
            name="Total Revenue"
            icon={<Gem color="#9A1663" />}
            value="$1,189,507"
          />
          <Card
            name="Avg. Order Value"
            icon={<ShoppingCart color="#2c73d2" />}
            value="$89.80"
          />
          <Card
            name="Conversion Rate"
            icon={<ChartSpline color="#48A6A7" />}
            value="7.1%"
          />
          <Card
            name="Sales Growth"
            icon={<ArrowUpNarrowWide color="#C14600" />}
            value="15%"
          />
        </motion.div>
        <motion.div className="p-5 gap-10"
        initial={{translateY:-20 , opacity:0}}
        animate={{translateY:0 , opacity:1}}
        transition = {{duration:1}}
        > <SalesOverview  coloro={change? colors.light : colors.dark}/>
        </motion.div>
 
        <motion.div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-10"
        initial={{translateY:-20 , opacity:0}}
        animate={{translateY:0 , opacity:1}}
        transition = {{duration:1}}
        >
          <SalesByCategory  coloro={change? colors.light : colors.dark}/>  
         <DailySalesTrend  coloro={change? colors.light : colors.dark}/>
        </motion.div>
    </div>
  );
}

export default Sales;
