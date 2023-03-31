import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9OwqTK94hKSrzMGAR_5CEBBSHuf6j8DE",
  authDomain: "storage-benjawan.firebaseapp.com",
  projectId: "storage-benjawan",
  storageBucket: "storage-benjawan.appspot.com",
  messagingSenderId: "905845137819",
  appId: "1:905845137819:web:65d652f98b9daa5b9c413e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
export const db = getFirestore(app);
export const storage = getStorage(app);
