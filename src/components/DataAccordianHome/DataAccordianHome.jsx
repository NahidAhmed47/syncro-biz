"use client";
import React, { useState } from "react";
import DataAccordianCard from "../DataAccordianCard/DataAccordianCard";

const DataAccordianHome = () => {
  const [active, setActive] = useState(1);
  const [totalCard, setTotalCard] = useState(['Enterprise AI & Data Analysis Solutions','Enterprise AI & Manage Business','Enterprise AI & Customers Relationships','Enterprise AI & Sales & Orders'])
  return (
    <div className="section-container">
      {/* btn section */}
      <div className="w-full h-fit grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
        <div
        onClick={() => setActive(1)}
          className={`h-16 w-full hover:bg-primary rounded-[2px] duration-300 flex justify-center items-center group cursor-pointer ${active == 1 ? 'bg-primary' : 'bg-white'}`}
          style={{ boxShadow: "0 5px 40px 0 rgba(0, 0, 0, 0.11)" }}
        >
          <p className={`text-xl font-semibold text-neutral duration-300 group-hover:text-white ${active == 1 && 'text-white'}`}>
            Data Analysis
          </p>
        </div>
        <div
        onClick={() => setActive(2)}
          className={`h-16 w-full hover:bg-primary rounded-[2px] duration-300 flex justify-center items-center group cursor-pointer ${active == 2 ? 'bg-primary' : 'bg-white'}`}
          style={{ boxShadow: "0 5px 40px 0 rgba(0, 0, 0, 0.11)" }}
        >
          <p className={`text-xl font-semibold text-neutral duration-300 group-hover:text-white ${active == 2 && 'text-white'}`}>
            Manage Business
          </p>
        </div>
        <div
        onClick={() => setActive(3)}
          className={`h-16 w-full hover:bg-primary rounded-[2px] duration-300 flex justify-center items-center group cursor-pointer ${active == 3 ? 'bg-primary' : 'bg-white'}`}
          style={{ boxShadow: "0 5px 40px 0 rgba(0, 0, 0, 0.11)" }}
        >
          <p className={`text-xl font-semibold text-neutral duration-300 group-hover:text-white ${active == 3 && 'text-white'}`}>
            Customer Relationships
          </p>
        </div>
        <div
        onClick={() => setActive(4)}
          className={`h-16 w-full hover:bg-primary rounded-[2px] duration-300 flex justify-center items-center group cursor-pointer ${active == 4 ? 'bg-primary' : 'bg-white'}`}
          style={{ boxShadow: "0 5px 40px 0 rgba(0, 0, 0, 0.11)" }}
        >
          <p className={`text-xl font-semibold text-neutral duration-300 group-hover:text-white ${active == 4 && 'text-white'}`}>
            Sales & Orders
          </p>
        </div>
      </div>
      {/* card section */}
      {
        totalCard.map((card,index) => <DataAccordianCard key={index} active={active} card={card} index={index+1}></DataAccordianCard> )
      }
    </div>
  );
};

export default DataAccordianHome;
