import React from "react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductLeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <section className="w-full py-20 mx-auto bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-28 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={imageUrl}
            alt={productName}
            className="w-full max-w-xl object-contain"
          />
        </div>

        <div className="flex flex-col gap-6 text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {productName}
          </h2>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-md">
            {productDescription}
          </p>

          <div className="flex gap-6 text-sm font-medium">
            {tryDemo && (
              <Link
                to={tryDemo}
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                Try demo <MoveRight size={16} />
              </Link>
            )}

            {learnMore && (
              <Link
                to={learnMore}
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                Learn more <MoveRight size={16} />
              </Link>
            )}
          </div>

          <div className="flex gap-4 mt-4 flex-wrap">
            {googlePlay && (
              <a href={googlePlay} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
            )}

            {appStore && (
              <a href={appStore} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/67/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-10"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLeftSection;
