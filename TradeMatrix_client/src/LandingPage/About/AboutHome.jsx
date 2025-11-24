import React from "react";
import { Link } from "react-router-dom";

const AboutHome = () => {
  return (
    <section className="w-full bg-white pt-26 pb-20 md:pt-34">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed">
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto border-b mt-14 mb-12 border-gray-200" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">
        <div className="flex flex-col gap-4 text-sm md:text-base leading-relaxed">
          <p>
            We launched TradeMatrix with the goal of removing every barrier that
            traders and investors face — in terms of cost, support, and
            technology.
          </p>
          <p>
            Our transparent pricing model and advanced trading tools have helped
            us become one of India’s most trusted investment platforms.
          </p>
          <p>
            Millions of investors place orders every year through our ecosystem,
            contributing significantly to India’s retail trading activity.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm md:text-base leading-relaxed">
          <p>
            We also operate multiple educational initiatives to empower retail
            investors with practical knowledge and insights.
          </p>
          <p>
            Through TradeMatrix Labs, we support innovative financial startups
            that are shaping the future of India’s capital markets.
          </p>
          <p>
            Stay updated with what’s happening at TradeMatrix through our{" "}
            <Link
              to="/blog"
              className="text-blue-600 hover:underline font-medium"
            >
              blog
            </Link>
            , or explore our{" "}
            <Link
              to="/philosophies"
              className="text-blue-600 hover:underline font-medium"
            >
              philosophies
            </Link>{" "}
            and decision-making approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
