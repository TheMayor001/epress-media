// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import BrandLayout from "@/components/BrandLayout";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <BrandLayout title="Welcome to HomeSphere">
      <p className="text-center text-gray-600 mb-6">
        Manage your rental properties, tenants, and payments with ease.
        <br />A smart property management solution by{" "}
        <span className="text-[#2563EB] font-semibold">
          Sophon Tech Solutions
        </span>
        .
      </p>

      <div className="flex flex-col space-y-3">
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/register">
          <Button variant="secondary">Create Account</Button>
        </Link>
      </div>
    </BrandLayout>
  );
}
