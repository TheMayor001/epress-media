import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const About = () => (
  <h2 className="text-2xl font-semibold text-center mt-10">About Us</h2>
);
const Contact = () => (
  <h2 className="text-2xl font-semibold text-center mt-10">Contact Page</h2>
);

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
