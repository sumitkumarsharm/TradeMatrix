import React from "react";
import Education from "./Education";
import Hero from "./Hero";
import OpenAccount from "../../components/OpenAccount";
import Stats from "./Stats";
import Pricing from "./Pricing";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
};

export default HomePage;
