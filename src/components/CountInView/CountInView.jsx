"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountInView = ({ start, end, duration }) => {
  const [ref, inView] = useInView({ triggerOnce: false });
  return (
    <div ref={ref}>
      {inView ? (
        <div className="text-3xl md:text-5xl font-bold text-white"><CountUp start={start} end={end} duration={duration} />+</div>
      ) : (
        <div className="text-3xl md:text-5xl font-bold text-white">0</div>
      )}
    </div>
  );
};

export default CountInView;
