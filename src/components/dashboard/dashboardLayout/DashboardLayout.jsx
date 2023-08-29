"use client"
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DashboardNavbar from "../dashboardNavbar/DashboardNavbar";
import DashboardSidebar from "../dashboardSidebar/DashboardSidebar";

const DashboardLayout = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const currentPath = usePathname();
  useEffect(() => {
    if (currentPath === currentPath) {
      setSidebarOpen(false);
    }
  }, [currentPath]);
  return (
    <div className="flex relative  min-h-screen lg:h-screen  bg-slate-100">
      {/* mobile side drawer */}
      <div className="overflow-hidden h-fit w-fit xl:hidden">
        <div
          className={`h-screen overflow-y-scroll xl:hidden fixed top-0 left-0 ${
            sidebarOpen ? "" : "-translate-x-[100%]"
          } w-[220px] z-50 duration-500`} style={{background:
            "linear-gradient(to bottom, #4b43c5, #385bd5, #2270e2, #0c84ec, #1397f3)",}}>
          <DashboardSidebar></DashboardSidebar>
        </div>
        {sidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-30 z-[49]"></button>
        )}
      </div>
      {/* desktop sidebar */}
      <div className="hidden xl:inline-block w-[240px] border-r-2 border-primary h-full " style={{background:
          "linear-gradient(to bottom, #4b43c5, #385bd5, #2270e2, #0c84ec, #1397f3)",}}>
        <DashboardSidebar></DashboardSidebar>
      </div>
      <div className="w-full h-full overflow-hidden relative">
        <DashboardNavbar toggleSidebar={toggleSidebar}></DashboardNavbar>
        <div className="lg:p-[20px] w-full min-h-screen  lg:min-h-[calc(100vh-49px)] " >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;