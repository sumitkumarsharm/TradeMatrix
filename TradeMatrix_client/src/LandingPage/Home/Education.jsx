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
            alt="Market education and learning resources"
            className="w-64 md:w-full max-w-md object-contain"
          />
        </div>

        <div className="flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Free and open market education
          </h2>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-lg mx-auto md:mx-0">
            Varsity: The largest online stock market education book in the
            world.
          </p>

          <Link
            to="#"
            className="text-blue-600 font-medium text-base md:text-lg hover:underline"
          >
            Explore Varsity →
          </Link>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-lg mx-auto md:mx-0">
            TradingQ&A: Most active investing & trading community in India.
          </p>

          <Link
            to="#"
            className="text-blue-600 font-medium text-base md:text-lg hover:underline"
          >
            Visit TradingQ&A →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Education;
