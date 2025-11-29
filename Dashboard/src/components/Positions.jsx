import React from "react";
import { positions } from "../Data/data";

const Positions = () => {
  const totalBuy = positions.reduce((acc, p) => acc + p.avg * p.qty, 0);

  const totalCurrent = positions.reduce((acc, p) => acc + p.price * p.qty, 0);

  const mtm = totalCurrent - totalBuy;

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Positions ({positions.length})
          </h2>
        </div>

        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr className="text-sm text-gray-600 border-b">
              <th className="py-3 px-6 text-left">Instrument</th>
              <th className="py-3 px-6 text-left">Product</th>
              <th className="py-3 px-6 text-right">Qty</th>
              <th className="py-3 px-6 text-right">Avg</th>
              <th className="py-3 px-6 text-right">LTP</th>
              <th className="py-3 px-6 text-right">P&L</th>
              <th className="py-3 px-6 text-right">Net Chg</th>
              <th className="py-3 px-6 text-right">Day Chg</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((pos, index) => {
              const curValue = pos.qty * pos.price;
              const pnl = curValue - pos.avg * pos.qty;

              const pnlClass = pnl >= 0 ? "text-green-600" : "text-red-600";
              const netClass = pos.net.includes("+")
                ? "text-green-600"
                : "text-red-600";
              const dayClass = pos.day.includes("+")
                ? "text-green-600"
                : "text-red-600";

              return (
                <tr
                  key={index}
                  className="text-sm text-gray-800 border-b hover:bg-gray-50"
                >
                  <td className="py-3 px-6">{pos.name}</td>
                  <td className="py-3 px-6">{pos.product}</td>

                  <td className="py-3 px-6 text-right">{pos.qty}</td>
                  <td className="py-3 px-6 text-right">{pos.avg}</td>
                  <td className="py-3 px-6 text-right">{pos.price}</td>

                  <td
                    className={`py-3 px-6 text-right font-medium ${pnlClass}`}
                  >
                    {pnl.toFixed(2)}
                  </td>

                  <td
                    className={`py-3 px-6 text-right font-medium ${netClass}`}
                  >
                    {pos.net}
                  </td>

                  <td
                    className={`py-3 px-6 text-right font-medium ${dayClass}`}
                  >
                    {pos.day}
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
            ₹{totalBuy.toFixed(2)}
          </h5>
          <p className="text-gray-500 text-sm">Buy Value</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5 border">
          <h5 className="text-2xl font-semibold text-gray-900">
            ₹{totalCurrent.toFixed(2)}
          </h5>
          <p className="text-gray-500 text-sm">Current Value</p>
        </div>

        <div
          className={`bg-white rounded-xl shadow p-5 border ${
            mtm >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          <h5 className="text-2xl font-semibold">₹{mtm.toFixed(2)}</h5>
          <p className="text-gray-500 text-sm">MTM (P&L)</p>
        </div>
      </div>
    </div>
  );
};

export default Positions;
