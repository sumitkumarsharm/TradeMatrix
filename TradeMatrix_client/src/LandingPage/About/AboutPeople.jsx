import React from "react";
import { Link } from "react-router-dom";
import AboutTeam from "./AboutTeam";
import nithin_kamath from "../../assets/nithin-kamath.jpg";

const AboutPeople = () => {
  return (
    <section className="w-full bg-white py-24">
      <h2 className="text-center text-xl md:text-2xl font-medium text-gray-900 mb-16 md:mb-32">
        People Behind TradeMatrix
      </h2>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Founder Card */}
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src={nithin_kamath}
            alt="Founder & CEO of TradeMatrix - Founder Name"
            className="w-40 md:w-64 h-40 md:h-64 rounded-full object-cover"
          />

          <div className="text-center">
            <h3 className="text-base md:text-lg font-medium text-gray-900">
              Founder Name
            </h3>
            <p className="text-xs md:text-sm text-gray-600">Founder & CEO</p>
          </div>
        </div>

        {/* Founder Bio */}
        <div className="flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            Our founder started TradeMatrix to eliminate barriers traders and
            investors face — high costs, lack of powerful tools, and limited
            learning support.
          </p>

          <p>
            Today, TradeMatrix is reshaping the investment ecosystem with modern
            trading technology, transparency, and a strong retail-first
            approach.
          </p>

          <p>
            Actively contributing to India’s market development through advisory
            roles and new-age financial initiatives.
          </p>

          <p>
            When not building tech for markets, staying active and continuous
            learning keeps them motivated.
          </p>

          {/* Social Links */}
          <p className="text-gray-700">
            Connect on{" "}
            <Link to="/" className="text-blue-600 hover:underline font-medium">
              Homepage
            </Link>{" "}
            /{" "}
            <Link to="#" className="text-blue-600 hover:underline font-medium">
              TradingQ&A
            </Link>{" "}
            /{" "}
            <Link to="#" className="text-blue-600 hover:underline font-medium">
              Twitter
            </Link>
          </p>
        </div>
      </div>

      {/* Team Members */}
      <AboutTeam />
    </section>
  );
};

export default AboutPeople;
