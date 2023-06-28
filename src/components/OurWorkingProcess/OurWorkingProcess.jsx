import React from "react";
import OurWorkingProCard from "../OurWorkingProCard/OurWorkingProCard";
import Image from "next/image";
import img from "@/assests/software.png"

const OurWorkingProcess = () => {
  return (
    <div className="section-container grid lg:grid-cols-2">
      <div className="space-y-4 flex flex-col justify-center items-start md:pr-8">
        <p className="text-primary">Our Software Working Process</p>
        <h1 className="text-2xl md:text-4xl font-bold text-neutral">
          Business Management Services
        </h1>
        <p className="text-gray-400 max-w-[560px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
          commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
        <div className="grid md:grid-cols-2 gap-x-5 gap-y-3 w-full h-full">
        <OurWorkingProCard title="Data Analysis"></OurWorkingProCard>
        <OurWorkingProCard title="Data Analysis"></OurWorkingProCard>
        <OurWorkingProCard title="Data Analysis"></OurWorkingProCard>
        <OurWorkingProCard title="Data Analysis"></OurWorkingProCard>
        <OurWorkingProCard title="Data Analysis"></OurWorkingProCard>
        <OurWorkingProCard title="Data Analysis"></OurWorkingProCard>
        <OurWorkingProCard title="Data Analysis"></OurWorkingProCard>
        <OurWorkingProCard title="Data Analysis"></OurWorkingProCard>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image src={img} alt="img" fill={false}></Image>
      </div>
    </div>
  );
};

export default OurWorkingProcess;
