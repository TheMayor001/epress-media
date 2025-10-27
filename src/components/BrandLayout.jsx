import React from "react";

export default function BrandLayout({ title, subtitle, children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-6 py-20 bg-gray-50 text-center">
      {/* Title Section */}
      {title && (
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{title}</h1>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
          {subtitle}
        </p>
      )}

      {/* Main Content */}
      <div className="w-full max-w-md space-y-5">{children}</div>
    </div>
  );
}
