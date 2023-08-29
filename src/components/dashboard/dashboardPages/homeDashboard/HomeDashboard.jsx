"use client";
import React from "react";
import { BsActivity, BsBriefcaseFill, BsFillPeopleFill } from "react-icons/bs";
import OverviewCard from "./OverviewCard";

const overviewCardsData = [
    {
        title: "Total Customers",
        value: "11,125",
        percentage: "12.86%",
        icon: <BsFillPeopleFill className="w-5 h-5 text-blue-500"></BsFillPeopleFill>,
        progress: "67%",
        primary_color: "bg-blue-500",
        progress_fill: "w-[67%]"
    },
    {
        title: "Total Deals",
        value: "856",
        percentage: "5.86%",
        icon: <BsBriefcaseFill className="w-5 h-5 text-cyan-500"></BsBriefcaseFill>,
        progress: "55%",
        primary_color: "bg-cyan-500",
        progress_fill: "w-[55%]"
    },
    {
        title: "Total Revenue",   
        value: "21,528",
        percentage: "33.76%",
        icon: <BsActivity className="w-5 h-5 text-teal-500"></BsActivity>,
        progress: "87%",
        primary_color: "bg-teal-500",
        progress_fill: "w-[87%]"
    },
]

const HomeDashboard = () => {
  return (
    <div className="h-[70vh] grid md:grid-cols-2 gap-5 lg:grid-cols-4 lg:grid-rows-4 ">
        {
            overviewCardsData.map((card, index) => <OverviewCard key={index} card={card}></OverviewCard>)
        }
    </div>
  );
};

export default HomeDashboard;
