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
const MenuItemsWithDialog = ({ data }) => {
  return (
    <div className="grid w-full grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => {
        if (!item.visible) return null;
        return (
          <div
            key={index}
            className="m-[5%] flex items-center justify-center h-full"
          >
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
                    {item.description}
                    <Image
                      src={item.gif}
                      alt={item.description}
                      layout="responsive"
                      width={1}
                      height={1}
                      draggable={false}
                      unoptimized
                    />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItemsWithDialog;
