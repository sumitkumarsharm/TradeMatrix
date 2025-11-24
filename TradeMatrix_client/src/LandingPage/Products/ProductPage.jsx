import React from "react";
import ProductHero from "./ProductHero";
import ProductLeftSection from "./ProductLeftSection";
import ProductRightSection from "./ProductRightSection";
import ProductUniverse from "./ProductUniverse";

const ProductPage = () => {
  return (
    <div>
      <ProductHero />
      <ProductLeftSection />
      <ProductRightSection />
      <ProductUniverse />
    </div>
  );
};

export default ProductPage;
