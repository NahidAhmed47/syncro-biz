"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBars, FaAngleRight } from "react-icons/fa";
const DashboardNavbar = ({ toggleSidebar }) => {
  const path = usePathname();
  return (
    <div
      className="h-[49px] flex items-center justify-between relative z-20"
      style={{
        background:
          "linear-gradient(to top, #4b43c5, #385bd5, #2270e2, #0c84ec, #1397f3)",
      }}
    >
      {/* menubar for mobile */}
      <div className="xl:hidden">
        <FaBars
          onClick={toggleSidebar}
          className="text-white text-2xl ml-3 cursor-pointer"
        ></FaBars>
      </div>
      {/* navbar content here */}
      {/* logo for mobile device */}
      <div className="md:hidden">
        <Image
          src={"https://i.ibb.co/kxxsFW7/home-modified-3.png"}
          alt="logo"
          width={125}
          height={33}
        ></Image>
      </div>
      <div className="flex w-fit h-full items-center pr-3 md:pr-0 gap-4 xl:gap-5 z-20 xl:absolute right-[81px]">
        <Image
          src={"https://i.ibb.co/HnQhpXc/Notifications.png"}
          alt="notification-modified"
          width={30}
          height={30}
          className="cursor-pointer"
        ></Image>
        <button
          onClick={() => signOut()}
          className="px-[13px] py-[2px] text-[15px] bg-primary text-white font-berlin rounded-md hidden sm:inline-block"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
