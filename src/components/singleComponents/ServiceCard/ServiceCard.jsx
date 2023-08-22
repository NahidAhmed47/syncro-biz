import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({icon, title, description}) => {
    return (
        <div
          className="w-full h-[200px] relative group hover:-translate-y-3 duration-500"
          style={{
            borderRadius: "25px 0px 25px 0px",
            boxShadow: "0 5px 40px 0 rgba(0, 0, 0, 0.11)",
          }}
        >
          <div className="z-10 p-5 md:p-7 space-y-2 absolute top-0 w-full h-full flex flex-col justify-center">
            <div className="flex items-center gap-3"> 
              <div className="p-3 rounded-full bg-[#F3EFFB] group-hover:bg-white duration-500">
                {icon}
              </div>
              <h1 className="text-neutral text-xl md:text-2xl font-semibold group-hover:text-white duration-500">{title}</h1>
            </div>
            <p className="text-gray-400 group-hover:text-white duration-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium doloribus eos deleniti distinctio illum nulla suscipit, exercitationem culpa laudantium?</p>
            <button className="flex items-center gap-2 group-hover:text-white duration-500">Read More <BsArrowRight className="w-4 h-4"></BsArrowRight></button>
          </div>
          <div className="z-0 absolute bg-primary bottom-0 w-full h-0 group-hover:h-full duration-500 ease-in-out delay-0 group-hover:transition-all rounded-md "></div>
        </div>
    );
};

export default ServiceCard;