"use client";
import React from "react";

const Menubar = ({ selectedMenuItem, onMenuItemClick }) => {
  return (
    <>
      <div className="w-full max-lg:hidden">
        <div className="text-4xl font-semibold text-white bg-primary p-6 lg:pl-[20%] xl:pl-[35%] mb-[14pt] rounded-r-2xl">
          MENU
        </div>

        <div className=" flex flex-col w-full sm:pl-[20%] xl:pl-[35%] font-medium gap-y-3.5">
          <p
            className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out hover:border-none hover:bg-below-zero-blue-200/90 hover:text-white   ${selectedMenuItem === "SHAVED ICE" ? "bg-below-zero-blue-200 text-white" : "text-black bg-white border border-border"}`}
            onClick={() => onMenuItemClick("SHAVED ICE")}
          >
            SHAVED ICE
          </p>
          <p
            className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out hover:border-none hover:bg-below-zero-red-200/90 hover:text-white  ${selectedMenuItem === "SHAVED ICE COMBOS" ? "bg-below-zero-red-200 text-white" : "text-black bg-white border border-border"}`}
            onClick={() => onMenuItemClick("SHAVED ICE COMBOS")}
          >
            SHAVED ICE COMBOS
          </p>
          <p
            className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out hover:border-none hover:bg-below-zero-yellow-200/90 hover:text-white  ${selectedMenuItem === "ICE CREAM" ? "bg-below-zero-yellow-200 text-white" : "text-black bg-white border border-border"}`}
            onClick={() => onMenuItemClick("ICE CREAM")}
          >
            ICE CREAM
          </p>
          <p
            className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out hover:border-none hover:bg-below-zero-purple-200/90 hover:text-white  ${selectedMenuItem === "SHAKES" ? "bg-below-zero-purple-200 text-white" : "text-black bg-white border border-border"}`}
            onClick={() => onMenuItemClick("SHAKES")}
          >
            SHAKES
          </p>
          <p
            className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out hover:border-none hover:bg-below-zero-green-200/90 hover:text-white  ${selectedMenuItem === "HOUSE SPECIALTIES" ? "bg-below-zero-green-200 text-white" : "text-black bg-white border border-border"}`}
            onClick={() => onMenuItemClick("HOUSE SPECIALTIES")}
          >
            HOUSE SPECIALTIES
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full lg:hidden">
        <div className="w-11/12 text-lg font-semibold text-center text-white bg-primary">
          MENU
        </div>
      </div>
    </>
  );
};

export default Menubar;
