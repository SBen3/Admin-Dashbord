import React from "react";
import Header from "../common/header.jsx";
import Card from "../common/card.jsx";
import { motion } from "motion/react";
import { Gem,Clock9 , ListOrdered, SquareCheck } from "lucide-react";
import DailyOrders from "../pagesCom/orders/dailyOrders.jsx";
import OrderStatusDistribution from "../pagesCom/orders/orderStatusDistribution.jsx";
import OrderList from "../pagesCom/orders/orderList.jsx";
import { useContext } from "react";
import { theme } from "../common/useContext.jsx";
import { colors } from "../common/useContext.jsx";

function Orders() {
    const {change , changeFunc} = useContext(theme)
  return (
    <div className={`w-full h-fit ${change? "bg-white": "bg-gray-900"}`}>
      <div>
        <Header title="Orders" />
      </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20"
          initial={{ translateY: 20 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1 }}
        >
          <Card
            name="Total Orders"
            icon={<ListOrdered color="#9A1663" />}
            value="2,234"
          />
          <Card
            name="Pending Orders"
            icon={<Clock9 color="#2c73d2" />}
            value="23"
          />
          <Card
            name="Completed Orders"
            icon={<SquareCheck color="#48A6A7" />}
            value="1,470"
          />
          <Card
            name="Total Revenue"
            icon={<Gem color="#C14600" />}
            value="$88,125"
          />
        </motion.div>
        <motion.div className="grid grid-cols-1 xl:grid-cols-2 p-5 gap-10"
        initial={{translateY:-20 , opacity:0}}
        animate={{translateY:0 , opacity:1}}
        transition = {{duration:1}}
        >
          <DailyOrders coloro={change? colors.light : colors.dark}/>
          <OrderStatusDistribution coloro={change? colors.light : colors.dark}/>
        </motion.div>
        <motion.div className={`grid grid-cols-1 h-full p-10 ${change? colors.light : colors.dark} m-5 rounded-2xl border-slate-200 border-1`}
        initial={{ translateY: -20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <OrderList/>
      </motion.div>
    </div>
  );
}

export default Orders;
