// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Brand & Mission */}
        <div>
          <h2 className="text-2xl font-bold text-[#2563EB] mb-2">
            Epress Media
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Empowering voices through digital media — fast, reliable, and
            community-driven news.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/" className="hover:text-[#2563EB] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-[#2563EB] transition">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-[#2563EB] transition">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Connect</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a
                href="mailto:info@epressmedia.com"
                className="hover:text-[#2563EB] transition"
              >
                info@epressmedia.com
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2563EB] transition">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2563EB] transition">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Epress Media. All rights reserved.
      </div>
    </footer>
  );
}
