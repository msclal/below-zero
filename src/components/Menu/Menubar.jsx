"use client";
import React, { useState } from "react";

const Menubar = () => {
  const [isClicked, setIsClicked] = useState("SHAVED ICE");
  const handleClick = (item) => {
    setIsClicked(item);
  };
  return (
    <div className="relative flex flex-col w-1/6 font-medium gap-y-3.5">
      <p
        className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-below-zero-blue-200/90 hover:text-white   ${isClicked === "SHAVED ICE" ? "bg-below-zero-blue-200 text-white" : "text-black bg-white border"}`}
        onClick={() => handleClick("SHAVED ICE")}
      >
        SHAVED ICE
      </p>
      <p
        className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-below-zero-red-200/90 hover:text-white  ${isClicked === "SHAVED ICE COMBOS" ? "bg-below-zero-red-200 text-white" : "text-black bg-white border border-border"}`}
        onClick={() => handleClick("SHAVED ICE COMBOS")}
      >
        SHAVED ICE COMBOS
      </p>
      <p
        className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-below-zero-yellow-200/90 hover:text-white  ${isClicked === "ICE CREAM" ? "bg-below-zero-yellow-200 text-white" : "text-black bg-white border border-border"}`}
        onClick={() => handleClick("ICE CREAM")}
      >
        ICE CREAM
      </p>
      <p
        className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out  hover:bg-below-zero-purple-200/90 hover:text-white  ${isClicked === "SHAKES" ? "bg-below-zero-purple-200 text-white" : "text-black bg-white border border-border"}`}
        onClick={() => handleClick("SHAKES")}
      >
        SHAKES
      </p>
      <p
        className={`p-4 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-below-zero-green-200/90 hover:text-white  ${isClicked === "HOUSE SPECIALTIES" ? "bg-below-zero-green-200 text-white" : "text-black bg-white border border-border"}`}
        onClick={() => handleClick("HOUSE SPECIALTIES")}
      >
        HOUSE SPECIALTIES
      </p>
    </div>
  );
};

export default Menubar;
