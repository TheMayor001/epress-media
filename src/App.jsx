// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import BrandLayout from "./components/BrandLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";
import Posts from "./pages/admin/Posts";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* Routes that share the BrandLayout (navbar + footer) */}
      <Route element={<BrandLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Route>

      {/* Protected admin routes (also use BrandLayout automatically) */}
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
  );
}
