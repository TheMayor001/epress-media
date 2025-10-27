// src/components/ui/Button.jsx
import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const base =
    "w-full py-2 px-4 rounded-lg font-medium focus:outline-none transition";
  const styles = {
    primary: "bg-[#2563EB] hover:bg-blue-700 text-white shadow",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-700",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
