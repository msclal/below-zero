// "use client";
// import { useState, useEffect } from "react";
import React from "react";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("@/components/Services/Reviews"), {
  ssr: false,
});

import Info from "@/components/Services/Info";
import Exclusive from "@/components/Services/Exclusive";
// import Reviews from "@/components/Services/Reviews";
const Services = () => {
  //   const [isClient, setIsClient] = useState(false);

  //   useEffect(() => {
  //     setIsClient(true);
  //   }, []);
  return (
    <div className="mb-20 space-y-20 sm:mb-28 sm:space-y-28">
      <Info />
      <Exclusive />
      {/* {isClient && <Reviews />} */}
      <NoSSR />
    </div>
  );
};

export default Services;
