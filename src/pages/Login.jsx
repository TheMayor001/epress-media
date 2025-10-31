// src/pages/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useNavigate, Link } from "react-router-dom";
import BrandLayout from "@/components/BrandLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <BrandLayout title="Login to Your Account">
      <div className="w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="text-red-500 text-sm font-medium text-center">
              {error}
            </p>
          )}

          <Button
            type="submit"
            className="w-full bg-[#2563EB] hover:bg-blue-700 text-white"
          >
            Login
          </Button>
        </form>

        <p className="text-gray-600 mt-6 text-sm text-center">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#2563EB] font-medium hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </BrandLayout>
  );
}
