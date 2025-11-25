import React from "react";

const PricingHome = () => {
  return (
    <section className="w-full bg-white pt-32 pb-28">
      <div className="flex flex-col items-center text-center gap-3 mb-16">
        <h1 className="text-xl md:text-3xl font-medium text-gray-900">
          Charges and Taxes
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          List of all charges and taxes
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-16 place-items-center">
        <div className="flex flex-col items-center text-center max-w-sm">
          <div className="relative">
            <h2 className="text-7xl font-semibold text-orange-500">₹0</h2>
            <div className="absolute -bottom-2 -right-4 w-10 h-10 opacity-40">
              <span className="text-blue-300 text-3xl">⋯</span>
            </div>
          </div>
          <h3 className="text-xl font-medium mt-6 text-gray-900">
            Free equity delivery
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-sm">
          <div className="relative">
            <h2 className="text-7xl font-semibold text-orange-500">₹20</h2>
            <div className="absolute -bottom-2 -right-4 w-10 h-10 opacity-40">
              <span className="text-blue-300 text-3xl">⋯</span>
            </div>
          </div>
          <h3 className="text-xl font-medium mt-6 text-gray-900">
            Intraday and F&O trades
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            Flat ₹20 or 0.03% per order (whichever is lower) across equity,
            currency, and commodity trades. ₹20 for all option trades.
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-sm">
          <div className="relative">
            <h2 className="text-7xl font-semibold text-orange-500">₹0</h2>
            <div className="absolute -bottom-2 -right-4 w-10 h-10 opacity-40">
              <span className="text-blue-300 text-3xl">⋯</span>
            </div>
          </div>
          <h3 className="text-xl font-medium mt-6 text-gray-900">
            Free direct MF
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingHome;
