"use client"
import Image from "next/image";
import NavLink from "@/components/shared/Navbar/NavLink";
import bannerImg from "@/assests/syncro-logo.png";
import Link from "next/link";
import relationalRoute from "@/routes-data/relationalRoute";
import dashboardRoute from "@/routes-data/dashboardRoute";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { useState } from "react";

const DashboardSidebar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className=" relative h-full">
      <div className="w-full flex justify-center gap-2 items-center pt-4 ">
        <Image src={bannerImg} alt="logo" fill={false}></Image>
        <h1 className="text-2xl font-extrabold text-white">
          Syncro<span className="text-primary">Biz</span>
        </h1>
      </div>
      <div className="mt-8 flex flex-col gap-y-3 2xl:gap-y-4 ">
        {dashboardRoute.map((singleRoute) => (
          <NavLink
            key={singleRoute.id}
            exact={singleRoute.href === "/"}
            activeClassName="bg-gradient-to-b from-[#281B32] to-[#2d1e38f4] duration-500 transition-all"
            href={singleRoute.href}
            className="px-3 py-1 mx-2 2xl:mx-4 rounded-lg ">
            <div className="flex items-center gap-[10px] ">
              {singleRoute.icon}
              <p className="text-[18px] text-white font-medium ">
                {singleRoute.routeName}
              </p>
            </div>
          </NavLink>
        ))}
        {/* <button onClick={()=> setOpen(!open)} className=" border
        ">
          <div className="flex items-center gap-2">
          {open ? <FaAngleRight className="text-white"/> : <FaAngleDown className="text-white"/>}
          <h1>Sales & Orders</h1>
          </div>
          {
            open && <div></div>
          }
        </button> */}
      </div>
      <div className="absolute bottom-14">
        <hr className="my-4 mx-3 border-2 border-[#00000075]" />
        <div className="mt-4 ml-8">
          <ul className="list-disc list-white mt-2">
            {relationalRoute.map((singleRoute) => (
              <li key={singleRoute.id} className="mb-1 mx-6 text-white ">
                <Link href={singleRoute.href}>{singleRoute.routeName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center w-full pt-2 text-white text-base sm:text-lg inline-block absolute bottom-1 2xl:bottom-3">
        @SyncroBiz
      </p>
    </div>
  );
};

export default DashboardSidebar;
