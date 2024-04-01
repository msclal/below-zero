import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-6 py-2 font-bold text-white transition-all duration-300 ease-in-out rounded-md bg-primary hover:bg-primary/90 font-montserrat">
      {children}
    </button>
  );
};

export default Button;
