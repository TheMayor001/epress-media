// src/pages/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useNavigate, Link } from "react-router-dom";
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
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-sm rounded-2xl p-8 border border-gray-100">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login to Your Account
        </h1>

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
            className="w-full bg-[#2563EB] hover:bg-blue-700 text-white transition-all duration-150"
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
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
}
