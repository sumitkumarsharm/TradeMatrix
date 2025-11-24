import React from "react";
import landing from "../../assets/landing.svg";
import { SignupButton } from "./HomeComponents";

const Hero = () => {
  return (
    <section className="w-full bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 px-6 md:px-10 text-center">
        <img
          className="w-full max-w-5xl object-contain drop-shadow-sm"
          src={landing}
          alt="Landing"
        />

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-snug">
            Invest in everything
          </h1>

          <p className="text-gray-600 text-lg max-w-5xl leading-relaxed">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <SignupButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
