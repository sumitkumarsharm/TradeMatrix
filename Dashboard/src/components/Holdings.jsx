import React from "react";
import { holdings } from "../Data/data";

const Holdings = () => {
  // Calculate totals
  const totalInvestment = holdings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );

  const totalCurrent = holdings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );

  const totalPL = totalCurrent - totalInvestment;

  return (
    <div className="p-6 w-full  space-y-8 overflow-hidden">
      <div className=" rounded-xl">
        <div className="flex justify-between items-center px-6 py-4 ">
          <h2 className="text-lg font-semibold text-gray-800">
            Holdings ({holdings.length})
          </h2>
        </div>

        <table className="w-full border  border-gray-400 overflow-hidden">
          <thead className="bg-gray-50 overflow-hidden">
            <tr className="text-sm text-gray-600 border-b border-gray-400">
              <th className="border-x py-3 px-6 text-center border-r border-gray-400">
                Instrument
              </th>
              <th className="py-3 px-6 text-center border-r border-gray-400">
                Qty
              </th>
              <th className="py-3 px-6 text-center border-r border-gray-400">
                Avg
              </th>
              <th className="py-3 px-6 text-center border-r border-gray-400">
                LTP
              </th>
              <th className="py-3 px-6 text-center border-r border-gray-400">
                Cur. Val
              </th>
              <th className="py-3 px-6 text-center border-r border-gray-400">
                P&L
              </th>
              <th className="py-3 px-6 text-center border-r border-gray-400">
                Net Chg
              </th>
              <th className="py-3 px-6 text-center border-r border-gray-400">
                Day Chg
              </th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((stock, index) => {
              const curValue = stock.qty * stock.price;
              const pnl = curValue - stock.avg * stock.qty;

              const pnlClass = pnl >= 0 ? "text-green-600" : "text-red-600";
              const netClass = stock.net.includes("+")
                ? "text-green-600"
                : "text-red-600";
              const dayClass = stock.day.includes("+")
                ? "text-green-600"
                : "text-red-600";

              return (
                <tr
                  key={index}
                  className="text-sm text-gray-800 border-b border-gray-400 hover:bg-gray-50 overflow-hidden"
                >
                  <td className=" border-r border-gray-400 py-3 text-center px-6">
                    {stock.name}
                  </td>
                  <td className="py-3 px-6 text-center">{stock.qty}</td>
                  <td className="py-3 px-6 text-center">{stock.avg}</td>
                  <td className="py-3 px-6 text-center">{stock.price}</td>
                  <td className="py-3 px-6 text-center">
                    {curValue.toFixed(2)}
                  </td>

                  <td
                    className={`py-3 px-6 text-center font-medium ${pnlClass}`}
                  >
                    {pnl.toFixed(2)}
                  </td>

                  <td
                    className={`py-3 px-6 text-center font-medium ${netClass}`}
                  >
                    {stock.net}
                  </td>

                  <td
                    className={`py-3 px-6 text-center font-medium ${dayClass}`}
                  >
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow p-5 border">
          <h5 className="text-2xl font-semibold text-gray-900">
            ₹{totalInvestment.toFixed(2)}
          </h5>
          <p className="text-gray-500 text-sm">Total Investment</p>
        </div>
        <div className="bg-white rounded-xl shadow p-5 border">
          <h5 className="text-2xl font-semibold text-gray-900">
            ₹{totalCurrent.toFixed(2)}
          </h5>
          <p className="text-gray-500 text-sm">Current Value</p>
        </div>

        <div
          className={`bg-white rounded-xl shadow p-5 border ${
            totalPL >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          <h5 className="text-2xl font-semibold">₹{totalPL.toFixed(2)}</h5>
          <p className="text-gray-500 text-sm">Total P&L</p>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
