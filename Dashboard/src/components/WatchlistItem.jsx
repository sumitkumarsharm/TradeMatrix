import React from "react";

const WatchlistItem = ({ stock }) => {
  const isProfit = stock.change >= 0;
  const changeColor = isProfit ? "text-green-600" : "text-red-600";

  return (
    <li className="px-4 py-3 border-b hover:bg-gray-50 cursor-pointer">
      <div className="flex justify-between items-center">
        {/* Stock Name */}
        <div>
          <p className="font-medium text-gray-800">{stock.name}</p>
          <p className="text-xs text-gray-500">{stock.symbol}</p>
        </div>

        {/* Price + Change */}
        <div className="text-right">
          <p className="font-semibold text-gray-900">{stock.price}</p>
          <p className={`text-xs ${changeColor}`}>
            {isProfit ? "+" : ""}
            {stock.change}%
          </p>
        </div>
      </div>
    </li>
  );
};

export default WatchlistItem;
