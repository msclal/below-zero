"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
// import React from "react";
// import dynamic from "next/dynamic";
// const NoSSR = dynamic(() => import("@/components/Services/Reviews"), {
//   ssr: false,
// });

import Info from "@/components/Services/Info";
import Exclusive from "@/components/Services/Exclusive";
import Reviews from "@/components/Services/Reviews";
const Services = () => {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.replace("/services");
    // router.refresh();
    // router.push("/services");
    const timer = setTimeout(() => {
      //   e.preventDefault();
      setIsClient(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname, router]);
  return (
    <div className="">
      <div className="w-full max-lg:hidden">
        <div className="text-4xl font-medium text-white bg-primary p-6  lg:pl-[10%] xl:pl-[16%] 2xl:pl-[21%] mb-[14pt] rounded-r-2xl w-fit">
          SERVICES
        </div>
      </div>
      <div className="flex justify-center w-full lg:hidden mb-[3%]">
        <div className="w-11/12 text-lg font-medium rounded-sm text-center text-white bg-primary">
          SERVICES
        </div>
      </div>
      <div className=" mb-20 space-y-20 sm:mb-28 sm:space-y-28">
        <Info />
        <Exclusive />
        {isClient && <Reviews />}
        {/* <NoSSR /> */}
      </div>
    </div>
  );
};

export default Services;
