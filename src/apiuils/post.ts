import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../congif/firebase";

async function addRecord(record: Object) {
  try {
    console.log({ record });
    const collectionRef = collection(db, "posts");
    const docRef = await addDoc(collectionRef, record);
    console.log("Document written with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding document:", e);
  }
}

async function getAllPosts() {
  try {
    const collectionRef = collection(db, "posts");
    const querySnapshot = await getDocs(collectionRef);
    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Include document ID
      ...doc.data(), // Include document data
    }));
    console.log("Retrieved posts:", posts);
    return posts;
  } catch (e) {
    console.error("Error retrieving posts:", e);
    return [];
  }
}

export { addRecord, getAllPosts };
