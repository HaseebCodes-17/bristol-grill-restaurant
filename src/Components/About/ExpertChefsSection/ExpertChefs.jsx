import React from "react";
import { Section, SectionHeading } from "../../Index";
import ExpertChefsImages from "./ExpertChefsImages";

const ExpertChefs = () => {
  return (
    <div>
      <SectionHeading
        fontSize="text-4xl"
        textColor="text-orange-500"
        bold="font-bold"
      >
        OUR TOP CHEFS
      </SectionHeading>
      <Section
        display="grid"
        gridCols="grid-cols-3 max-[860px]:grid-cols-2 max-[500px]:grid-cols-1"
        gap="gap-6 max-[860px]:gap-2"
        height="400px"
        mb="mb-12"
        py="py-0"
      >
        <ExpertChefsImages />
      </Section>
    </div>
  );
};

export default ExpertChefs;
