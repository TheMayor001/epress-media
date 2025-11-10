// src/components/BrandLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BrandLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BrandLayout;
