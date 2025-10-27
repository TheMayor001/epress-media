//src/layout/MainLayout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-gray-800">Epress Media</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-blue-600 hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-blue-600 hover:underline">
            Contact
          </Link>
        </nav>
      </header>

      {/* Main content area */}
      <main className="flex-1 px-6 py-12 bg-gray-50">
        <Outlet /> {/* This renders page content like Home, Login, etc. */}
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 border-t">
        © 2025 Epress Media. All rights reserved.
      </footer>
    </div>
  );
}
