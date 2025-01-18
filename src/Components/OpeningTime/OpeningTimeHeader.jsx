import React from "react";
import OpeningHoursDropdown from "../OpeningHoursDropdown";

const OpeningTimeHeader = () => {
  return (
    <section className="opening-time-header bg-fixed bg-no-repeat bg-cover bg-center px-4 flex justify-center relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-white bg-fixed size-full z-10 opacity-90"></div>

      {/* Content */}
      <div className="text-center z-20 pt-8 pb-16">
        {/* Title with new font */}
        <h2
          className="text-6xl sm:text-7xl lg:text-8xl font-serif mb-6 drop-shadow-lg tracking-wide text-black"
          style={{
            fontFamily: "Playfair Display, serif",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          OPENING TIME
        </h2>

        {/* Address with modern font */}
        <div
          className="text-lg sm:text-xl lg:text-2xl font-mono mb-6 space-y-2 text-black"
          style={{
            fontFamily: "Poppins, sans-serif",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h5>Bristol Road, Selly Oak,</h5>
          <h5>Birmingham, West Midlands,</h5>
          <h5>B29 6BE</h5>
        </div>

        {/* Opening info with new font */}
        <h4
          className="text-lg sm:text-xl lg:text-[1.6rem] font-bold mb-6 text-black"
          style={{
            fontFamily: "Poppins, sans-serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
          }}
        >
          Open Daily
        </h4>
        <h5
          className="text-base sm:text-lg lg:text-xl mb-6 text-black"
          style={{
            fontFamily: "Poppins, sans-serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
          }}
        >
          1:00 PM to 11:00 PM (7 days a week)
        </h5>

        <OpeningHoursDropdown />
      </div>

      {/* Decorative elements */}
      <h6
        className="absolute bottom-4 w-full text-center text-black text-xs sm:text-sm tracking-widest"
        style={{
          fontFamily: "Poppins, sans-serif",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
        }}
      >
        Restaurant and Fine Dining Experience
      </h6>
    </section>
  );
};

export default OpeningTimeHeader;
