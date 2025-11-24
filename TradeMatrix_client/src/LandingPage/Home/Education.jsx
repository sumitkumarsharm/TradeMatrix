import React from "react";
import EducationImage from "../../assets/index_education.svg";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={EducationImage}
            alt="Education Illustration"
            className="w-full max-w-lg object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6 text-left">
          <h2 className="text-xl md:text-3xl font-semibold text-gray-900">
            Free and open market education
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg max-w-md">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <Link href="#" className="text-blue-600 font-medium text-lg">
            Varsity →
          </Link>

          <p className="text-gray-600 leading-relaxed text-lg max-w-md">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>

          <Link href="#" className="text-blue-600 font-medium text-lg ">
            TradingQ&A →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Education;
