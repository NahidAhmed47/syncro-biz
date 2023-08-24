"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBars, FaAngleRight } from "react-icons/fa";
const DashboardNavbar = ({ toggleSidebar }) => {
  const path = usePathname();
  return (
    <div className="h-[49px] flex items-center justify-between relative z-20 bg-gradient-to-b from-[#00b0ee] to-[#3e57d0]">
      {/* menubar for mobile */}
      <div className="xl:hidden">
        <FaBars
          onClick={toggleSidebar}
          className="text-white text-2xl ml-3 cursor-pointer"></FaBars>
      </div>
      {/* navbar content here */}
      <div
        className={`w-[30%] lg:ml-0  ${
          path === "/tools" ? "xl:ml-[10%]" : "xl:ml-[7%]"
        } bg-[#635B74] rounded-md py-[3px] px-[7px] font-berlin lg:flex justify-between items-center hidden xl:absolute z-10`}>
        <input
          name="search"
          className="outline-none w-[80%] h-[16px] bg-transparent text-[#DBCBF4] font-normal text-sm pl-1 bg-[#635B74] tracking-wide"
          placeholder="Search"></input>
        <button className="outline-none px-[13px] py-[2px] h-full bg-[#BFB1D6] rounded-md flex items-center justify-center">
          <FaAngleRight className="w-[15px] h-[15px] text-[#624652]"></FaAngleRight>
        </button>
      </div>
      {/* logo for mobile device */}
      <div className="md:hidden">
        <Image
          src={"https://i.ibb.co/kxxsFW7/home-modified-3.png"}
          alt="logo"
          width={125}
          height={33}></Image>
      </div>
      <div className="flex w-fit h-full items-center pr-3 md:pr-0 gap-4 xl:gap-5 z-20 xl:absolute right-[81px]">
        <Link href={"/login"}>
          <button className="px-[13px] py-[2px] text-[15px] bg-[#BFB1D6] text-[#624652] font-berlin rounded-md hidden sm:inline-block">
            Log in
          </button>
        </Link>
        <Image
          src={"https://i.ibb.co/RTPVZK9/notification-modified-1.png"}
          alt="notification-modified"
          width={33}
          height={33}
          className="cursor-pointer"></Image>
        <Image
          src={"https://i.ibb.co/HnQhpXc/Notifications.png"}
          alt="notification-modified"
          width={33}
          height={33}
          className="cursor-pointer"></Image>
      </div>
    </div>
  );
};

export default DashboardNavbar;
