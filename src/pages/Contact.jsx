import React from "react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto text-center py-16">
      <h1 className="text-4xl font-bold text-[#2563EB] mb-4">Contact Us</h1>
      <p className="text-gray-600 text-lg mb-8">
        Have a story, tip, or inquiry? Reach out to our editorial team.
      </p>
      <a
        href="mailto:info@epressmedia.co.ke"
        className="bg-[#2563EB] text-white px-6 py-3 rounded-md font-medium hover:bg-[#164abf] transition"
      >
        Email Us
      </a>
    </div>
  );
}
