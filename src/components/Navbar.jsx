import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ darkMode, onToggleTheme, wishlist }) => {
  const location = useLocation();
  const isWishlistPage = location.pathname === "/wishlist";
  const isAuthPage = location.pathname === "/auth";

  return (
    <nav
      className={`
        sticky top-0 z-50
        bg-white/20 dark:bg-gray-900/20
        backdrop-blur-md
        shadow-md
        transition-all duration-300
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide flex items-center gap-1"
        >
          <span className="text-white">Car</span>
          <span className="text-yellow-300">Go</span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center space-x-6 text-sm font-medium text-white">
          {!isWishlistPage && (
            <Link
              to="/wishlist"
              className="relative hover:text-yellow-300 transition"
            >
              Wishlist
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-[10px] px-2 py-[1px]">
                  {wishlist.length}
                </span>
              )}
            </Link>
          )}

          {!isAuthPage && (
            <Link
              to="/auth"
              className="border border-white/30 px-4 py-1.5 rounded hover:bg-white/10 transition"
            >
              Login / Sign Up
            </Link>
          )}

          <button
            onClick={onToggleTheme}
            className="border border-white px-3 py-1 rounded hover:bg-white/10 transition"
          >
            {darkMode ? "☀︎" : "⏾"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
