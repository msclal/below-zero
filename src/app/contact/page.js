import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import Map from "@/components/Contact/Map";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Below Zero: Shaved Ice | Contact</title>
      </Head>
      <div className="flex flex-col min-h-screen gap-y-10 lg:gap-y-20">
        <ContactForm />
        <Map />
      </div>
    </>
  );
};

export default Contact;
