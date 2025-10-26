import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // use relative path instead of alias if '@' isn’t configured

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  // If user is not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user role is not allowed
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // If access is allowed
  return children;
}
