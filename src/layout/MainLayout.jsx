import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-blue-600">Epress Media</h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-6 py-10">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600 border-t">
        © {new Date().getFullYear()} Epress Media. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
