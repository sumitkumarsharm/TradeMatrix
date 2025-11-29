import React from "react";
import WatchList from "./WatchList";
import { Route, Routes } from "react-router-dom";
import Summery from "./Summery";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-3 md:px-6">
      <WatchList />

      <div className="pt-4">
        <Routes>
          <Route path="/" element={<Summery />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
