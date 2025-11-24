import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-16 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-5 gap-9 text-gray-700">
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
            <Link className="hover:text-blue-500">
              <Twitter />
            </Link>
            <Link className="hover:text-blue-500">
              <Facebook />
            </Link>
            <Link className="hover:text-blue-500">
              <Instagram />
            </Link>
            <Link className="hover:text-blue-500">
              <Linkedin />
            </Link>
          </div>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Account</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <Link className="hover:text-blue-500">Open demat account</Link>
            <Link className="hover:text-blue-500">Minor demat account</Link>
            <Link className="hover:text-blue-500">NRI demat account</Link>
            <Link className="hover:text-blue-500">Commodity</Link>
            <Link className="hover:text-blue-500">Dematerialisation</Link>
            <Link className="hover:text-blue-500">Fund transfer</Link>
            <Link className="hover:text-blue-500">MTF</Link>
            <Link className="hover:text-blue-500">Referral program</Link>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <Link className="hover:text-blue-500">Contact us</Link>
            <Link className="hover:text-blue-500">Support portal</Link>
            <Link className="hover:text-blue-500">
              How to file a complaint?
            </Link>
            <Link className="hover:text-blue-500">
              Status of your complaints
            </Link>
            <Link className="hover:text-blue-500">Bulletin</Link>
            <Link className="hover:text-blue-500">Circular</Link>
            <Link className="hover:text-blue-500">Blogs</Link>
            <Link className="hover:text-blue-500">Downloads</Link>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Quick links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <Link className="hover:text-blue-500">Upcoming IPOs</Link>
            <Link className="hover:text-blue-500">Brokerage charges</Link>
            <Link className="hover:text-blue-500">Market holidays</Link>
            <Link className="hover:text-blue-500">Economic calendar</Link>
            <Link className="hover:text-blue-500">Calculators</Link>
            <Link className="hover:text-blue-500">Markets</Link>
            <Link className="hover:text-blue-500">Sectors</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
