// src/components/BrandLayout.jsx
import React from "react";

export default function BrandLayout({ title, children }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <div className="max-w-md w-full bg-white shadow-md rounded-2xl p-8 border border-gray-100">
        {title && (
          <h1 className="text-2xl font-semibold text-center mb-6 text-[#2563EB]">
            {title}
          </h1>
        )}
        {children}
      </div>
      <footer className="mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Sophon Tech Solutions
      </footer>
    </div>
  );
}
