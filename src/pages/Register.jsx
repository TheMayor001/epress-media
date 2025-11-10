// src/pages/Register.jsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase";
import { useNavigate, Link } from "react-router-dom";
import BrandLayout from "@/components/BrandLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name });
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Failed to register. Try again.");
    }
  };

  return (
    <BrandLayout title="Create an Account">
      <div className="w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            type="text"
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            placeholder="Create a password"
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
            Register
          </Button>
        </form>

        <p className="text-gray-600 mt-6 text-sm text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#2563EB] font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </BrandLayout>
  );
}
