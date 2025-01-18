import React from "react";
import "../Home.css";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
  return (
    <header className="home-header px-4 h-[100vh] max-[768px]:h-[80vh] relative bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="absolute top-0 left-0 size-full bg-[#373636b7] z-10"></div>
      <div className="max-w-[1000px] w-full h-full flex items-center m-auto">
        <HeaderLeft />
      </div>
    </header>
  );
};

export default Header;
