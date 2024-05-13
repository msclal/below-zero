import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import Map from "@/components/Contact/Map";

export const metadata = {
  title: "Contact | Below Zero: Shaved Ice",
  description: "Contact information for Below Zero.",
};

const ContactPage = () => {
  return (
    <div className="pt-20 space-y-10 lg:space-y-20">
      <ContactForm />
      <Map />
    </div>
  );
};

export default ContactPage;
