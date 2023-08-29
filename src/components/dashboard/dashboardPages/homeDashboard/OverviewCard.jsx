import React from 'react';

const OverviewCard = ({card}) => {
    return (
        <div className="w-full h-full bg-white border p-5 flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-lg md:text-xl font-semibold text-primary">{card?.title}</h1>
                            <div className="flex items-center gap-2 md:mt-1">
                                <p className="text-gray-800 font-semibold text-base md:text-xl lg:text-2xl">{card?.value}</p>
                                <p className="font-medium mt-1 text-primary">&#8599; + {card?.percentage}</p>
                            </div>
                        </div>
                        <div className={`${card?.primary_color} h-10 w-10 bg-opacity-25 flex items-center justify-center rounded`}>
                            {card?.icon}
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-3">
                        <div className="h-[6px] w-full  bg-slate-200 rounded-md">
                            <div className={`h-full ${card?.progress_fill} ${card?.primary_color} rounded-md`}></div>
                        </div>
                        <p className="text-base text-primary font-medium">{card?.progress}</p>
                    </div>
                </div>
    );
};

export default OverviewCard;