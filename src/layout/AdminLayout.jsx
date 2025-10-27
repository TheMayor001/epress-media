// src/layout/AdminLayout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function AdminLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">E-Press Admin</h1>
        </div>
        <nav className="flex-1 p-4 space-y-3">
          <Link to="/admin" className="block text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>
          <Link
            to="/admin/posts"
            className="block text-gray-700 hover:text-blue-600"
          >
            Manage Posts
          </Link>
          <Link
            to="/admin/users"
            className="block text-gray-700 hover:text-blue-600"
          >
            Manage Users
          </Link>
          <Link
            to="/admin/settings"
            className="block text-gray-700 hover:text-blue-600"
          >
            Settings
          </Link>
        </nav>
        <div className="p-4 border-t">
          <button
            onClick={logout}
            className="w-full text-left text-red-600 hover:text-red-800"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Admin Panel</h2>
          <span className="text-gray-600">Logged in as {user?.displayName}</span>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
