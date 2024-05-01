"use client";
import React from "react";

const Menubar = ({ selectedMenuItem, onMenuItemClick }) => {
  return (
    <div className="relative flex flex-col w-1/6 font-medium gap-y-3.5">
      <p
        className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-below-zero-blue-200/90 hover:text-white   ${selectedMenuItem === "SHAVED ICE" ? "bg-below-zero-blue-200 text-white" : "text-black bg-white border"}`}
        onClick={() => onMenuItemClick("SHAVED ICE")}
      >
        SHAVED ICE
      </p>
      <p
        className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-below-zero-red-200/90 hover:text-white  ${selectedMenuItem === "SHAVED ICE COMBOS" ? "bg-below-zero-red-200 text-white" : "text-black bg-white border border-border"}`}
        onClick={() => onMenuItemClick("SHAVED ICE COMBOS")}
      >
        SHAVED ICE COMBOS
      </p>
      <p
        className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-below-zero-yellow-200/90 hover:text-white  ${selectedMenuItem === "ICE CREAM" ? "bg-below-zero-yellow-200 text-white" : "text-black bg-white border border-border"}`}
        onClick={() => onMenuItemClick("ICE CREAM")}
      >
        ICE CREAM
      </p>
      <p
        className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out  hover:bg-below-zero-purple-200/90 hover:text-white  ${selectedMenuItem === "SHAKES" ? "bg-below-zero-purple-200 text-white" : "text-black bg-white border border-border"}`}
        onClick={() => onMenuItemClick("SHAKES")}
      >
        SHAKES
      </p>
      <p
        className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-below-zero-green-200/90 hover:text-white  ${selectedMenuItem === "HOUSE SPECIALTIES" ? "bg-below-zero-green-200 text-white" : "text-black bg-white border border-border"}`}
        onClick={() => onMenuItemClick("HOUSE SPECIALTIES")}
      >
        HOUSE SPECIALTIES
      </p>
    </div>
  );
};

export default Menubar;
