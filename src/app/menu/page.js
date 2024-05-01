import IceCream from "@/components/Menu/StepIceCream";
import Syrups from "@/components/Menu/StepSyrup";
import Sizes from "@/components/Menu/StepSizes";
import Toppings from "@/components/Menu/StepToppings";
import React from "react";
import Head from "next/head";
import MenuItems from "@/components/Menu/MenuItems";
// import { combos } from "@/public/data/combos.js";

const specialties = [
  {
    picture: "/Specialties/BananaSplit.webp",
    name: "Banana Split",
    description: "",
  },
  {
    picture: "/Specialties/BrownieSundae.webp",
    name: "Brownie Sundae",
    description: "",
  },
  {
    picture: "/Specialties/Chamango.webp",
    name: "Chamango",
    description: "",
  },
  {
    picture: "/Specialties/ChurroSundae.webp",
    name: "Churro Sundae",
    description: "",
  },
  {
    picture: "/Specialties/CookieSlammer.webp",
    name: "Cookie Slammer",
    description: "",
  },
  {
    picture: "/Specialties/RootbeerFloat.webp",
    name: "Rootbeer Float",
    description: "",
  },
  {
    picture: "/Specialties/WaffleBowl.webp",
    name: "Waffle Bowl",
    description: "",
  },
  {
    picture: "/Specialties/WaffleCone.webp",
    name: "Waffle Cone",
    description: "",
  },
];

const shakes = [
  {
    picture: "/Shakes/Chocolate.webp",
    name: "Chocolate",
    description: "",
  },
  {
    picture: "/Shakes/Chocolate2.webp",
    name: "Chocolate",
    description: "",
  },
  {
    picture: "/Shakes/CookiesNCream.webp",
    name: "Cookies & Cream",
    description: "",
  },
  {
    picture: "/Shakes/CookiesNCream2.webp",
    name: "Cookies & Cream",
    description: "",
  },
  {
    picture: "/Shakes/CookiesNCream3.webp",
    name: "Cookies & Cream",
    description: "",
  },
  {
    picture: "/Shakes/SaltedCaramel.webp",
    name: "Salted Caramel",
    description: "",
  },
  {
    picture: "/Shakes/Strawberry.webp",
    name: "Strawberry",
    description: "",
  },
  {
    picture: "/Shakes/Strawberry2.webp",
    name: "Strawberry",
    description: "",
  },
  {
    picture: "/Shakes/Strawberry3.webp",
    name: "Strawberry",
    description: "",
  },
  {
    picture: "/Shakes/Vanilla.webp",
    name: "Vanilla",
    description: "",
  },
  {
    picture: "/Shakes/Vanilla2.webp",
    name: "Vanilla",
    description: "",
  },
];

const combos = [
  {
    picture: "/SnowConeCombos/BerryBerryGood.webp",
    name: "Berry Berry Good Good",
    description:
      "Strawberry, Raspberry, and Blueberry Shaved Ice with Vanilla Ice Cream",
  },
  {
    picture: "/SnowConeCombos/BigStick.webp",
    name: "Big Stick",
    description:
      "Cherry, Orange, and Pineapple Shaved Ice with Vanilla Ice Cream",
  },
  {
    picture: "/SnowConeCombos/BrandonGoingBananas.webp",
    name: "Brandon Going Bananas",
    description: "Banana and Vanilla Shaved Ice with Vanilla Ice Cream",
  },
  {
    picture: "/SnowConeCombos/CandyLand.webp",
    name: "Candy Land",
    description: "Blue Gum and Pink Gum Shaved Ice with Cotton Candy Ice Cream",
  },
  {
    picture: "/SnowConeCombos/CherryCola.webp",
    name: "Cherry Cola",
    description: "Cherry and Cola Shaved Ice with Vanilla Ice Cream",
  },
  {
    picture: "/SnowConeCombos/BrandonGoingBananas.webp",
    name: "Brandon Going Bananas",
    description: "Banana and Vanilla Shaved Ice with Vanilla Ice Cream",
  },
  {
    picture: "/SnowConeCombos/CookieMonster.webp",
    name: "Cookie Monster",
    description: "Cookie Dough Shaved Ice with Cookies n Cream Ice Cream",
  },
  {
    picture: "/SnowConeCombos/PinaColada.webp",
    name: "Pina Colada",
    description: "Pina Colada Shaved Ice with Coconut Pineapple Ice Cream",
  },
  {
    picture: "/SnowConeCombos/RootBeerFloat.webp",
    name: "Root Beer Float",
    description: "Root beer and Vanilla Shaved Ice with Vanilla Ice Cream ",
  },
  {
    picture: "/SnowConeCombos/Snickers.webp",
    name: "Snickers",
    description:
      "Caramel and Praline Shaved Ice with Chocolate Ice Cream and Caramel Toppings",
  },
  {
    picture: "/SnowConeCombos/StrawnanaShortcake.webp",
    name: "Strawnana Shortcake",
    description:
      "Strawberry, Banana, and Cake Batter Shaved Ice with Vanilla Ice Cream",
  },
  {
    picture: "/SnowConeCombos/TropicalStorm.webp",
    name: "Tropical Storm",
    description: "Mango and Coconut Shaved Ice with Vanilla Ice Cream",
  },
  {
    picture: "/SnowConeCombos/YummyLane.webp",
    name: "Yummy Lane",
    description: "Cotton Candy Shaved Ice with Birthday Cake Ice Cream",
  },
  {
    picture: "/SnowConeCombos/SweetNSour.webp",
    name: "Sweet N Sour",
    description: "Watermelon and Sour Apple Shaved Ice with Sherbet Ice Cream",
  },
  {
    picture: "/SnowConeCombos/HappyRainbow.webp",
    name: "Happy Rainbow",
    description:
      "Cherry, Blue Gum, and Banana Shaved Ice with Cotton Candy Ice Cream",
  },
];

const Contact = () => {
  return (
    <>
      <Head>
        <title>Below Zero: Shaved Ice | Menu</title>
      </Head>
      <div className="flex flex-col items-center min-h-screen gap-y-10 lg:gap-y-20 pt-36">
        <div className="flex justify-end flex-col max-sm:w-10/12 sm:w-10/12 lg:w-7/12 space-y-[3%]">
          <Sizes />
          <IceCream />
          <Syrups />
          <Toppings />
          <MenuItems data={combos} />
          <MenuItems data={shakes} />
          <MenuItems data={specialties} />
        </div>
      </div>
    </>
  );
};

export default Contact;
