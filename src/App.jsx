// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";
import Posts from "./pages/admin/Posts";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-800">
      {/* Navbar */}
      <header className="shadow-sm z-10 sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <Navbar />
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-6 py-10 animate-fadeIn">
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* PROTECTED ROUTES */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["Admin", "Editor"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posts"
            element={
              <ProtectedRoute allowedRoles={["Admin", "Editor"]}>
                <Posts />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-5 text-center text-sm tracking-wide">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-500 font-medium">Epress Media</span> — All
          Rights Reserved
        </p>
      </footer>
    </div>
  );
}
