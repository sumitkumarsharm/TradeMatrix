import React, { useState } from "react";
import { Link } from "react-router-dom";

const TradingChargesPage = () => {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
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

        <div className="mt-10">
          {/* EQUITY */}
          {activeTab === "equity" && (
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-gray-700 text-sm border border-gray-300">
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
                  <tr>
                    <td className="p-4">Brokerage</td>
                    <td className="p-4">Zero Brokerage</td>
                    <td className="p-4">0.03% or ₹20/order</td>
                    <td className="p-4">0.03% or ₹20/order</td>
                    <td className="p-4">₹20/order</td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-4">STT/CTT</td>
                    <td className="p-4">0.1% on buy & sell</td>
                    <td className="p-4">0.025% on sell</td>
                    <td className="p-4">0.02% on sell</td>
                    <td className="p-4">
                      <ul className="list-disc ml-5">
                        <li>0.125% on exercised options</li>
                        <li>0.1% on sell (premium)</li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4">Transaction charges</td>
                    <td className="p-4">
                      NSE 0.00297% <br /> BSE 0.00375%
                    </td>
                    <td className="p-4">
                      NSE 0.00297% <br /> BSE 0.00375%
                    </td>
                    <td className="p-4">
                      NSE 0.00173% <br /> BSE 0%
                    </td>
                    <td className="p-4">
                      NSE 0.03503% <br /> BSE 0.0325%
                    </td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-4">GST</td>
                    <td className="p-4">18% applicable</td>
                    <td className="p-4">18% applicable</td>
                    <td className="p-4">18% applicable</td>
                    <td className="p-4">18% applicable</td>
                  </tr>

                  <tr>
                    <td className="p-4">SEBI charges</td>
                    <td className="p-4">₹10/crore</td>
                    <td className="p-4">₹10/crore</td>
                    <td className="p-4">₹10/crore</td>
                    <td className="p-4">₹10/crore</td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-4">Stamp charges</td>
                    <td className="p-4">0.015% buy</td>
                    <td className="p-4">0.003% buy</td>
                    <td className="p-4">0.002% buy</td>
                    <td className="p-4">0.003% buy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* CURRENCY */}
          {activeTab === "currency" && (
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-gray-700 text-sm border border-gray-300">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 font-medium"></th>
                    <th className="p-4 font-medium">Currency futures</th>
                    <th className="p-4 font-medium">Currency options</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="p-4">Brokerage</td>
                    <td className="p-4">0.03% or ₹20/order</td>
                    <td className="p-4">₹20/order</td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-4">STT/CTT</td>
                    <td className="p-4">No STT</td>
                    <td className="p-4">No STT</td>
                  </tr>

                  <tr>
                    <td className="p-4">Transaction charges</td>
                    <td className="p-4">
                      NSE 0.00035% <br /> BSE 0.00045%
                    </td>
                    <td className="p-4">
                      NSE 0.0311% <br /> BSE 0.001%
                    </td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-4">GST</td>
                    <td className="p-4">18% applicable</td>
                    <td className="p-4">18% applicable</td>
                  </tr>

                  <tr>
                    <td className="p-4">SEBI charges</td>
                    <td className="p-4">₹10/crore</td>
                    <td className="p-4">₹10/crore</td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-4">Stamp charges</td>
                    <td className="p-4">0.0001% buy</td>
                    <td className="p-4">0.0001% buy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* COMMODITY */}
          {activeTab === "commodity" && (
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-gray-700 text-sm border border-gray-300">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="p-4"></th>
                    <th className="p-4">Commodity futures</th>
                    <th className="p-4">Commodity options</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="p-4">Brokerage</td>
                    <td className="p-4">0.03% or ₹20/order</td>
                    <td className="p-4">₹20/order</td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-4">STT/CTT</td>
                    <td className="p-4">0.01% sell (Non-Agri)</td>
                    <td className="p-4">0.05% sell</td>
                  </tr>

                  <tr>
                    <td className="p-4">Transaction charges</td>
                    <td className="p-4">
                      MCX 0.0021% <br /> NSE 0.0001%
                    </td>
                    <td className="p-4">
                      MCX 0.0418% <br /> NSE 0.001%
                    </td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-4">GST</td>
                    <td className="p-4">18% applicable</td>
                    <td className="p-4">18% applicable</td>
                  </tr>

                  <tr>
                    <td className="p-4">SEBI charges</td>
                    <td className="p-4">
                      Agri ₹1/crore <br /> Non-agri ₹10/crore
                    </td>
                    <td className="p-4">₹10/crore</td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-4">Stamp charges</td>
                    <td className="p-4">Agri ₹1/crore B:10/crore</td>
                    <td className="p-4">Agri ₹1/crore B:10/crore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <p className="text-center text-xl text-gray-600">
          <Link className="text-blue-500" to="#">
            Calculate your costs
          </Link>{" "}
          upfront using our brokerage calculator
        </p>
      </div>
    </section>
  );
};

export default TradingChargesPage;
