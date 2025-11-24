import React from "react";
import ProductHero from "./ProductHero";
import ProductLeftSection from "./ProductLeftSection";
import ProductRightSection from "./ProductRightSection";
import ProductUniverse from "./ProductUniverse";
import kite from "../../assets/products-kite.png";
import products_coin from "../../assets/products-coin.png";
import versity_products from "../../assets/varsity-products.svg";

const ProductPage = () => {
  return (
    <div className="pt-28">
      <ProductHero />
      <ProductLeftSection
        imageUrl={kite}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/kite/demo"
        learnMore="/kite"
        googlePlay="https://play.google.com/store/apps"
        appStore="https://apps.apple.com"
      />
      <ProductRightSection
        imageUrl="/assets/console-ui.png"
        productName="Console"
        productDescription="The central dashboard for your TradeMatrix account. Gain insights into your trades and investments with in-depth reports and visualizations."
        learnMore="/console"
      />
      <ProductLeftSection
        imageUrl={products_coin}
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        // tryDemo="/kite/demo"
        learnMore="/coin"
        googlePlay="https://play.google.com/store/apps"
        appStore="https://apps.apple.com/stores/apps"
      />
      <ProductRightSection />
      <ProductLeftSection
        imageUrl={versity_products}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/kite/demo"
        learnMore="/kite"
        googlePlay="https://play.google.com/store/apps"
        appStore="https://apps.apple.com"
      />

      <ProductUniverse />
    </div>
  );
};

export default ProductPage;
