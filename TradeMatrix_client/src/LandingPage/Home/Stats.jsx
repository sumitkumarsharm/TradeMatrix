import React from "react";
import stats from "../../assets/stats.png";
import pressLogo from "../../assets/press-logo.png";

const Stats = () => {
  return (
    <section className="w-full py-20 bg-white px-2 sm:px-0">
      <div className="max-w-7xl mx-auto px-6 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-8">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
            Trust with confidence
          </h1>

          <div>
            <h2 className="text-md font-semibold text-gray-800 mb-2">
              Customer-first always
            </h2>
            <p className="text-gray-600 leading-relaxed">
              That's why thousands of investors trust{" "}
              <strong>TradeMatrix</strong>
              with their portfolios — providing a transparent, reliable, and
              seamless trading experience for every investor.
            </p>
          </div>

          <div>
            <h2 className="text-md font-semibold text-gray-800 mb-2">
              No spam or gimmicks
            </h2>
            <p className="text-gray-600 leading-relaxed">
              No gimmicks, spam, “gamification”, or annoying notifications. Just
              high-quality tools that let you trade at your own pace.
              <span className="text-blue-600 cursor-pointer"> Learn more.</span>
            </p>
          </div>

          <div>
            <h2 className="text-md font-semibold text-gray-800 mb-2">
              The TradeMatrix ecosystem
            </h2>
            <p className="text-gray-600 leading-relaxed">
              More than just a single app — TradeMatrix offers a complete suite
              of tools and features designed to support every type of investor.
            </p>
          </div>

          <div>
            <h2 className="text-md font-semibold text-gray-800 mb-2">
              Do better with money
            </h2>
            <p className="text-gray-600 leading-relaxed">
              With intelligent insights, alerts, and smart nudges, TradeMatrix
              helps you make better and more informed financial decisions every
              day.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex  justify-center items-center md:justify-end ">
          <img src={stats} alt="stats graphic" className="w-full" />
        </div>
      </div>
      <div className="w-full mt-8 flex justify-center">
        <img src={pressLogo} alt="press-image" />
      </div>
    </section>
  );
};

export default Stats;
