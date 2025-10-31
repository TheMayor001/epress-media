// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b shadow-sm">
      {/* Brand */}
      <Link
        to="/"
        className="text-xl font-semibold text-[#2563EB] hover:opacity-90"
      >
        Epress Media
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-gray-700 font-medium">
        <Link
          to="/"
          className="hover:text-[#2563EB] transition-colors duration-200"
        >
          Home
        </Link>

        {!token && (
          <Link
            to="/login"
            className="hover:text-[#2563EB] transition-colors duration-200"
          >
            Login
          </Link>
        )}

        {token && (
          <>
            <Link
              to="/dashboard"
              className="hover:text-[#2563EB] transition-colors duration-200"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="text-[#2563EB] border border-[#2563EB] px-3 py-1 rounded-md hover:bg-[#2563EB] hover:text-white transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
