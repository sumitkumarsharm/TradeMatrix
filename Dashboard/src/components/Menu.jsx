import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/kite-logo.svg";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const menuItems = [
    { label: "Dashboard", to: "/" },
    { label: "Orders", to: "/orders" },
    { label: "Holdings", to: "/holdings" },
    { label: "Positions", to: "/positions" },
    { label: "Funds", to: "/funds" },
    { label: "Apps", to: "/apps" },
  ];

  return (
    <div className="relative w-full">
      <div className="hidden md:flex w-full  justify-between items-center gap-10">
        <img src={logo} className="w-10" />
        <div className="flex gap-10 items-center">
          <ul className="flex gap-6 text-gray-700">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} onClick={() => setSelectedMenu(index)}>
                  <p
                    className={`${
                      selectedMenu === index
                        ? "font-semibold text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-black"
                    } pb-1 transition`}
                  >
                    {item.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          {/* PROFILE */}
          <div
            className="flex items-center gap-2 cursor-pointer ml-4 relative"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
              ZU
            </div>
            <p className="font-medium">USERID</p>

            {profileOpen && (
              <div className="absolute right-0 top-10 bg-white rounded shadow-lg py-2 w-40 z-10">
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex md:hidden justify-between items-center gap-3">
        <img src={logo} className="w-10" />
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-12 right-0 bg-white w-56 shadow-lg rounded p-4 z-50 animate-slideDown">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              onClick={() => {
                setMobileOpen(false);
                setSelectedMenu(index);
              }}
            >
              <p
                className={`py-2 border-b text-gray-700 ${
                  selectedMenu === index ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {item.label}
              </p>
            </Link>
          ))}

          <div
            className="flex items-center gap-2 mt-4 cursor-pointer"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
              ZU
            </div>
            <p className="font-medium">USERID</p>
          </div>

          {profileOpen && (
            <div className="mt-2 bg-gray-50 border rounded p-2">
              <p className="py-1 hover:bg-gray-100">Profile</p>
              <p className="py-1 hover:bg-gray-100">Logout</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
