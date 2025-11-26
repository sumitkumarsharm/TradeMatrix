import React from "react";
import { Search } from "lucide-react";

const SupportHero = () => {
  return (
    <section className="w-full bg-gray-50 border-b py-10 px-4 md:px-0 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Heading + Button */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-gray-900">
            Support Portal
          </h1>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
            My tickets
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
            className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportHero;
