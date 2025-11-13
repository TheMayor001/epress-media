// src/components/BrandLayout.jsx
import React from "react";

const BrandLayout = ({ children, title }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {title && (
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-semibold text-[#2563EB]">{title}</h1>
        </header>
      )}
      <section className="bg-white rounded-lg shadow-sm p-6">{children}</section>
    </div>
  );
};

export default BrandLayout;
