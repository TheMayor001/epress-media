import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

const About = () => (
  <h2 className="text-2xl font-semibold text-center mt-10">About Us</h2>
);
const Contact = () => (
  <h2 className="text-2xl font-semibold text-center mt-10">Contact Page</h2>
);
const AdminDashboard = () => (
  <h2 className="text-2xl font-semibold text-center mt-10">Admin Dashboard</h2>
);

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Main layout wrapper */}
      <Route path="/" element={<MainLayout />}>
        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* Protected routes */}
        <Route
          path="admin"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Default fallback */}
        <Route
          path="*"
          element={<Navigate to={user ? "/admin" : "/login"} replace />}
        />
      </Route>
    </Routes>
  );
}

export default App;
