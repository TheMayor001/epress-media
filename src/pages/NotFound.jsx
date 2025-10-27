// src/pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import BrandLayout from "@/components/BrandLayout";
import Button from "@/components/ui/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <BrandLayout title="404 – Page Not Found">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <p className="text-gray-600 text-lg">
          Sorry, the page you’re looking for doesn’t exist or may have been
          moved.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Button onClick={() => navigate("/")} className="sm:w-auto w-full">
            Go Home
          </Button>
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="sm:w-auto w-full border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
          >
            Go Back
          </Button>
        </div>
      </div>
    </BrandLayout>
  );
}
