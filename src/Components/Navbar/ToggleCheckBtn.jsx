import React from "react";
import "./ToggleCheckBtn.css";

const ToggleCheckBtn = ({ show, setShow }) => {
  return (
    <div className="hidden max-[800px]:block z-20">
      <input id="checkbox2" type="checkbox" onClick={() => setShow(!show)} />

      <label className="toggle toggle2" htmlFor="checkbox2">
        <div className="bars" id="bar4" />
        <div className="bars" id="bar5" />
        <div className="bars" id="bar6" />
      </label>
    </div>
  );
};

export default ToggleCheckBtn;
