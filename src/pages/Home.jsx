// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import BrandLayout from "@/components/BrandLayout";
import Button from "@/components/ui/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <BrandLayout title="Welcome to Epress Media">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <p className="text-gray-600 text-lg leading-relaxed">
          Epress Media is your platform for creative expression and digital
          storytelling. Manage your content effortlessly, share your voice, and
          connect with your audience — all from one simple dashboard.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Button
            onClick={() => navigate("/login")}
            className="sm:w-auto w-full"
          >
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
      </div>
    </BrandLayout>
  );
}
