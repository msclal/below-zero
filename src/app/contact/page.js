import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import Map from "@/components/Contact/Map";

const Contact = () => {
  return (
    <div className="space-y-10 lg:space-y-20">
      <ContactForm />
      <Map />
    </div>
  );
};

export default Contact;
