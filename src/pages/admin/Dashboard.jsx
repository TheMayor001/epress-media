// src/pages/admin/Dashboard.jsx
import React from "react";
import BrandLayout from "@/components/BrandLayout";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <BrandLayout title="Admin Dashboard">
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#2563EB] mb-2 animate-fadeIn">
            Hello, {user?.email || "User"}
          </h2>
          <p className="text-gray-600 text-lg">
            Welcome to your Epress Media dashboard. Manage posts, view
            analytics, and publish your stories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#2563EB] mb-2">
              Manage Posts
            </h3>
            <p className="text-gray-600 text-sm">
              Create, edit, and delete posts. Keep your content up to date.
            </p>
            <Button
              onClick={() => navigate("/posts")}
              className="mt-4 w-full sm:w-auto"
            >
              Go to Posts
            </Button>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#2563EB] mb-2">
              Analytics
            </h3>
            <p className="text-gray-600 text-sm">
              Track engagement and see how your content performs.
            </p>
            <Button
              variant="outline"
              className="mt-4 w-full sm:w-auto border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
            >
              View Reports
            </Button>
          </div>
        </div>
      </div>
    </BrandLayout>
  );
}
