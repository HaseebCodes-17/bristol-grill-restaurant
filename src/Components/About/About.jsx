import React from "react";
import "./About.css";
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutFoodSection from "./AboutFoodSection/AboutFoodSection";
import PopularFastFoods from "./PopularFastFoods/PopularFastFoods";
import AboutInfo from "./AboutInfo/AboutInfo";
import ExpertChefs from "./ExpertChefsSection/ExpertChefs";

const About = () => {
  return (
    <>
      <AboutHeader />
      <AboutFoodSection />
      <PopularFastFoods />
      <ExpertChefs />
      <AboutInfo />
    </>
  );
};

export default About;
