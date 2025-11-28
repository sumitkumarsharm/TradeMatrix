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
    <div className="relative w-full md:w-auto">
      {/* Desktop Menu */}
      <div className=" justify-between flex items-center gap-8">
        <div className="flex justify-between gap-10 w-full">
          <img src={logo} className="w-10" />
          <div className="flex">
            <ul className="flex gap-6 text-gray-700">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.to} onClick={() => setSelectedMenu(index)}>
                    <p
                      className={`${
                        selectedMenu === index
                          ? "font-semibold text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600 hover:text-black"
                      } pb-1`}
                    >
                      {item.label}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Profile */}
            <div
              className="flex items-center gap-2 cursor-pointer ml-4"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
                ZU
              </div>
              <p className="font-medium">USERID</p>
            </div>
          </div>
        </div>

        {/* Profile Dropdown */}
        {profileOpen && (
          <div className="absolute right-0 mt-12 bg-white rounded shadow-lg py-2 w-40">
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Profile
            </p>
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</p>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden items-center gap-3">
        <img src={logo} className="w-10" alt="kite-logo" />
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Slide Menu */}
      {mobileOpen && (
        <div className="absolute top-14 right-0 bg-white w-48 shadow-lg rounded p-4 z-50">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.to} onClick={() => setMobileOpen(false)}>
              <p className="py-2 border-b text-gray-700">{item.label}</p>
            </Link>
          ))}

          {/* Profile on Mobile */}
          <div
            className="flex items-center gap-2 mt-4 pt-3 border-t cursor-pointer"
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
