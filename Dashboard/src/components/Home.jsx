import React from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 ">
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Home;
