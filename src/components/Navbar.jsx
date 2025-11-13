// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { user, userRole } = useAuth() || {};
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Epress Media
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-[#2563EB]">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-[#2563EB]">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#2563EB]">
            Contact
          </Link>

          {/* Auth Buttons */}
          {!user ? (
            <Link
              to="/login"
              className="ml-4 bg-[#2563EB] text-white px-4 py-2 rounded-md hover:bg-[#164abf] transition"
            >
              Login
            </Link>
          ) : (
            <>
              <span className="text-sm text-gray-500">({userRole || "Reader"})</span>
              <button
                onClick={handleLogout}
                className="ml-2 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
