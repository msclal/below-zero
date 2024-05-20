"use client";
import { Outfit, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Marquee from "react-fast-marquee";
import IceCreamBanner from "/public/IceCreamBanner.webp";
import { usePathname } from "next/navigation";
import Image from "next/image";

// eslint-disable-next-line new-cap
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

// eslint-disable-next-line new-cap
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${montserrat.variable} font-outfit bg-primary-background text-text`}
      >
        {pathname === "/" && (
          <Marquee autoFill speed={30}>
            <Image
              src={IceCreamBanner}
              alt="Landing"
              height={90}
              layout="responsive"
            />
          </Marquee>
        )}
        <div className="sticky top-0 z-[100]">
          <NavBar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
