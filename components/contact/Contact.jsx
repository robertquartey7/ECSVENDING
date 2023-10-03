import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div className="bg-[#D9D9D9] py-14 rounded mt-6">
      <div className=" bg-[#1D80B0] text-white flex flex-col gap-5  p-5 px-10 relative">
        <ContactInfo />
        <div className="md:absolute -top-10 right-3 -bottom-10 shadow-2xl  md:w-[50%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
