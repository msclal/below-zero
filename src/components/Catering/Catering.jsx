"use client";
import React from "react";
import Info from "@/components/Catering/Info";
import Exclusive from "@/components/Catering/Exclusive";
import Reviews from "@/components/Catering/Reviews";
import { motion } from "framer-motion";

const Catering = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-lg:hidden">
        <div className="text-4xl font-medium text-white bg-primary p-6  lg:pl-[10%] xl:pl-[16%] 2xl:pl-[21%] mb-[14pt] rounded-r-2xl w-fit">
          CATERING
        </div>
      </div>
      <div className="flex justify-center w-full lg:hidden mb-[3%]">
        <div className="w-11/12 text-lg font-medium text-center text-white rounded-sm bg-primary">
          CATERING
        </div>
      </div>
      <div className="mb-20 space-y-10 sm:mb-28 sm:space-y-20">
        <Info />
        <Exclusive />
        <Reviews />
      </div>
    </motion.div>
  );
};

export default Catering;
