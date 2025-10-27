// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-[#2563EB] tracking-tight"
        >
          Epress Media
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-[#2563EB] font-medium transition"
          >
            Home
          </Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-[#2563EB] font-medium transition"
              >
                Dashboard
              </Link>
              <Button
                onClick={handleLogout}
                className="bg-[#2563EB] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-[#2563EB] font-medium transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-700 hover:text-[#2563EB] font-medium transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
