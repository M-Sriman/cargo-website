import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-12 bg-white/10 dark:bg-gray-800/30 backdrop-blur-md border-t border-white/20 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {/* Brand Column */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-cyan-300">CarGo</h3>
          <p className="opacity-80">
            Your trusted destination for exploring and comparing the best cars in the market. Enjoy a seamless and interactive experience.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="font-semibold mb-2 text-cyan-200">Explore</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline hover:text-cyan-400">Home</Link></li>
            <li><Link to="/wishlist" className="hover:underline hover:text-cyan-400">Wishlist</Link></li>
            <li><Link to="/buy/1" className="hover:underline hover:text-cyan-400">Buy a Car</Link></li>
          </ul>
        </div>

        {/* Filters (Fake navs for now) */}
        <div>
          <h4 className="font-semibold mb-2 text-cyan-200">Browse by</h4>
          <ul className="space-y-1">
            <li><span className="cursor-pointer hover:underline hover:text-cyan-400">Fuel Type</span></li>
            <li><span className="cursor-pointer hover:underline hover:text-cyan-400">Seating Capacity</span></li>
            <li><span className="cursor-pointer hover:underline hover:text-cyan-400">Price Range</span></li>
          </ul>
        </div>

        {/* About / Contact */}
        <div>
          <h4 className="font-semibold mb-2 text-cyan-200">About</h4>
          <ul className="space-y-1">
            <li><span className="cursor-pointer hover:underline hover:text-cyan-400">About Us</span></li>
            <li><span className="cursor-pointer hover:underline hover:text-cyan-400">Terms & Conditions</span></li>
            <li><span className="cursor-pointer hover:underline hover:text-cyan-400">Privacy Policy</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} CarGo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
