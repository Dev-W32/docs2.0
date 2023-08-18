import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

let provider = new GoogleAuthProvider();

 export const loginWithGoogle = () => {
  signInWithPopup(auth, provider);
};

export const logout = () => {
    // 1. Sign out on the native layer
    // 1. Sign out on the web layer
      signOut(auth);
      
  };

