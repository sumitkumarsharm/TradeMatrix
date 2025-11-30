import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="w-full bg-white border-b shadow-sm px-4 flex items-center justify-between h-[60px]">
      <div className="w-full max-w-[300px] flex items-center gap-6  border-r">
        <div className="flex items-center gap-2 text-gray-700">
          <p className="font-semibold">NIFTY 50</p>
          <p className="font-medium text-gray-800">100.2</p>
          <p className="text-green-600 font-medium text-sm">0</p>
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <p className="font-semibold">SENSEX</p>
          <p className="font-medium text-gray-800">100.2</p>
          <p className="text-red-600 font-medium text-sm">0</p>
        </div>
      </div>

      <div className="w-full flex px-2 justify-end">
        <Menu />
      </div>
    </div>
  );
};

export default TopBar;
