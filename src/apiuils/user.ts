import { db } from "../congif/firebase";
import { doc, serverTimestamp, runTransaction } from "firebase/firestore";
import Cookies from "js-cookie";
async function handleUser(user: any) {
  const userRef = doc(db, "Users", user.uid);

  try {
    const userData = await runTransaction(db, async (transaction) => {
      const docSnapshot = await transaction.get(userRef);
      if (!docSnapshot.exists()) {
        const newUser = {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          description:
            "Just someone who loves designing, sketching, and finding beauty in the little things 💕",
          profile_img: user.photoURL,
          cover_img: "",
          createdAt: serverTimestamp(),
        };

        transaction.set(userRef, newUser);

        return newUser;
      } else {
        return docSnapshot.data();
      }
    });

    Cookies.set("userInfo", JSON.stringify(userData), {
      expires: 7, 
      secure: true, 
      sameSite: "Lax", 
    });

    return userData;
  } catch (error) {
    console.error("Error handling user in Firestore:", error);
    throw error;
  }
}

export default handleUser;
