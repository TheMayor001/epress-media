// src/pages/admin/Posts.jsx
import React, { useState } from "react";
import BrandLayout from "@/components/BrandLayout";
import Button from "@/components/ui/Button";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";

export default function Posts() {
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState([
    { id: 1, title: "Welcome to Epress Media", date: "2025-10-20" },
    { id: 2, title: "Building with React & Firebase", date: "2025-10-19" },
  ]); // Removed setPosts until needed

  const handleAddPost = () => alert("Add Post Clicked");
  const handleEdit = (id) => alert(`Edit Post ${id}`);
  const handleDelete = (id) => alert(`Delete Post ${id}`);

  return (
    <BrandLayout title="Manage Posts">
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-[#2563EB]">Your Posts</h2>
          <Button
            onClick={handleAddPost}
            className="flex items-center gap-2 bg-[#2563EB] text-white"
          >
            <PlusCircle className="w-5 h-5" />
            New Post
          </Button>
        </div>

        <div className="bg-white rounded-xl shadow-sm divide-y">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex justify-between items-center px-6 py-4 hover:bg-gray-50 transition"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{post.title}</h3>
                <p className="text-sm text-gray-500">
                  Published on {post.date}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(post.id)}
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-600 hover:text-red-800 transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrandLayout>
  );
}
