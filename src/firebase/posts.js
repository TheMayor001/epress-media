// src/firebase/posts.js
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase";

// CREATE a new post
export const createPost = async (data) => {
  const postRef = await addDoc(collection(db, "posts"), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return postRef.id;
};

// READ all posts
export const getAllPosts = async () => {
  const snapshot = await getDocs(collection(db, "posts"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// READ one post
export const getPostById = async (id) => {
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

// UPDATE a post
export const updatePost = async (id, data) => {
  const docRef = doc(db, "posts", id);
  await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
};

// DELETE a post
export const deletePost = async (id) => {
  const docRef = doc(db, "posts", id);
  await deleteDoc(docRef);
};
