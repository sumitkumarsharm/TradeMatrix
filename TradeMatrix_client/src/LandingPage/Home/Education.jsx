import React from "react";
import EducationImage from "../../assets/index_education.svg";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <section className="w-full py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center md:justify-start">
          <img
            src={EducationImage}
            alt="Education Illustration"
            className="w-64 md:w-full max-w-md object-contain"
          />
        </div>

        <div className="flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Free and open market education
          </h2>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-lg mx-auto md:mx-0">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <Link
            to="#"
            className="text-blue-600 font-medium text-base md:text-lg hover:underline"
          >
            Varsity →
          </Link>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-lg mx-auto md:mx-0">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>

          <Link
            to="#"
            className="text-blue-600 font-medium text-base md:text-lg hover:underline"
          >
            TradingQ&A →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Education;
