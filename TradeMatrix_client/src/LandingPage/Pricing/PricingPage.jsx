import React from "react";
import PricingHome from "./PricingHome";
import TradingChargesPage from "./TradingChargesPage";
import ServicesCharges from "./ServicesCharges";
import PricingDetails from "./PricingDetails";

const PricingPage = () => {
  return (
    <div>
      <PricingHome />
      <TradingChargesPage />
      <ServicesCharges />
      <PricingDetails />
    </div>
  );
};

export default PricingPage;
