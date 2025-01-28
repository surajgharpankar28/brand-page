/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="logo hover:opacity-80 transition-opacity">
          <img src="/images/brand_logo.png" alt="Brand Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {["Menu", "Location", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
