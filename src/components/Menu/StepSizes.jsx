import Image from "next/image";
import Mini from "/public/SizeMini.webp";
import Small from "/public/SizeSmall.webp";
import Large from "/public/SizeLarge.webp";
import XL from "/public/SizeXL.webp";
import React from "react";

const Steps = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <div class="absolute font-medium border-8 border-primary border-xl text-primary text-lg rounded-full bg-white flex h-[55px] w-[55px] items-center justify-center">
            1
          </div>
          <div className="text-white ml-5 bg-primary rounded-tr pl-12 w-full font-montserrat py-3 flex justify-start">
            CHOOSE CUP SIZE
          </div>
        </div>{" "}
        <div className="border ml-5 rounded-b flex justify-center max-sm:p-8 max-sm:pb-14 sm:py-8">
          <div className="flex max-sm:flex-col sm:w-10/12 max-sm:space-y-[15%]">
            <div className="flex space-x-[10%]">
              <div className="max-sm:w-1/2 sm:w-5/12  flex flex-col items-center">
                <Image
                  src={Mini}
                  alt="Landing"
                  layout="responsive"
                  className="rounded-xl"
                  width="1"
                  height="1"
                />
                <div className="font-medium pt-2">MINI</div>
              </div>
              <div className="max-sm:w-1/2  sm:w-5/12 flex flex-col items-center">
                <Image
                  src={Small}
                  alt="Landing"
                  layout="responsive"
                  className="rounded-xl"
                  width="1"
                  height="1"
                />
                <div className="font-medium pt-2">SMALL</div>
              </div>
            </div>
            <div className="flex space-x-[10%]">
              <div className="max-sm:w-1/2 sm:w-5/12 flex   flex-col items-center">
                <Image
                  src={Large}
                  alt="Landing"
                  layout="responsive"
                  className="rounded-xl"
                  width="1"
                  height="1"
                />
                <div className="font-medium pt-2">LARGE</div>
              </div>
              <div className="max-sm:w-1/2 sm:w-5/12 flex flex-col items-center">
                <Image
                  src={XL}
                  alt="Landing"
                  layout="responsive"
                  className="rounded-xl"
                  width="1"
                  height="1"
                />
                <div className="font-medium pt-2">X-LARGE</div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Steps;
