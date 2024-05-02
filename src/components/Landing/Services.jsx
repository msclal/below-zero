import React from "react";
import Image from "next/image";
import Storefront from "/public/storefront.webp";
import Button from "../Button";

const Services = () => {
  return (
    <>
      <div className="flex  justify-center py-[6%] bg-secondary-background">
        <div className="sm:w-10/12 lg:w-8/12 flex max-sm:flex-col max-sm:items-center space-x-[7%]">
          <div className="sm:w-4/12 max-sm:w-10/12">
            <Image
              src={Storefront}
              alt="Landing"
              layout="responsive"
              className="rounded-xl"
              width="1"
              height="1"
            />
          </div>
          <div className="max-sm:10/12 sm:w-7/12 flex flex-col justify-center">
            <div className="max-sm:text-3xl sm:text-4xl font-semibold mb-[3%] max-sm:mt-[5%]">
              Twelve Years of <br className="max-lg:hidden" />{" "}
              <span className="text-primary">Serving</span>{" "}
              <br className="sm:hidden" /> Our Community
            </div>
            <div className="font-light text-text-subtext mb-[3%] max-lg:pb-4">
              We pride ourselves in making you feel just as home. Come and
              discover all our store has to offer. We have a great selection of
              delicious shaved ice flavors, shaved ice combos, ice cream and
              “House Specialties”.
            </div>
            <Button>OUR SERVICES</Button>
            <div className="max-lg:hidden flex mt-[10%] space-x-[5%]">
              <div>
                <div className="font-medium pb-2">CATERING</div>
                <div className="font-light text-text-subtext text-sm">
                  provide not only the best product, but an excellent customer
                  service. We stand for quality, values and the charm that only
                  a family business can provide.
                </div>
              </div>
              <div>
                <div className="font-medium pb-2">FUNDRAISING</div>
                <div className="font-light text-text-subtext text-sm">
                  provide not only the best product, but an excellent customer
                  service. We stand for quality, values and the charm that only
                  a family business can provide.
                </div>
              </div>
              <div>
                <div className="font-medium pb-2">EVENTS</div>
                <div className="font-light text-text-subtext text-sm">
                  provide not only the best product, but an excellent customer
                  service. We stand for quality, values and the charm that only
                  a family business can provide.
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Services;
