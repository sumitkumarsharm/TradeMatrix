import React from "react";
import { Link } from "react-router-dom";

const ProductHero = () => {
  return (
    <div className="w-full mt-8">
      <div className="flex gap-5 flex-col justify-center items-center border-b pb-20 border-gray-200">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-snug">
          TradeMatrix Products
        </h1>
        <p className="text-gray-600 text-lg max-w-5xl leading-relaxed">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="flex items-center justify-center text-gray-600 gap-2">
          Check out our{" "}
          <Link className="text-blue-600 cursor-pointer">
            investment offerings →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProductHero;
