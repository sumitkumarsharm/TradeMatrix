import React from "react";
import ProductHero from "./ProductHero";
import ProductLeftSection from "./ProductLeftSection";
import ProductRightSection from "./ProductRightSection";
import ProductUniverse from "./ProductUniverse";

import kite from "../../assets/products-kite.png";
import console from "../../assets/products-console.png";
import products_coin from "../../assets/products-coin.png";
import versity_products from "../../assets/varsity-products.svg";
import kite_connect from "../../assets/kite-connect.svg";

const ProductPage = () => {
  return (
    <div className="pt-28 space-y-20 md:space-y-28">
      <ProductHero />

      <ProductLeftSection
        imageUrl={kite}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, a sleek UI, and seamless experience across Android and iOS."
        tryDemo="/kite/demo"
        learnMore="/kite"
        googlePlay="https://play.google.com/store/apps"
        appStore="https://apps.apple.com"
      />

      <ProductRightSection
        imageUrl={console}
        productName="Console"
        productDescription="Console is your central dashboard for insights into your trades and investments. Access reports, portfolio analytics and much more."
        learnMore="/console"
      />

      <ProductLeftSection
        imageUrl={products_coin}
        productName="Coin"
        productDescription="Buy direct mutual funds online at zero commission, delivered straight to your Demat account. Simple, transparent, and seamless."
        learnMore="/coin"
        googlePlay="https://play.google.com/store/apps"
        appStore="https://apps.apple.com"
      />

      <ProductRightSection
        imageUrl={kite_connect}
        productName="Kite Connect"
        productDescription="Build powerful trading & investing experiences. Our APIs enable developers to connect directly to market data and execute trades programmatically."
        learnMore="/kite-connect"
      />

      <ProductLeftSection
        imageUrl={versity_products}
        productName="Varsity"
        productDescription="One of India's largest and most trusted stock market education resources — free, open, and available to everyone."
        learnMore="/varsity"
      />

      <ProductUniverse />
    </div>
  );
};

export default ProductPage;
