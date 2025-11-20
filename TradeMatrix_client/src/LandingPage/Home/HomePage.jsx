import React from "react";
import Companies from "./Companies";
import Education from "./Education";
import Hero from "./Hero";
import OpenAccount from "./OpenAccount";
import Stats from "./Stats";
import Pricing from "./Pricing";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Companies />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
};

export default HomePage;
