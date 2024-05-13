"use client";
import { useState, useEffect } from "react";
import Info from "@/components/Services/Info";
import Exclusive from "@/components/Services/Exclusive";
import Reviews from "@/components/Services/Reviews";
const Services = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="pt-20 mb-20 space-y-20 sm:mb-28 sm:space-y-28">
      <Info />
      <Exclusive />
      {isClient && <Reviews />}
    </div>
  );
};

export default Services;
