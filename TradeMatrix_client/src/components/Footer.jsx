import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-16 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-5 gap-12 text-gray-700">
        {/* logo Section */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-blue-600">TradeMatrix</h2>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} TradeMatrix Pvt. Ltd.
            <br />
            All rights reserved.
          </p>

          {/* Social Media */}
          <div className="flex gap-4 text-lg">
            <Link>X</Link>
            <Link>FB</Link>
            <Link>IG</Link>
            <Link>IN</Link>
          </div>

          <div className="flex gap-4 text-lg">
            <span>YT</span>
            <span>WA</span>
            <span>TG</span>
          </div>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Account</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <Link>Open demat account</Link>
            <Link>Minor demat account</Link>
            <Link>NRI demat account</Link>
            <Link>Commodity</Link>
            <Link>Dematerialisation</Link>
            <Link>Fund transfer</Link>
            <Link>MTF</Link>
            <Link>Referral program</Link>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <Link>Contact us</Link>
            <Link>Support portal</Link>
            <Link>How to file a complaint?</Link>
            <Link>Status of your complaints</Link>
            <Link>Bulletin</Link>
            <Link>Circular</Link>
            <Link>Blogs</Link>
            <Link>Downloads</Link>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Quick links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <Link>Upcoming IPOs</Link>
            <Link>Brokerage charges</Link>
            <Link>Market holidays</Link>
            <Link>Economic calendar</Link>
            <Link>Calculators</Link>
            <Link>Markets</Link>
            <Link>Sectors</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
