// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const Navbar = () => {
  const { user, userRole } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Epress Media</h1>

      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>

        {/* Admin/Editor links */}
        {user && (userRole === "Admin" || userRole === "Editor") && (
          <>
            <li>
              <Link to="/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/posts" className="hover:text-gray-400">
                Posts
              </Link>
            </li>
          </>
        )}

        {/* Reader role (limited access) */}
        {user && userRole === "Reader" && (
          <li className="text-gray-400 italic">(Reader Mode)</li>
        )}

        {/* Auth buttons */}
        {user ? (
          <>
            <li className="text-sm text-gray-400">({userRole})</li>
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="hover:text-gray-400">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-gray-400">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
