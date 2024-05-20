import React from "react";
import MenuItem from "./MenuItem";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const MenuItems = ({ data }) => {
  return (
    <>
      <div className="grid w-full grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => {
          return (
            <div key={index} className="m-[11%]">
              <Dialog>
                <DialogTrigger>
                  <MenuItem
                    name={item.name}
                    picture={item.picture}
                    description={item.description}
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{item.name}</DialogTitle>
                    <DialogDescription>
                      <div className="pr-10 text-base font-extralight text-text-subtext">
                        {item.description}
                      </div>
                      <Image
                        src={item.gif}
                        alt={item.description}
                        layout="responsive"
                        width={1}
                        height={1}
                      />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuItems;
