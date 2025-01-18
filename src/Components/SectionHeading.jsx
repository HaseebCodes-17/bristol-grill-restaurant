import React from "react";

const SectionHeading = ({
  fontSize = "text-3xl",
  textColor = "text-zinc-800",
  textAlign = "text-center",
  bold = "",
  mb = "mb-12",
  children,
  ...props
}) => {
  return (
    <h3
      className={`${fontSize} ${textColor} ${textAlign} ${bold} ${mb}`}
      {...props}
    >
      {children}
    </h3>
  );
};

export default SectionHeading;
