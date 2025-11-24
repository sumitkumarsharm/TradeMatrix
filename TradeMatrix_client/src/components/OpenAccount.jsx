import React from "react";

const OpenAccount = () => {
  return (
    <section className="w-full py-24 bg-white text-center">
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
        Open a TradeMatrix account
      </h2>

      <p className="text-gray-600 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
        Modern trading platform, ₹0 investments & ₹20 intraday.
      </p>

      <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-md shadow hover:bg-blue-700 transition-all">
        Sign up for free
      </button>
    </section>
  );
};

export default OpenAccount;
