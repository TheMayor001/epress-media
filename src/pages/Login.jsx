// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-8 w-full max-w-md animate-fadeIn border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-[#2563EB] mb-6">
          Welcome Back
        </h1>

        {/* Email */}
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
        />

        {/* Password */}
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
        />

        <button className="w-full bg-[#2563EB] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Login
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-[#2563EB] font-semibold hover:underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
