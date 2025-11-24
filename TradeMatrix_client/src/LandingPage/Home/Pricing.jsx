import React from "react";

// Replace these with your actual images
import img1 from "../../assets/pricing-eq.svg";
import img2 from "../../assets/other-trades.svg";
import { Link } from "react-router-dom";
import { ArrowBigRight, MoveRight } from "lucide-react";

const Pricing = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl md:text-3xl font-semibold text-gray-900">
            Unbeatable pricing
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center flex-col text-center">
            <img src={img1} alt="Free account opening" className="w-30 " />
            <p className="text-gray-600 text-xs">Free account opening</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src={img1}
              alt="Free equity delivery"
              className="w-30  object-contain"
            />
            <p className="text-gray-600 text-xs">
              Free equity delivery <br /> & direct mutual funds
            </p>
          </div>

          <div className="flex  flex-col items-center text-center">
            <img
              src={img2}
              alt="Intraday and F&O"
              className="w-30  object-contain"
            />
            <p className="text-gray-600 text-xs">
              Intraday & F&O <br /> ₹20 only
            </p>
          </div>
        </div>
      </div>
      <div className="px-10 w-full ">
        <Link
          className="font-semibold flex items-center gap-1 hover:text-blue-600 text-xl text-blue-700"
          to="/open-account"
        >
          <p>See pricing </p>
          <MoveRight />
        </Link>
      </div>
    </section>
  );
};

export default Pricing;
