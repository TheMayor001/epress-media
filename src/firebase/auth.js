//src/firebase/auth.js
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export const registerUser = async (email, password, name) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  await updateProfile(user, { displayName: name });

  // Save user info + default role to Firestore
  await setDoc(doc(db, "users", user.uid), {
    name,
    email,
    role: "Reader", // default role
    createdAt: new Date(),
  });

  return user;
};
