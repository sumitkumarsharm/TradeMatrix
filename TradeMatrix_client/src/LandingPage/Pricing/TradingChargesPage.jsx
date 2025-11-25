import React, { useState } from "react";

const TradingChargesPage = () => {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* TAB BUTTONS */}
        <div className="flex gap-10 text-lg font-medium border-b border-gray-300">
          {["equity", "currency", "commodity"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 capitalize ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="mt-10">
          {/* EQUITY SECTION */}
          {activeTab === "equity" && (
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-gray-700 text-sm border border-gray-300">
                {/* HEADER */}
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 font-medium"></th>
                    <th className="p-4 font-medium">Equity delivery</th>
                    <th className="p-4 font-medium">Equity intraday</th>
                    <th className="p-4 font-medium">F&O - Futures</th>
                    <th className="p-4 font-medium">F&O - Options</th>
                  </tr>
                </thead>

                <tbody>
                  {/* Brokerage */}
                  <tr className=" border-gray-200">
                    <td className="p-4">Brokerage</td>
                    <td className="p-4">Zero Brokerage</td>
                    <td className="p-4">0.03% or ₹20/executed order</td>
                    <td className="p-4">0.03% or ₹20/executed order</td>
                    <td className="p-4">Flat ₹20 per executed order</td>
                  </tr>

                  {/* STT/CTT */}
                  <tr className="bg-gray-50">
                    <td className="p-4">STT/CTT</td>
                    <td className="p-4">0.1% on buy & sell</td>
                    <td className="p-4">0.025% on sell</td>
                    <td className="p-4">0.02% on sell</td>
                    <td className="p-4">
                      <ul className="list-disc ml-5 leading-relaxed">
                        <li>
                          0.125% of the intrinsic value on options that are
                          bought and exercised
                        </li>
                        <li>0.1% on sell (premium)</li>
                      </ul>
                    </td>
                  </tr>

                  {/* Transaction charges */}
                  <tr className=" border-gray-200">
                    <td className="p-4">Transaction charges</td>
                    <td className="p-4">
                      NSE: 0.00297% <br /> BSE: 0.00375%
                    </td>
                    <td className="p-4">
                      NSE: 0.00297% <br /> BSE: 0.00375%
                    </td>
                    <td className="p-4">
                      NSE: 0.00173% <br /> BSE: 0%
                    </td>
                    <td className="p-4">
                      NSE: 0.03503% (premium) <br /> BSE: 0.0325% (premium)
                    </td>
                  </tr>

                  {/* GST */}
                  <tr className=" bg-gray-50">
                    <td className="p-4">GST</td>
                    <td className="p-4">
                      18% on (brokerage + SEBI + txn charges)
                    </td>
                    <td className="p-4">
                      18% on (brokerage + SEBI + txn charges)
                    </td>
                    <td className="p-4">
                      18% on (brokerage + SEBI + txn charges)
                    </td>
                    <td className="p-4">
                      18% on (brokerage + SEBI + txn charges + transaction
                      charges)
                    </td>
                  </tr>

                  {/* SEBI */}
                  <tr className=" border-gray-200">
                    <td className="p-4">SEBI charges</td>
                    <td className="p-4">₹10 / crore</td>
                    <td className="p-4">₹10 / crore</td>
                    <td className="p-4">₹10 / crore</td>
                    <td className="p-4">₹10 / crore</td>
                  </tr>

                  {/* Stamp duty */}
                  <tr className="bg-gray-50">
                    <td className="p-4">Stamp charges </td>
                    <td className="p-4">0.015% or ₹1500/crore buy</td>
                    <td className="p-4">0.003% or ₹300/crore buy</td>
                    <td className="p-4">0.002% or ₹200/crore buy</td>
                    <td className="p-4">0.003% or ₹300/crore buy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* CURRENCY SECTION */}
          {activeTab === "currency" && (
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-gray-700 text-sm border border-gray-300">
                {/* HEADER */}
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 font-medium"></th>
                    <th className="p-4 font-medium">Currency futures</th>
                    <th className="p-4 font-medium">Currency options</th>
                  </tr>
                </thead>

                <tbody>
                  {/* Brokerage */}
                  <tr className=" border-gray-200">
                    <td className="p-4 py-7">Brokerage</td>
                    <td className="p-4 py-7">
                      0.03% or ₹ 20/executed order whichever is lower
                    </td>
                    <td className="p-4 py-7">₹ 20/executed order</td>
                  </tr>

                  {/* STT/CTT */}
                  <tr className="bg-gray-50">
                    <td className="p-4 py-7">STT/CTT</td>
                    <td className="p-4 py-7">No STT</td>
                    <td className="p-4 py-7">No STT</td>
                  </tr>

                  {/* Transaction charges */}
                  <tr className=" border-gray-200">
                    <td className="p-4">Transaction charges</td>
                    <td className="p-4">
                      NSE: 0.00035% <br /> BSE: 0.00045%
                    </td>
                    <td className="p-4">
                      NSE: 0.0311% <br /> BSE: 0.001%
                    </td>
                  </tr>

                  {/* GST */}
                  <tr className=" bg-gray-50">
                    <td className="p-4">GST</td>
                    <td className="p-4">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                    <td className="p-4">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>

                  {/* SEBI */}
                  <tr className=" border-gray-200">
                    <td className="p-4">SEBI charges</td>
                    <td className="p-4">₹10 / crore</td>
                    <td className="p-4">₹10 / crore</td>
                  </tr>

                  {/* Stamp duty */}
                  <tr className="bg-gray-50">
                    <td className="p-4">Stamp charges </td>
                    <td className="p-4">0.0001% or ₹10 / crore on buy side</td>
                    <td className="p-4">0.0001% or ₹10 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* COMMODITY SECTION */}
          {activeTab === "commodity" && (
            <div className="w-full ">
              <table className="w-full text-left text-gray-700 text-sm border border-gray-300">
                {/* HEADER */}
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 py-5 font-medium"></th>
                    <th className="p-4 font-medium">Commodity futures </th>
                    <th className="p-4 font-medium">Commodity options</th>
                  </tr>
                </thead>

                <tbody>
                  {/* Brokerage */}
                  <tr className=" border-gray-200">
                    <td className="p-4 py-7">Brokerage</td>
                    <td className="p-4 py-7">
                      {" "}
                      0.03% or Rs. 20/executed order whichever is lower
                    </td>
                    <td className="p-4">₹ 20/executed order</td>
                  </tr>

                  {/* STT/CTT */}
                  <tr className="bg-gray-50">
                    <td className="p-4">STT/CTT</td>
                    <td className="p-4 py-7">0.01% on sell side (Non-Agri)</td>
                    <td className="p-4 py-7">0.05% on sell side</td>
                  </tr>

                  {/* Transaction charges */}
                  <tr className=" border-gray-200">
                    <td className="p-4">Transaction charges</td>
                    <td className="p-4">
                      MCX: 0.0021% <br /> NSE: 0.0001%
                    </td>
                    <td className="p-4">
                      MCX: 0.0418% <br /> NSE: 0.001%
                    </td>
                  </tr>

                  {/* GST */}
                  <tr className=" bg-gray-50">
                    <td className="p-4">GST</td>
                    <td className="p-4">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                    <td className="p-4">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>

                  {/* SEBI */}
                  <tr className=" border-gray-200">
                    <td className="p-4">SEBI charges</td>
                    <td className="p-4">
                      Agri: <br /> ₹1 / crore <br /> Non-agri: <br />
                      ₹10 / crore
                    </td>
                    <td className="p-4">₹10 / crore</td>
                  </tr>

                  {/* Stamp duty */}
                  <tr className="bg-gray-50 ">
                    <td className="p-4">Stamp charges </td>
                    <td className="p-4">
                      Agri: ₹1 / crore Non-agri: ₹10 / crore
                    </td>
                    <td className="p-4">
                      Agri: ₹1 / crore Non-agri: ₹10 / crore
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TradingChargesPage;
