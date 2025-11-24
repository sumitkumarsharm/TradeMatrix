import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./LandingPage/Home/HomePage";
import Layout from "./Layout/Layout";
import AboutPage from "./LandingPage/About/AboutPage";
import PricingPage from "./LandingPage/Pricing/PricingPage";
import ProductPage from "./LandingPage/Products/ProductPage";
import SignUppage from "./LandingPage/SignUp/SignUppage";
import SupportPage from "./LandingPage/Support/SupportPage";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/open-account" element={<SignUppage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
