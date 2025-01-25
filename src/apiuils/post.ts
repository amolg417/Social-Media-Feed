import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../congif/firebase";

async function addRecord(record: Object) {
  try {
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

    const posts = await Promise.all(
      querySnapshot.docs.map(async (docItem) => {
        const postData = docItem.data();
        const userPath = postData.user;

        const userId = userPath.split("/").pop();

        const userRef = doc(db, "Users", userId);
        const userSnap = await getDoc(userRef);

        return {
          id: docItem.id,
          ...postData,
          userDetails: userSnap.exists() ? userSnap.data() : null,
        };
      })
    );

    console.log("Retrieved posts with user details:", posts);
    return posts;
  } catch (e) {
    console.error("Error retrieving posts with user details:", e);
    return [];
  }
}

async function getPostsForUser(userId:string) {
  try {

    console.log(userId)
    const collectionRef = collection(db, "posts");

    // Query to filter posts by user
    const userPostsQuery = query(collectionRef, where("user", "==", `/Users/${userId}`));

    // Fetch all matching posts
    const querySnapshot = await getDocs(userPostsQuery);

    // Map the data to return the posts
    const posts = querySnapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...docItem.data(),
    }));

    console.log(`Retrieved posts for user ${userId}:`, posts);
    return posts;
  } catch (e) {
    console.error("Error retrieving posts for user:", e);
    return [];
  }
}

export { addRecord, getAllPosts, getPostsForUser };
