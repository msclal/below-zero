import React from "react";
import Image from "next/image";

const MenuItem = ({ key, name, picture, description }) => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="w-full pb-[10%]">
          <Image
            src={picture}
            alt="Produce Picture"
            layout="responsive"
            className="rounded-xl"
            width="1"
            height="1"
          />
        </div>
        <div className="font-bold text-center uppercase font-montserrat">
          {name}
        </div>
        <div className="text-center font-extralight text-text-subtext">
          {description}
        </div>
      </div>
    </>
  );
};

export default MenuItem;
