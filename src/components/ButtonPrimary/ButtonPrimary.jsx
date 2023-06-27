import React from "react";

const ButtonPrimary = ({children, bgColor}) => {
  return (
    <button className={`min-w-[140px] h-fit relative ${bgColor ? bgColor : 'bg-primary text-white'}   text-lg px-6 py-2 font-medium rounded-lg flex items-center justify-center overflow-hidden group`}>
      <h1 className="z-10 group-hover:text-white duration-500">{children}</h1>
      <div
        className="w-0 h-0 bg-secondary absolute
                bottom-0 group-hover:w-full group-hover:h-full duration-500 ease-in-out delay-0 group-hover:transition-all"
      ></div>
    </button>
  );
};

export default ButtonPrimary;
