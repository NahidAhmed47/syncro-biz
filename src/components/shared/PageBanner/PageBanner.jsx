import React from "react";

const PageBanner = ({title, route1, route2}) => {
  return (
    <div className={`w-full h-[500px] relative bg-[url('https://i.ibb.co/ykbsWYL/page-title-bg.jpg')] bg-cover bg-center`}>
        <div className="w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
            <div>
                <h1 className="text-white text-4xl font-bold">{title}</h1>
                <div className="flex gap-2 items-center text-white text-base font-medium mt-3 text-center justify-center">
                    <p>{route1}</p>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <p>{route2}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PageBanner;
