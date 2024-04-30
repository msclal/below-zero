import React from "react";
import Image from "next/image";
import Storefront from "/public/storefront.webp";

const Services = () => {
  return (
    <>
      <div className="flex justify-center pt-36">
        <div className="w-10/12 flex">
          <div className="w-1/4 ">
            <Image
              src={Storefront}
              alt="Landing"
              layout="responsive"
              className="rounded-xl"
              width="1"
              height="1"
            />
          </div>
          <div className="text-4xl font-semibold">
            Twelve Years of Serving Our Community
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Services;
