//src/layout/MainLayout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">Epress Media</h1>

        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-blue-600 hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-blue-600 hover:underline">
            Contact
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </nav>
      </header>

      {/* Main content area */}
      <main className="flex-1 px-6 py-12">
        <Outlet />
      </main>
    </div>
  );
}
