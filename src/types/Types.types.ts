import firebase from "firebase/compat/app";

export type UserType = {
  uid?: string;
  name?: string;
  email?: string;
  description:string,
  profile_img:string,
  cover_img:string,
  createdAt:string | firebase.firestore.FieldValue
};
export type GlobalContextType = {
  user: UserType;
  updateUser: (newValue: Partial<UserType>) => void;
};
