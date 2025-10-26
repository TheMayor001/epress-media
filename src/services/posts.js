//src/services/posts.js
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase/config";

// Reference to 'posts' collection
const postsCollection = collection(db, "posts");

// Add new post
export const createPost = async (postData) => {
  const docRef = await addDoc(postsCollection, {
    ...postData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
};

// Fetch all posts
export const fetchPosts = async () => {
  const snapshot = await getDocs(postsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Fetch single post by ID
export const fetchPostById = async (id) => {
  const docRef = doc(db, "posts", id);
  const postSnap = await getDoc(docRef);
  if (postSnap.exists()) return { id, ...postSnap.data() };
  else throw new Error("Post not found");
};

// Update post
export const updatePost = async (id, updates) => {
  const docRef = doc(db, "posts", id);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
};

// Delete post
export const deletePost = async (id) => {
  const docRef = doc(db, "posts", id);
  await deleteDoc(docRef);
};
