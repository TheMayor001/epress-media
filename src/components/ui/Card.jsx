import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={
        "bg-white shadow rounded p-4 border border-gray-200 " + className
      }
    >
      {children}
    </div>
  );
}
