import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageNotFound = () => {
  const location = useLocation();
  const wrongPath = location.pathname + location.search; // Show query + path

  return (
    <section className="w-full h-[80vh] mt-24 flex flex-col justify-center items-center px-6 text-center bg-white">
      {/* Illustration */}
      <div className="max-w-sm mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7486/7486808.png"
          alt="404 Not Found Illustration"
          className="w-48 mx-auto animate-bounce"
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">404</h1>

      <p className="text-xl md:text-2xl font-semibold text-gray-700 mt-2">
        Page Not Found
      </p>

      <p className="text-gray-500 mt-4 max-w-md leading-relaxed">
        We couldn't find the page you were looking for:
      </p>

      {/* Show attempted route */}
      <p className="text-blue-600 font-mono text-sm md:text-base mt-1 bg-blue-50 px-3 py-1 rounded">
        {wrongPath}
      </p>

      <div className="flex gap-4 mt-8">
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
        >
          Go Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 transition"
        >
          Go Back
        </button>
      </div>
    </section>
  );
};

export default PageNotFound;
