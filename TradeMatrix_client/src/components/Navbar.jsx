import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600 tracking-wide">
          TradeMatrix
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-md font-medium">
          <Link className="hover:text-blue-600 transition" to="/open-account">
            Signup
          </Link>
          <Link className="hover:text-blue-600 transition" to="/about">
            About
          </Link>
          <Link className="hover:text-blue-600 transition" to="/products">
            Products
          </Link>
          <Link className="hover:text-blue-600 transition" to="/pricing">
            Pricing
          </Link>
          <Link className="hover:text-blue-600 transition" to="/support">
            Support
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 text-lg font-medium shadow-md border-t max-w-7xl mx-auto">
          <Link
            onClick={() => setOpen(false)}
            className="hover:text-blue-600"
            to="/open-account"
          >
            Signup
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="hover:text-blue-600"
            to="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="hover:text-blue-600"
            to="/products"
          >
            Products
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className="hover:text-blue-600"
            to="/pricing"
          >
            Pricing
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="hover:text-blue-600"
            to="/support"
          >
            Support
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
