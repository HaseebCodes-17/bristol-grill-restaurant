import React from "react";

const Section = ({
  mb = "mb-12",
  height,
  maxWidth = "max-w-[1000px]",
  py = "py-12",
  children,
  display,
  gridCols,
  gap,
  ...props
}) => {
  return (
    <section className={`px-4 ${mb} ${height}`} {...props}>
      <div
        className={`${maxWidth} w-full m-auto ${py} ${display} ${gridCols} ${gap}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
