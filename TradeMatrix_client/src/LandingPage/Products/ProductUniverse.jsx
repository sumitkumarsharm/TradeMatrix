import React from "react";

// Logos (replace when real asset names available)
import logo6 from "../../assets/sensibull-logo.svg";
import logo2 from "../../assets/sensibull-logo.svg";
import logo3 from "../../assets/tijori.svg";
import logo4 from "../../assets/streak-logo.png";
import logo5 from "../../assets/smallcase-logo.png";
import logo1 from "../../assets/ditto-logo.png";

const ProductUniverse = () => {
  const products = [
    {
      logo: logo2,
      name: "Sensibull",
      desc: "Options analytics to help you analyze market data and trade smarter.",
    },
    {
      logo: logo1,
      name: "TradeMatrix Fund House",
      desc: "Transparent investment solutions helping you grow wealth confidently.",
    },
    {
      logo: logo3,
      name: "Tijori",
      desc: "Insights on markets, industries & companies made simplified.",
    },
    {
      logo: logo4,
      name: "Streak",
      desc: "Create & automate trading strategies online — without coding.",
    },
    {
      logo: logo5,
      name: "Smallcase",
      desc: "Theme-based investing in professionally managed stock baskets.",
    },
    {
      logo: logo6,
      name: "Ditto",
      desc: "Personalized insurance advisory — transparent & spam-free.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <header className="text-center">
          <h2 className="text-xl md:text-3xl font-semibold text-gray-900">
            The TradeMatrix Universe
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-3 mb-14">
            Enhance your trading & investing experience with our partner
            solutions
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 place-items-center">
          {products.map((item, index) => (
            <article
              key={index}
              className="text-center w-full max-w-xs"
              aria-label={`${item.name} product`}
            >
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="h-12 mx-auto object-contain"
              />
              <h3 className="font-medium text-gray-900 mt-4 text-sm md:text-base">
                {item.name}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductUniverse;
