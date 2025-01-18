import React from "react";
import OpeningHoursDropdown from "../OpeningHoursDropdown";

const ContactInfo = () => {
  return (
    <article>
      <h3 className="tracking-wider mb-5">SPECIAL REQUEST?</h3>
      <p className="mb-8 text-zinc-500">
        Do you have dietary concerns? Questions about an upcoming event? Drop us
        a line, and we'll get back to you soon!
      </p>
      <h3 className="mb-6">BRISTOL GRILL</h3>
      <address className="mb-6 text-zinc-500">
        Bristol Road, Selly Oak, , Birmingham, West Midlands, B29 6BE
      </address>
      <p className="text-zinc-500">0141 611 2539</p>
      <p className="text-zinc-500 mb-8">clearbusinessbyadrian@gmail.com</p>
      <h3 className="mb-6">OPENING HOURS</h3>
      <OpeningHoursDropdown />
    </article>
  );
};

export default ContactInfo;
