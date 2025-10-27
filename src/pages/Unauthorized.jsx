// src/pages/Unauthorized.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import BrandLayout from "@/components/BrandLayout";
import Button from "@/components/ui/Button";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <BrandLayout title="Access Denied">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <p className="text-gray-600 text-lg">
          You don’t have permission to view this page. Please login with an
          account that has the required access.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Button
            onClick={() => navigate("/login")}
            className="sm:w-auto w-full"
          >
            Go to Login
          </Button>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="sm:w-auto w-full border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
          >
            Return Home
          </Button>
        </div>
      </div>
    </BrandLayout>
  );
}
