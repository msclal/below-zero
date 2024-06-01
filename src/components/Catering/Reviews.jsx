"use client";
import { useState, useEffect } from "react";
import Yelp from "./Yelp";
const Reviews = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return <>{isClient && <Yelp />}</>;
};

export default Reviews;
