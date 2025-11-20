import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-10">
      <div>TradeMatrix</div>
      <div className="flex gap-14">
        <Link to="/about">About</Link>
        <Link to="/open-account">Signup</Link>
        <Link to="/support">Support</Link>
        <Link to="/pricing">pricing</Link>
        <Link to="/products">products</Link>
      </div>
    </nav>
  );
};

export default Navbar;
