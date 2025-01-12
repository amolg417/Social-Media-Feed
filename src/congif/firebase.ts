// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbj4cpMuUQ-oR380XfdbMAnHDFmqK3s0I",
  authDomain: "socialmediafeed-e0c5f.firebaseapp.com",
  projectId: "socialmediafeed-e0c5f",
  storageBucket: "socialmediafeed-e0c5f.firebasestorage.app",
  messagingSenderId: "946698942096",
  appId: "1:946698942096:web:76be81fb56b87a93e4ca15",
  measurementId: "G-63DDLEBYR3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log({app})
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
