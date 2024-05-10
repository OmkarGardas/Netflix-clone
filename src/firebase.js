// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn1Iihiit-Bk3PJGdKBT9ZePTJfY69eJE",
  authDomain: "netflix-clone-b9513.firebaseapp.com",
  projectId: "netflix-clone-b9513",
  storageBucket: "netflix-clone-b9513.appspot.com",
  messagingSenderId: "121925395597",
  appId: "1:121925395597:web:8154f5323cc1a1820a6ec4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProivder: "local",
      email,
    });
  } catch (err) {
    console.log(err);
    toast.error(err.code);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
    toast.error(err.code);
  }
};

const logout = async () => {
  signOut(auth);
};

export { auth, db, login, logout, signup };
