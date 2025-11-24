import React from "react";

const OpenAccount = () => {
  return (
    <section className="w-full py-16 bg-white text-center flex flex-col justify-center items-center gap-3">
      <h2 className="text-xl md:text-3xl font-semibold text-gray-900">
        Open a TradeMatrix account
      </h2>

      <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
        Modern trading platform, ₹0 investments, and just ₹20 for intraday &
        derivatives.
      </p>

      <button className="mt-8 cursor-pointer px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-md shadow hover:bg-blue-700 transition-all">
        Sign up for free
      </button>
    </section>
  );
};

export default OpenAccount;
