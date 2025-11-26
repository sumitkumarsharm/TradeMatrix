import React from "react";

import stocksImg from "../../assets/stocks-acop.svg";
import mutualImg from "../../assets/mf-acop.svg";
import ipoImg from "../../assets/ipo-acop.svg";
import futuresImg from "../../assets/fo-acop.svg";
import stepsImg from "../../assets/steps-acop.svg";
import benefitsImg from "../../assets/acop-benefits.svg";

const SignupDematAccount = () => {
  return (
    <section className="w-full bg-white pt-20 pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-medium text-gray-800 mb-14">
          Investment options with TradeMatrix demat account
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10 text-gray-700">
          <article className="flex gap-4 items-start">
            <img
              src={stocksImg}
              alt="Stocks investment option"
              loading="lazy"
              className="w-14 h-14"
            />
            <div>
              <h3 className="font-semibold text-lg">Stocks</h3>
              <p className="text-sm mt-1">
                Invest in all exchange-listed securities
              </p>
            </div>
          </article>

          <article className="flex gap-4 items-start">
            <img
              src={mutualImg}
              alt="Mutual funds investment option"
              loading="lazy"
              className="w-14 h-14"
            />
            <div>
              <h3 className="font-semibold text-lg">Mutual funds</h3>
              <p className="text-sm mt-1">
                Invest in commission-free direct mutual funds
              </p>
            </div>
          </article>

          <article className="flex gap-4 items-start">
            <img
              src={ipoImg}
              alt="IPO investment option"
              loading="lazy"
              className="w-14 h-14"
            />
            <div>
              <h3 className="font-semibold text-lg">IPO</h3>
              <p className="text-sm mt-1">
                Apply to the latest IPOs instantly via UPI
              </p>
            </div>
          </article>

          <article className="flex gap-4 items-start">
            <img
              src={futuresImg}
              alt="Futures and options"
              loading="lazy"
              className="w-14 h-14"
            />
            <div>
              <h3 className="font-semibold text-lg">Futures & options</h3>
              <p className="text-sm mt-1">
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </article>
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-md font-medium">
            Explore Investments
          </button>
        </div>

        <div className="mt-28 pt-20 border-t border-gray-200">
          <h2 className="text-center text-2xl md:text-3xl font-medium text-gray-800 mb-14">
            Steps to open a demat account with TradeMatrix
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src={stepsImg}
                alt="Steps to open TradeMatrix demat account"
                loading="lazy"
                className="w-[85%] md:w-[70%]"
              />
            </div>

            <ol className="flex flex-col gap-8 text-gray-700">
              <li className="flex items-start gap-4">
                <span className="text-gray-500 font-medium text-lg">01</span>
                <p className="text-gray-700 text-base">
                  Enter the requested details
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="text-gray-500 font-medium text-lg">02</span>
                <p className="text-gray-700 text-base">
                  Complete e-sign & verification
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="text-gray-500 font-medium text-lg">03</span>
                <p className="text-gray-700 text-base">Start investing!</p>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-28">
          <h2 className="text-center text-2xl md:text-3xl font-medium text-gray-800 mb-20">
            Benefits of opening a TradeMatrix demat account
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="flex justify-center">
              <img
                src={benefitsImg}
                alt="Benefits of TradeMatrix account"
                loading="lazy"
                className="w-[70%] md:w-[65%]"
              />
            </div>

            <div className="flex flex-col gap-10 text-gray-700">
              <article>
                <h3 className="font-semibold text-lg mb-1">
                  Unbeatable pricing
                </h3>
                <p className="text-sm">
                  Zero charges for equity & mutual fund investments. Flat ₹20
                  fees for intraday and F&O trades.
                </p>
              </article>

              <article>
                <h3 className="font-semibold text-lg mb-1">
                  Best investing experience
                </h3>
                <p className="text-sm">
                  Simple and intuitive trading platform with a clean,
                  easy-to-understand interface.
                </p>
              </article>

              <article>
                <h3 className="font-semibold text-lg mb-1">
                  No spam or gimmicks
                </h3>
                <p className="text-sm">
                  No gimmicks, spam, “gamification”, or intrusive notifications.
                </p>
              </article>

              <article>
                <h3 className="font-semibold text-lg mb-1">
                  The TradeMatrix ecosystem
                </h3>
                <p className="text-sm">
                  Access powerful tools and investment apps built for serious
                  traders and investors.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupDematAccount;
