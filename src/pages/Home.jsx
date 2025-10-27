// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 space-y-6">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Epress Media
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Epress Media is your platform for creative expression and digital
          storytelling. Manage your content effortlessly, share your voice, and
          connect with your audience — all from one simple dashboard.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <Button onClick={() => navigate("/login")} className="sm:w-auto w-full">
          Login
        </Button>
        <Button
          onClick={() => navigate("/register")}
          variant="outline"
          className="sm:w-auto w-full border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
        >
          Register
        </Button>
      </div>
    </section>
  );
}
