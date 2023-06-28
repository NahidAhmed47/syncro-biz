import React from 'react';

const OurWorkingProCard = ({title}) => {
    return (
        <div
          className="w-full h-[55px] relative group duration-500 bg-[#F3EFFB] rounded"
        >
          <div className="z-10 absolute w-full h-full flex items-center">
            <p className="px-8 text-lg font-bold text-neutral group-hover:text-white duration-500">{title}</p>
          </div>
          <div className="z-0 absolute bg-primary bottom-0 w-full h-0 group-hover:h-full duration-500 ease-in-out delay-0 group-hover:transition-all rounded "></div>
        </div>
    );
};

export default OurWorkingProCard;