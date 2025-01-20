import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../congif/firebase";

async function addRecord(record:Object) {
  try {
    console.log({record})
    const collectionRef = collection(db, "posts");
    const docRef = await addDoc(collectionRef, record);
    console.log("Document written with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding document:", e);
  }
}



export {addRecord}
