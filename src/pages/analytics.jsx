import React from "react";
import Header from "../common/header.jsx";
import AnalyticsCard from "../pagesCom/analytics/analyticsCard.jsx";
import { motion } from "motion/react";
import {
  Gem,
  ShoppingBag,
  Users,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import RevenuevsTarget from "../pagesCom/analytics/revenuevsTarget.jsx";
import ChannelPerformance from "../pagesCom/analytics/channelPerformance.jsx";
import ProductPerformance from "../pagesCom/analytics/productPerformance.jsx";
import UserRetention from "../pagesCom/analytics/userRetention.jsx";
import CustomerSegmentation from "../pagesCom/analytics/customerSegmentation.jsx";
import AIPoweredInsights from "../pagesCom/analytics/aI-PoweredInsights.jsx";
import { useContext } from "react";
import { theme } from "../common/useContext.jsx";
import { colors } from "../common/useContext.jsx";

const overviewData = [
  {
    name: "Revenue",
    value: "$1,234,567",
    rate: "12.5%",
    icon: <Gem />,
    state: true,
  },
  {
    name: "Users",
    value: "45,678",
    rate: "8.3%",
    icon: <Users />,
    state: true,
  },
  {
    name: "Orders",
    value: "9,876",
    rate: "-3.2%",
    icon: <ShoppingBag />,
    state: false,
  },
  {
    name: "Page Views",
    value: "1,234,567",
    rate: "15.7%",
    icon: <Eye />,
    state: true,
  },
];
function Analytics() {
    const {change , changeFunc} = useContext(theme)
  return (
    <div className={`w-full h-fit ${change? "bg-white": "bg-gray-900"}`}>
      <div>
        <Header title="Analytics" />
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20"
        initial={{ translateY: 20 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 1 }}
      >
        {overviewData.map((card) => {
          return (
            <AnalyticsCard
              name={card.name}
              icon={card.icon}
              value={card.value}
              rate={card.rate}
              changeIcon={
                card.state ? (
                  <ArrowUpRight className="text-green-700" />
                ) : (
                  <ArrowDownRight className="text-red-700" />
                )
              }
              state={card.state}
            />
          );
        })}
      </motion.div>

      <motion.div
        className="p-5 gap-10"
        initial={{ translateY: -20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <RevenuevsTarget coloro={change? colors.light : colors.dark}/>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 xl:grid-cols-2 p-5 gap-10"
        initial={{ translateY: -20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ChannelPerformance coloro={change? colors.light : colors.dark}/>
        <ProductPerformance coloro={change? colors.light : colors.dark}/>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 xl:grid-cols-2 p-5 gap-10"
        initial={{ translateY: -20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <UserRetention coloro={change? colors.light : colors.dark}/>
        <CustomerSegmentation coloro={change? colors.light : colors.dark}/>
      </motion.div>
      <motion.div
        initial={{ translateY: -20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AIPoweredInsights coloro={change? colors.light : colors.dark}/>
      </motion.div>
    </div>
  );
}

export default Analytics;
