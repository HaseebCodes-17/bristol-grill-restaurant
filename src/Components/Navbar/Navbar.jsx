import React, { useState } from "react";
import NavLinks from "./NavLinks";
import ToggleCheckBtn from "./ToggleCheckBtn";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="px-16 max-[750px]:px-4 py-4 flex justify-between items-center sticky top-0 bg-white/90 shadow-md backdrop-blur-md z-40">
      {/* Logo */}
      <h1
        className="text-4xl font-semibold z-20"
        style={{
          textShadow:
            "3px 3px 6px rgba(0, 0, 0, 0.3), -2px -2px 5px rgba(255, 255, 255, 0.3)",
        }}
      >
        <NavLink to="/">
          Bristol<span className="text-orange-500">Grill</span>
          <h2
            className="text-xl text-orange-500 font-serif"
            style={{
              textShadow:
                "2px 2px 4px rgba(0, 0, 0, 0.2), -1px -1px 3px rgba(255, 255, 255, 0.2)",
            }}
          >
            The Tasty House
          </h2>
        </NavLink>
      </h1>

      {/* Toggle and Nav Links */}
      <div className="flex justify-between items-center">
        <ToggleCheckBtn show={show} setShow={setShow} />
        <NavLinks show={show} setShow={setShow} />
      </div>
    </nav>
  );
};

export default Navbar;
