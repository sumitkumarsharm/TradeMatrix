import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./LandingPage/Home/HomePage";
import Layout from "./Layout/layout";
import AboutPage from "./LandingPage/About/AboutPage";
import PricingPage from "./LandingPage/Pricing/PricingPage";
import ProductPage from "./LandingPage/Products/ProductPage";
import SignUppage from "./LandingPage/SignUp/SignUppage";
import SupportPage from "./LandingPage/Support/SupportPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/sign-up" element={<SignUppage />} />
        <Route path="/support" element={<SupportPage />} />
      </Route>
    </Routes>
  );
};

export default App;
