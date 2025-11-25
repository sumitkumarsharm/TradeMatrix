import React from "react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductRightSection = ({
  imageUrl = "",
  productName = "Product title",
  productDescription = "",
  learnMore,
}) => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <article className="flex flex-col gap-6 text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {productName}
          </h2>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-md">
            {productDescription}
          </p>

          {learnMore && learnMore !== "#" && (
            <Link
              to={learnMore}
              className="text-blue-600 font-medium text-base flex items-center gap-1 hover:underline"
              aria-label={`Learn more about ${productName}`}
            >
              Learn more <MoveRight size={16} />
            </Link>
          )}
        </article>

        <div className="flex justify-center md:justify-end">
          <img
            src={imageUrl}
            alt={`${productName} illustration`}
            className="w-full max-w-xl object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductRightSection;
