"use client";
import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import Map from "@/components/Contact/Map";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-lg:hidden">
        <div className="text-4xl font-medium text-white bg-primary p-6  lg:pl-[10%] xl:pl-[16%] 2xl:pl-[21%] mb-[14pt] rounded-r-2xl w-fit">
          CONTACT
        </div>
      </div>
      <div className="flex justify-center w-full lg:hidden mb-[3%]">
        <div className="w-11/12 text-lg font-medium text-center text-white rounded-sm bg-primary">
          CONTACT
        </div>
      </div>
      <div className="space-y-10 lg:space-y-20">
        <ContactForm />
        <Map />
      </div>
    </motion.div>
  );
};

export default Contact;
