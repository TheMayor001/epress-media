import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <p className="text-sm">© {new Date().getFullYear()} Epress Media. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
