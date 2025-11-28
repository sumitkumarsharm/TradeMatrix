import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white border-b px-4  shadow-sm">
      {/* Market Ticker - Responsive */}
      <div className="flex items-center gap-8 overflow-x-auto whitespace-nowrap pr-4 md:border-r md:pr-8 md:py-2">
        {/* NIFTY */}
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <p className="font-semibold">NIFTY 50</p>
          <p className="font-medium">100.2</p>
          <p className="text-green-600 font-medium">0</p>
        </div>

        {/* SENSEX */}
        <div className="flex items-center gap-2 py-2 text-gray-700">
          <p className="font-semibold">SENSEX</p>
          <p className="font-medium">100.2</p>
          <p className="text-red-600 font-medium">0</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
