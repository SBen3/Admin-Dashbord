import React from "react";
import Header from "../common/header";
import Card from "../common/card.jsx";
import { motion } from "motion/react";
import { Box, ArrowUp, ArrowDown, BadgeCheck, UsersRound, UserRoundPlus, UserRoundCheck, UserRoundX } from "lucide-react";
import UserGrowth from "../pagesCom/users/UserGrowth.jsx";
import UserDemographics from "../pagesCom/users/userDemographics.jsx";
import UserActivity from "../pagesCom/users/userActivity.jsx";
import Table from "../pagesCom/users/table.jsx";
import { useContext } from "react";
import { theme } from "../common/useContext.jsx";
import { colors } from "../common/useContext.jsx";

function Users() {
  const {change , changeFunc} = useContext(theme)
  return (
    <div className={`w-full h-fit ${change? "bg-white": "bg-gray-900"}`}>
      <div>
        <Header title="Users" />
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20"
        initial={{ translateY: 20 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <Card
          name="Total Users"
          icon={<UsersRound color="#6366F1" />}
          value={'150 045'}
        />
        <Card
          name="New Users Today"
          icon={<UserRoundPlus color="#10B981" />}
          value={102}
        />
        <Card
          name="Active Users"
          icon={<UserRoundCheck color="#F59E0B" />}
          value={"98 109"}
        />
        <Card
          name="Churn Rate"
          icon={<UserRoundX color="#EF4444" />}
          value={"3.1%"}
        />
      </motion.div>
      <motion.div
        className={`grid grid-cols-1 h-full ${change? colors.light : colors.dark} p-10  m-5 rounded-2xl border-slate-200 border-1 `}
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
        <UserGrowth  coloro={change? colors.light : colors.dark}/>
        <UserActivity  coloro={change? colors.light : colors.dark}/>
      </motion.div>
      <motion.div
        initial={{ translateY: -20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      
      >
        <UserDemographics  coloro={change? colors.light : colors.dark}/>
      </motion.div>
    </div>
  );
}

export default Users;
