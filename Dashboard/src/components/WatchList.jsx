import React from "react";
import { watchlist } from "../Data/data";
import WatchlistItem from "./WatchlistItem";

const WatchList = () => {
  return (
    <div className="w-full max-w-[22%]  border-r bg-white flex flex-col">
      {/* Search Bar */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
          <input
            type="text"
            className="bg-transparent outline-none w-full text-sm text-gray-700"
            placeholder="Search eg. INFY, BSE, NIFTY, MCX..."
          />
          <span className="text-xs text-gray-500">{watchlist.length}/50</span>
        </div>
      </div>

      {/* Watchlist Items */}
      <ul className="flex-1 overflow-y-auto">
        {watchlist.map((stock, index) => (
          <WatchlistItem key={index} stock={stock} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;
