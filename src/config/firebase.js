import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDJDd3jjv3tGReb_GnAAkrEwAWq8qkv4UE",
  authDomain: "reactfbproject-e9d05.firebaseapp.com",
  databaseURL: "https://reactfbproject-e9d05-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactfbproject-e9d05",
  storageBucket: "reactfbproject-e9d05.appspot.com",
  messagingSenderId: "417475242458",
  appId: "1:417475242458:web:dfe808f836fade084c78e3",
  measurementId: "G-TD2X4QRFP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
