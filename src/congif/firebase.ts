import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBbj4cpMuUQ-oR380XfdbMAnHDFmqK3s0I",
  authDomain: "socialmediafeed-e0c5f.firebaseapp.com",
  projectId: "socialmediafeed-e0c5f",
  storageBucket: "socialmediafeed-e0c5f.firebasestorage.app",
  messagingSenderId: "946698942096",
  appId: "1:946698942096:web:76be81fb56b87a93e4ca15",
  measurementId: "G-63DDLEBYR3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage=getStorage(app)
