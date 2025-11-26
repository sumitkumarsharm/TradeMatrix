import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  {
    title: "Account Opening",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    title: "Your Zerodha Account",
    items: [],
  },
  {
    title: "Kite",
    items: [],
  },
  {
    title: "Funds",
    items: [],
  },
  {
    title: "Console",
    items: [],
  },
  {
    title: "Coin",
    items: [],
  },
];

const notices = [
  "Rights Entitlements listing in November 2025",
  "Surveillance measure on scrips - November 2025",
];

const quickLinks = [
  "1. Track account opening",
  "2. Track segment activation",
  "3. Intraday margins",
  "4. Kite user manual",
  "5. Learn how to create a ticket",
];

const SupportCenter = () => {
  const [openSection, setOpenSection] = useState(0);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* LEFT SIDE */}
      <div className="md:col-span-2 flex flex-col gap-4">
        {sections.map((sec, index) => (
          <div key={index} className="border rounded-md shadow-sm">
            {/* Header */}
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-lg">◉</span>
                <span className="font-medium text-gray-900">{sec.title}</span>
              </div>

              {openSection === index ? (
                <ChevronUp size={20} className="text-gray-600" />
              ) : (
                <ChevronDown size={20} className="text-gray-600" />
              )}
            </button>

            {/* Expanded Items */}
            {openSection === index && sec.items.length > 0 && (
              <div className="px-8 py-4 bg-white border-t">
                <ul className="list-disc text-gray-700 flex flex-col gap-3 text-sm">
                  {sec.items.map((item, i) => (
                    <li key={i} className="hover:text-blue-600 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="md:col-span-1 flex flex-col gap-6">
        {/* Notices Box */}
        <div className="border-l-4 border-orange-500 bg-orange-50 px-4 py-4 rounded-sm shadow-sm">
          <ul className="list-disc ml-4 text-gray-800">
            {notices.map((notice, i) => (
              <li
                key={i}
                className="mb-2 hover:text-blue-600 cursor-pointer text-sm"
              >
                {notice}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="border rounded-md shadow-sm">
          <h3 className="px-4 py-2 bg-gray-100 font-medium text-gray-800 border-b">
            Quick links
          </h3>

          <ul className="flex flex-col">
            {quickLinks.map((link, i) => (
              <li
                key={i}
                className="px-4 py-2 border-b last:border-none text-sm hover:bg-gray-50 cursor-pointer hover:text-blue-600"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupportCenter;
