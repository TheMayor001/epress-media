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
const EditorDashboard = () => (
  <h2 className="text-2xl font-semibold text-center mt-10">Editor Dashboard</h2>
);
const ReaderPage = () => (
  <h2 className="text-2xl font-semibold text-center mt-10">Reader Page</h2>
);

function App() {
  const { user } = useAuth();

  return (
    <MainLayout>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editor"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Editor"]}>
              <EditorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reader"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Editor", "Reader"]}>
              <ReaderPage />
            </ProtectedRoute>
          }
        />

        {/* Default route handling */}
        <Route
          path="*"
          element={<Navigate to={user ? "/reader" : "/login"} replace />}
        />
      </Routes>
    </MainLayout>
  );
}

export default App;
