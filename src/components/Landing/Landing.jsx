"use client";
import React from "react";
import Mission from "@/components/Landing/Mission";
import Rewards from "@/components/Landing/Rewards";
import Services from "@/components/Landing/Services";
import Video from "@/components/Landing/Video";
import Carousel from "@/components/Landing/Carousel";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <Carousel />
      <Services />
      <Rewards />
      <Video />
      <Mission />
    </motion.div>
  );
};

export default Landing;
