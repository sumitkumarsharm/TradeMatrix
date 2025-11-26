import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  PlusCircle,
  UserCircle2,
  LassoSelect,
  IndianRupeeIcon,
  CircleArrowOutUpRight,
  EclipseIcon,
} from "lucide-react";

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
    icon: <PlusCircle />,
  },
  {
    title: "Your TeadeMatrix Account",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
    icon: <UserCircle2 />,
  },
  {
    title: "Kite",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
    icon: <LassoSelect />,
  },
  {
    title: "Funds",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
    icon: <IndianRupeeIcon />,
  },
  {
    title: "Console",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
    icon: <CircleArrowOutUpRight />,
  },
  {
    title: "Coin",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
    icon: <EclipseIcon />,
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
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="md:col-span-2 flex flex-col gap-4">
        {sections.map((sec, index) => (
          <div
            key={index}
            className="border bg-white transition-all duration-200 hover:scale-[1.01] hover:shadow-md cursor-pointer overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex items-center justify-between px-4 py-3 bg-whitetransition transition-all  duration-300"
            >
              <div className="flex items-center gap-2">
                <span className="text-blue-600">{sec.icon}</span>
                <span className="font-medium text-gray-900">{sec.title}</span>
              </div>

              {openSection === index ? (
                <ChevronUp size={20} className="text-blue-600" />
              ) : (
                <ChevronDown size={20} className="text-blue-600" />
              )}
            </button>

            <div
              className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${
                  openSection === index
                    ? "max-h-96 opacity-100 py-4"
                    : "max-h-0 opacity-0 py-0"
                }
              `}
            >
              <div className="px-8 bg-white border-t">
                <ul className="list-disc text-gray-700 flex flex-col gap-3 text-sm">
                  {sec.items.map((item, i) => (
                    <li key={i} className="hover:text-blue-600 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:col-span-1 flex flex-col gap-6">
        {/* Notices Box */}
        <div className="border-l-4 border-orange-500 bg-orange-50 px-4 py-4 shadow-sm">
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

        <div className="border  shadow-sm overflow-hidden">
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
