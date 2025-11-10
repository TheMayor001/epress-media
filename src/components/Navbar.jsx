// src/components/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-gray-800">
          Epress Media
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-600 font-medium ${
                isActive ? "text-blue-600" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-600 font-medium ${
                isActive ? "text-blue-600" : ""
              }`
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
