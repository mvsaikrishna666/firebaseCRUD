import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvcuvSZETqPYP6-z02gXL2FCIX3WfbVmQ",
  authDomain: "fir-tutorial-390e6.firebaseapp.com",
  projectId: "fir-tutorial-390e6",
  storageBucket: "fir-tutorial-390e6.appspot.com",
  messagingSenderId: "401741526614",
  appId: "1:401741526614:web:813851907adda3bd562df7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
