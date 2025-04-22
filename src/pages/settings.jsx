import React from "react";
import Header from "../common/header";
import SettingCard from "../common/SettingCard";
import { motion } from "motion/react";
import { User, Bell, Fingerprint, Info, Plus, Trash } from "lucide-react";
import Toggle from "../common/toggle";
import { notificationData } from "../pagesCom/settings/dataSetting";
import { useContext } from "react";
import { theme } from "../common/useContext.jsx";
import profile from "../../src/assets/profile.jpg"
import gmail from "../../src/assets/gmail.png"
import facebook from "../../src/assets/facebook.png"
import linkedin from "../../src/assets/linkedin.png"

function Settings() {
    const {change , changeFunc} = useContext(theme)
  return (
    <div  className={`w-full h-fit ${change? "bg-white": "bg-gray-900"}`}>
      <div>
        <Header title="Settings" />
      </div>
      <motion.div
        className="grid grid-cols-1 justify-items-center mt-20 gap-5 "
        initial={{ translateY: 20, opacity: 0}}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SettingCard icon={<User />} title={"Profile"}>
          <div className="flex flex-col gap-10 ">
            <div className="flex gap-5 max-sm:flex-col max-sm:items-center">
              <img
                src={profile}
                alt=""
                className="w-20 h-20 rounded-full"
              />
              <div className="flex flex-col m-2">
                <p className="font-medium max-sm:text-center">Shadow Fox</p>
                <p>Shadow.Fox@example.com</p>
              </div>
            </div>
            <button className="w-36 p-2 max-sm:m-auto text-gray-100  bg-amber-500 hover:bg-amber-600 duration-300 rounded-sm cursor-pointer">
              Edit Profile
            </button>
          </div>
        </SettingCard>
        <SettingCard icon={<Bell />} title={"Notification"}>
          {notificationData.map((data , index) => {
            return (
              <div key={index} className="flex justify-between ml-5 mr-5 max-sm:flex-col max-sm:gap-5 max-sm:items-center">
                <p>{data.title}</p>
                <Toggle state={data.state}/>
              </div>
            );
          })}
        </SettingCard>
        <SettingCard icon={<Fingerprint />} title={"Security"}>
          <div className="flex justify-between ml-5 mr-5 max-sm:flex-col max-sm:gap-5 max-sm:items-center">
            <p>Two-Factor Authentication</p>
            <Toggle/>
          </div>
          <button className="w-36 p-2 ml-5 max-sm:m-auto text-gray-100  bg-amber-500 hover:bg-amber-600 duration-300 rounded-sm cursor-pointer">
            Change Password
          </button>
        </SettingCard>
        <SettingCard icon={<Info />} title={"Connected Accounts"}>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 ml-5 mr-5 cursor-default max-sm:flex-col">
              <div className="flex gap-5 w-full max-sm:justify-center ">
                <img
                  src={gmail}
                  alt=""
                  className="w-[30px] h-[25px] "
                />
                <p>Gmail</p>
              </div>
              <button className="bg-emerald-600 min-w-[100px] max-w-[100px] m-auto text-white p-1 pl-2 pr-2 rounded-sm cursor-pointer opacity-90 hover:opacity-100 duration-300">
                Connected
              </button>
            </div>
          </div>
          <div className="flex gap-4 ml-5 mr-5 max-sm:flex-col">
            <div className="flex gap-5 w-full max-sm:justify-center ">
              <img
                src={facebook}
                alt=""
                className="w-[30px] h-[25px] "
              />
              <p>Facebook</p>
            </div>
            <button className="bg-gray-600 min-w-[100px] max-w-[100px] m-auto text-white p-1 pl-2 pr-2 rounded-sm cursor-pointer opacity-90 hover:opacity-100 duration-300">
              Connect
            </button>
          </div>

          <div className="flex gap-4 ml-5 mr-5 max-sm:flex-col">
            <div className="flex gap-5 w-full max-sm:justify-center ">
              <img
                src={linkedin}
                alt=""
                className="w-[30px] h-[25px] "
              />
              <p>Linkedin</p>
            </div>
            <button className="bg-emerald-600 min-w-[100px] max-w-[100px] m-auto text-white p-1 pl-2 pr-2 rounded-sm cursor-pointer opacity-80 hover:opacity-100 duration-300">
              Connected
            </button>
          </div>

          <button className="flex gap-2 text-amber-600 ml-5 hover:text-amber-700 duration-300 cursor-pointer">
            <Plus /> Add Account
          </button>
        </SettingCard>
        <div className="relative flex flex-col gap-10 text-white p-10 m-10 w-[70%] h-auto border-1 border-red-900 rounded-2xl cursor-default">
          <div className="w-full h-full -p-5  -m-10 absolute bg-red-500 opacity-80 rounded-2xl z-30"></div>
          <div className="flex gap-5 z-40">
            <div className="text-amber-600">
              <Trash color="#8f0202" />
            </div>
            <h2 className="font-medium text-xl -mt-0.5">Delete Account</h2>
          </div>
          <p className="z-40 ">
            Permanently delete your account and all of your content.
          </p>
          <button className="bg-red-700 w-fit max-sm:m-auto p-2 rounded-sm hover:bg-red-800 duration-300 cursor-pointer z-40">
            Delete Account
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Settings;


