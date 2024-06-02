import React from "react";
import Button from "../Button";
import Link from "next/link";
const Mission = () => {
  return (
    <div className="flex max-sm:py-[15%] py-[5%] justify-center ">
      <div className="flex flex-col items-center justify-center max-sm:items-start max-sm:flex-col max-sm:w-10/12 sm:w-10/12 lg:w-8/12">
        <div className="flex flex-col items-center w-7/12 space-y-5 max-sm:items-start max-sm:w-full">
          <div className="text-4xl font-semibold">Our Mission</div>
          <div className="font-light text-center text-text-subtext max-sm:text-start">
            At Below Zero Shaved Ice, we strive to serve not only the best
            product, but an excellent customer service. We stand for quality,
            values, and charm that only a family business can provide.
          </div>
          <div className="w-fit">
            <Link href="/about">
              <Button>LEARN MORE</Button>
            </Link>
          </div>
        </div>
        <div className="w-full max-sm:hidden">
          <div
            className="bg-no-repeat bg-center sm:bg-[length:36rem] lg:bg-[length:36rem] xl:bg-[length:48rem] 2xl:bg-[length:48rem] "
            style={{ backgroundImage: "url('/CandyLandXL.webp')" }}
          >
            <div className="w-4/12 py-[12%] flex-col justify-start">
              <div className="pb-2 text-2xl font-bold border-b border-black font-montserrat">
                QUALITY
              </div>
              <div className="flex">
                <div className="pt-2 font-light text-text-subtext">
                  We meticulously craft our treats using only the finest
                  ingredients, ensuring every bite is a delightful experience of
                  freshness and flavor.
                </div>
                <div className="border-t border-black">
                  <div className="hidden">dd</div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-3/12 pb-[12%] flex-col justify-start">
                <div className="pb-2 text-2xl font-bold border-b border-black font-montserrat text-end">
                  VALUES
                </div>
                <div className="flex">
                  <div className="pt-2 font-light text-text-subtext text-end">
                    Integrity, honesty, and respect guide everything we do,
                    fostering trust and loyalty with our customers and
                    community.
                  </div>
                  <div className="border-t border-black">
                    <div className="hidden">dd</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-4/12 pb-[12%] flex-col justify-start">
              <div className="pb-2 text-2xl font-bold border-b border-black font-montserrat">
                CHARM
              </div>
              <div className="flex">
                <div className="pt-2 font-light text-text-subtext">
                  As a family business, we infuse every interaction with warmth,
                  authenticity, and a personal touch, creating an atmosphere
                  where everyone feels like part of our family.
                </div>
                <div className="border-t border-black">
                  <div className="hidden">dd</div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Mission;
