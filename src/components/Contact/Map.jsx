"use client";
import React from "react";
import { motion } from "framer-motion";

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.2 } }}
      exit={{ opacity: 0 }}
    >
      <iframe
        width="100%"
        height="500"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=583%20E%20Foothill%20Blvd%20Ste%206%20Upland,%20CA%2091786+(Below%20Zero%20Shaved%20Ice)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      />
    </motion.div>
  );
};

export default Map;
