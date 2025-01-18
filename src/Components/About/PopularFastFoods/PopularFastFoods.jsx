import React from "react";
import "./PopularFastFoods.css";
import { Section } from "../../Index";
import FastFoodsShowcase from "./FastFoodsShowcase";
import FastFoodsInfo from "./FastFoodsInfo";

const PopularFastFoods = () => {
  return (
    <div className="overflow-hidden">
      <h3 className="text-4xl font-bold text-center text-orange-500">
        POPULAR FAST FOODS
      </h3>
      <Section
        height="h-[400px] max-[860px]:h-full"
        display="grid"
        gridCols="grid-cols-2 max-[860px]:grid-cols-1"
        gap="gap-6"
        mb="mb-24 max-[860px]:mb-0"
      >
        <FastFoodsShowcase />
        <FastFoodsInfo />
      </Section>
    </div>
  );
};

export default PopularFastFoods;
