import React from "react";
import { Section } from "../../Index";

const AboutInfo = () => {
  return (
    <Section py="0">
      <div className="grid-cols-1 gap-8 max-w-[800px] mx-auto text-zinc-700">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">
          About Us
        </h2>
        <div className="space-y-4">
          <div className="text-xl font-light">
            <span className="font-semibold">Type of Restaurant:</span> Fast Food
            Restaurant
          </div>
          <div className="text-xl font-light">
            <span className="font-semibold">Address:</span> Bristol Road, Selly
            Oak, Birmingham, West Midlands, B29 6BE
          </div>
          <div className="text-xl font-light">
            <span className="font-semibold">Opening Hours:</span> 1:00 PM to
            11:00 PM (7 days a week)
          </div>
          <div className="text-xl font-light">
            <span className="font-semibold">Contact No:</span> 0141 611 2539
          </div>
          <div className="text-xl font-light">
            <span className="font-semibold">Owner/Customer Name:</span> Mr.
            Adrian Venoin
          </div>
          <div className="text-xl font-light">
            <span className="font-semibold">Customer Email:</span>{" "}
            clearbusinessbyadrian@gmail.com
          </div>
          <div className="text-xl font-light">
            <span className="font-semibold">Online Order Email:</span> Same as
            above
          </div>
          <div className="text-xl font-light">
            <span className="font-semibold">Trading Since:</span> January 2020
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutInfo;
