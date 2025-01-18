import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="size-full grid place-items-center">
      <div className="loader">
        <div className="circle">
          <div className="dot" />
          <div className="outline" />
        </div>
        <div className="circle">
          <div className="dot" />
          <div className="outline" />
        </div>
        <div className="circle">
          <div className="dot" />
          <div className="outline" />
        </div>
        <div className="circle">
          <div className="dot" />
          <div className="outline" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
