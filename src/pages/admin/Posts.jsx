// src/pages/admin/Posts.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  // Fetch posts from Firestore
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Posts</h1>
        <Button variant="default">
          <Plus className="w-4 h-4 mr-2 inline" />
          Add New Post
        </Button>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg shadow-sm p-4 hover:shadow-md transition"
            >
              <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-3">
                {post.content}
              </p>
              <div className="flex justify-end mt-4 gap-2">
                <Button variant="outline">
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button variant="outline">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
