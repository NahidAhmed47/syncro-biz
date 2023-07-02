import React from "react";
import { BsCheck2All } from "react-icons/bs";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Image from "next/image";
import img from "@/assests/tab-solution.png";

const DataAccordianCard = ({ active, index, card }) => {
  return (
    <div className={`flex flex-col md:flex-row mt-12 md:mt-16 gap-4 ${active != index && "hidden"}`}>
      <div className="flex-1 space-y-4 flex flex-col justify-center items-start">
        <h1 className="text-2xl md:text-4xl font-bold text-neutral">{card}</h1>
        <p className="text-gray-400  max-w-[700px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
          commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
        <div className="flex items-center gap-2">
          <BsCheck2All className="text-primary w-6 h-6"></BsCheck2All>
          <p className="text-gray-500 font-semibold text-base">
            Professional Consultancy Service
          </p>
        </div>
        <div className="flex items-center gap-2">
          <BsCheck2All className="text-primary w-6 h-6"></BsCheck2All>
          <p className="text-gray-500 font-semibold text-base">
            Professional Consultancy Service
          </p>
        </div>
        <div className="flex items-center gap-2">
          <BsCheck2All className="text-primary w-6 h-6"></BsCheck2All>
          <p className="text-gray-500 font-semibold text-base">
            Professional Consultancy Service
          </p>
        </div>
        <div className="flex items-center gap-2">
          <BsCheck2All className="text-primary w-6 h-6"></BsCheck2All>
          <p className="text-gray-500 font-semibold text-base">
            Professional Consultancy Service
          </p>
        </div>
        <ButtonPrimary>Read More</ButtonPrimary>
      </div>
      <div className="">
        <Image src={img} fill={false} alt="tab-solution"></Image>
      </div>
    </div>
  );
};

export default DataAccordianCard;
