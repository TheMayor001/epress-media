//src
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-8 text-center text-gray-700 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col items-center space-y-2">
          <p className="font-semibold text-blue-600 text-lg">Epress Media</p>
          <p className="text-gray-600 text-sm">
            Empowering voices through digital media — fast, reliable, and
            community-driven news.
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center mt-3 space-x-4 text-sm">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/login" className="hover:text-blue-600">Login</a>
          <a href="/register" className="hover:text-blue-600">Register</a>
        </div>

        {/* Copyright */}
        <div className="border-t mt-3 pt-3 text-gray-500 text-xs">
          © {new Date().getFullYear()} Epress Media | Powered by{" "}
          <span className="text-blue-600 font-medium">Sophon Tech Solutions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
