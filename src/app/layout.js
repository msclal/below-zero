"use client";
import { Outfit, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

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
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${montserrat.variable} font-outfit bg-primary-background text-text`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
