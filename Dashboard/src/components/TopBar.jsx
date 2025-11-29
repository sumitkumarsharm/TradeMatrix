import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="w-full bg-white border-b shadow-sm px-4 flex items-center justify-between">
      <div className="w-full max-w-fit flex flex-wrap items-center gap-6 pr-4 md:border-r md:pr-8 md:py-2">
        <div className="flex items-center gap-2 text-gray-700 py-1">
          <p className="font-semibold">NIFTY 50</p>
          <p className="font-medium">100.2</p>
          <p className="text-green-600 font-medium">0</p>
        </div>

        <div className="flex items-center gap-2 text-gray-700 py-1">
          <p className="font-semibold">SENSEX</p>
          <p className="font-medium">100.2</p>
          <p className="text-red-600 font-medium">0</p>
        </div>
      </div>
      <div className="w-full flex  px-2 justify-end">
        <Menu />
      </div>
    </div>
  );
};

export default TopBar;
