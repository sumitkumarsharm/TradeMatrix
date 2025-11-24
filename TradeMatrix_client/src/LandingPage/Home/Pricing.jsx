import React from "react";
import img1 from "../../assets/pricing-eq.svg";
import img2 from "../../assets/other-trades.svg";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const Pricing = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Unbeatable pricing
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Flat fees, price transparency, and zero hidden charges.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center text-center gap-3">
            <img
              src={img1}
              alt="Free account opening illustration"
              className="w-24 md:w-28"
            />
            <p className="text-gray-600 text-sm md:text-base">
              Free account opening
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <img
              src={img1}
              alt="Free equity delivery feature"
              className="w-24 md:w-28"
            />
            <p className="text-gray-600 text-sm md:text-base">
              Free equity delivery & direct mutual funds
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <img
              src={img2}
              alt="Intraday and F&O low cost"
              className="w-24 md:w-28"
            />
            <p className="text-gray-600 text-sm md:text-base">
              Intraday & F&O ₹20 only
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-10 mt-10 text-center md:text-left">
        <Link
          to="/open-account"
          className="font-semibold flex md:inline-flex items-center justify-center gap-1 hover:text-blue-600 text-lg text-blue-700"
        >
          See pricing <MoveRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default Pricing;
