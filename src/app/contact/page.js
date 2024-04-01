import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import Map from "@/components/Contact/Map";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen gap-y-10 lg:gap-y-20">
      <ContactForm />
      <Map />
    </div>
  );
};

export default Contact;
