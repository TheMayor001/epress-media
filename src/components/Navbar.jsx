import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Epress Media</h1>
      <ul className="flex gap-6">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">About</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
