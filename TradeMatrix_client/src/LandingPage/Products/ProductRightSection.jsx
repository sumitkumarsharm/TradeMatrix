import React from "react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductRightSection = ({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {productName}
          </h2>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-md">
            {productDescription}
          </p>

          {learnMore && (
            <Link
              to={learnMore}
              className="text-blue-600 font-medium text-base flex items-center gap-1 hover:underline"
            >
              Learn more <MoveRight size={16} />
            </Link>
          )}
        </div>

        {/* IMAGE RIGHT */}
        <div className="flex justify-center md:justify-end">
          <img
            src={imageUrl}
            alt={productName}
            className="w-full max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductRightSection;
