// src/pages/NotFound.jsx
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mb-6">Page Not Found</p>
      <a href="/" className="text-blue-600 hover:underline">
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
