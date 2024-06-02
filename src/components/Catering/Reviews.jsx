"use client";
import { useState, useEffect } from "react";
import Yelp from "./Yelp";
import { motion } from "framer-motion";

const Reviews = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      exit={{ opacity: 0 }}
    >
      {isClient && <Yelp />}
    </motion.div>
  );
};

export default Reviews;
