import React from "react";
import { Section, SectionHeading } from "../Index";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <Section>
      <SectionHeading>VISIT US</SectionHeading>
      <div className="grid grid-cols-2 max-[768px]:grid-cols-1 gap-10">
        <ContactForm />
        <ContactInfo />
      </div>
    </Section>
  );
};

export default ContactSection;
