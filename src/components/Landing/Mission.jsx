import React from "react";
import Button from "../Button";

const Mission = () => {
  return (
    <div className="flex max-sm:py-[15%] py-[5%] justify-center ">
      <div className="flex flex-col justify-center max-sm:items-start items-center max-sm:flex-col max-sm:w-10/12 sm:w-10/12 lg:w-8/12">
        <div className="flex flex-col max-sm:items-start w-7/12 space-y-5 max-sm:w-full items-center">
          <div className="text-4xl font-semibold">Our Mission</div>
          <div className="font-light text-text-subtext text-center max-sm:text-start">
            Our mission at Below Zero Shaved Ice, is to strive to provide not
            only the best product, but an excellent customer service. We stand
            for quality, values and the charm that only a family business can
            provide.
          </div>
          <div className="w-fit">
            <Button>LEARN MORE</Button>
          </div>
        </div>
        <div className="w-full max-sm:hidden">
          <div
            className="bg-no-repeat bg-center sm:bg-[length:36rem] lg:bg-[length:36rem] xl:bg-[length:48rem] 2xl:bg-[length:64rem]"
            style={{ backgroundImage: "url('/CandyLandXL.webp')" }}
          >
            <div className="w-4/12 py-[12%] flex-col justify-start">
              <div className="font-montserrat font-bold text-2xl border-b border-black pb-2">
                QUALITY
              </div>
              <div className="flex">
                <div className="font-light text-text-subtext pt-2">
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
                <div className="font-montserrat font-bold text-end text-2xl border-b border-black pb-2">
                  VALUES
                </div>
                <div className="flex">
                  <div className="font-light text-text-subtext pt-2 text-end">
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
              <div className="font-montserrat font-bold text-2xl border-b border-black pb-2">
                CHARM
              </div>
              <div className="flex">
                <div className="font-light text-text-subtext pt-2">
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
