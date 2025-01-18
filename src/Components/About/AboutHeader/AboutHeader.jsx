import React from "react";

const AboutHeader = () => {
  return (
    <header className="about-header h-[90vh] max-[768px]:h-[60vh] grid place-items-center">
      <div className="text-4xl text-zinc-300 py-4 px-6 mt-12 max-[768px]:mt-4 ring ring-orange-500 hover:ring-white hover:bg-orange-500 cursor-default transition-all">
        ABOUT
      </div>
    </header>
  );
};

export default AboutHeader;
