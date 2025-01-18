import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ show, setShow }) => {
  const links = [
    { path: "", title: "Home" },
    { path: "opening-time", title: "Opening Time" },
    { path: "menu", title: "Menu" },
    { path: "about", title: "About Us" },
    { path: "contact", title: "Contact Us" },
  ];

  const activeLink = ({ isActive }) =>
    isActive ? "text-orange-600 font-semibold" : "";

  return (
    <ul
      className={`text-xl ${
        show ? "left-0" : "left-[-100vw]"
      } flex max-[800px]:flex-col gap-4`}
    >
      {links.map((link) => (
        <li key={link.path} onClick={() => setShow(false)}>
          <NavLink className={activeLink} to={`/${link.path}`} end>
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
