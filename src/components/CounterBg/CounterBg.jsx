import React from "react";
import counterImg from "../../assests/counter-bg.jpg";
import Image from "next/image";
import CountInView from "../CountInView/CountInView";

const CounterBg = () => {
  return (
    <div className="h-[300px] w-full relative">
      <div className="absolute top-0 h-full w-full ">
        <Image src={counterImg} fill={true} alt="counter-bg"></Image>
      </div>
      <div className="w-full absolute h-full bg-primary z-20 bg-opacity-75  flex justify-center items-center">
        <div className="section-container w-full h-full grid grid-cols-2 lg:grid-cols-4 items-center">
          <div className="text-center">
            <CountInView start={0} end={210} duration={1.5}> </CountInView>
            <p className="text-base md:text-2xl font-bold text-white">
              Business in progress
            </p>
          </div>
          <div className="text-center">
            <CountInView start={0} end={350} duration={1.5}> </CountInView>
            <p className="text-base md:text-2xl font-bold text-white">
              Customer
            </p>
          </div>
          <div className="text-center">
            <CountInView start={0} end={599} duration={1.5}> </CountInView>
            <p className="text-base md:text-2xl font-bold text-white">
              Happy Client
            </p>
          </div>
          <div className="text-center">
            <CountInView start={0} end={700} duration={2.5}> </CountInView>
            <p className="text-base md:text-2xl font-bold text-white">
              Register Business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterBg;
