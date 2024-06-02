"use client";
import { Outfit, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Marquee from "react-fast-marquee";
import IceCreamBanner from "/public/IceCreamBanner.webp";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.02 } }}
            exit={{ opacity: 0 }}
          >
            <Marquee autoFill speed={30}>
              <Image
                src={IceCreamBanner}
                alt="Below Zero banner"
                layout="responsive"
                draggable="false"
                priority={true}
              />
            </Marquee>
          </motion.div>
        )}
        {pathname === "/" || pathname === "/catering" ? (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.06 } }}
            exit={{ opacity: 0, y: 0 }}
            className="sticky top-0 z-[100]"
          >
            <NavBar />
          </motion.div>
        ) : (
          <div className="sticky top-0 z-[100]">
            <NavBar />
          </div>
        )}
        {children}
        <Footer />
      </body>
    </html>
  );
}
