import React from "react";

const FormHeader = ({children}) => {
  return (
    <div className="md:flex items-center w-full justify-center hidden">
      <div className="h-[1px] bg-primary w-full "></div>
      <div className="w-[60%] text-center text-base md:text-lg font-medium text-primary">
        {children}
      </div>
      <div className="h-[1px] bg-primary w-full "></div>
    </div>
  );
};

export default FormHeader;
