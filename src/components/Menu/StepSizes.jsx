import Image from "next/image";
import Mini from "/public/menu/SizeMini.webp";
import Small from "/public/menu/SizeSmall.webp";
import Large from "/public/menu/SizeLarge.webp";
import XL from "/public/menu/SizeXL.webp";
import React from "react";

const Steps = ({ step }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          {step !== "" && (
            <div className="absolute font-medium border-8 border-primary border-xl text-primary text-lg rounded-full bg-white flex h-[55px] w-[55px] items-center justify-center">
              {step}
            </div>
          )}
          <div className="flex justify-start w-full py-3 pl-12 ml-5 text-white rounded-tr bg-primary font-montserrat">
            CHOOSE CUP SIZE
          </div>
        </div>{" "}
        <div className="flex justify-center ml-5 border rounded-b max-sm:p-8 max-sm:pb-14 sm:py-8">
          <div className="flex max-sm:flex-col sm:w-10/12 max-sm:space-y-[15%]">
            <div className="flex space-x-[10%]">
              <div className="flex flex-col items-center max-sm:w-1/2 sm:w-5/12">
                <Image
                  src={Mini}
                  alt="Mini cup"
                  layout="responsive"
                  className="rounded-xl"
                  width="1"
                  height="1"
                  draggable={false}
                />
                <div className="pt-2 font-medium">MINI</div>
              </div>
              <div className="flex flex-col items-center max-sm:w-1/2 sm:w-5/12">
                <Image
                  src={Small}
                  alt="Small cup"
                  layout="responsive"
                  className="rounded-xl"
                  width="1"
                  height="1"
                  draggable={false}
                />
                <div className="pt-2 font-medium">SMALL</div>
              </div>
            </div>
            <div className="flex space-x-[10%]">
              <div className="flex flex-col items-center max-sm:w-1/2 sm:w-5/12">
                <Image
                  src={Large}
                  alt="Large cup"
                  layout="responsive"
                  className="rounded-xl"
                  width="1"
                  height="1"
                  draggable={false}
                />
                <div className="pt-2 font-medium">LARGE</div>
              </div>
              <div className="flex flex-col items-center max-sm:w-1/2 sm:w-5/12">
                <Image
                  src={XL}
                  alt="XL Cup"
                  layout="responsive"
                  className="rounded-xl"
                  width="1"
                  height="1"
                  draggable={false}
                />
                <div className="pt-2 font-medium">X-LARGE</div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Steps;
