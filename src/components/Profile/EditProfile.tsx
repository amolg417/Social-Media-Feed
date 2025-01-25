import { useCallback, useState } from "react";
import FooterButton from "./FooterButton";
import { useGlobalInfo } from "../../context/GlobalInfo";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../congif/firebase";
import toast from "react-hot-toast";

const EditProfile = () => {
  const context = useGlobalInfo();
  const [userInfo, setUserInfo] = useState({
    name: context.user.name || "",
    description: context.user.description || "",
  });

  const updateUserInfo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUserInfo((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const updateUserInformation = useCallback(async () => {
    try {
      
      toast.loading("Updating user details");
      const userRef = doc(db, "Users", context.user.uid); // Reference to the specific user document
      const updatedUserDetails = {
        ...context.user,
        name: userInfo.name,
        description: userInfo.description,
      };
      await updateDoc(userRef, updatedUserDetails);
      context.updateUser(updatedUserDetails)
      toast.dismiss()
      toast.success("User details updated successfully!");
    } catch (error: any) {
      toast.dismiss()
      toast.error("Failed to update user details");
    }
  }, [context.user,userInfo]);

  return (
    <div className="w-full h-full flex flex-col justify-between pt-[17%] pb-[10%]">
      <div className="w-full">
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-sm text-[#000] font-[400] mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="border-b outline-none text-sm font-[700] text-[#000]"
            name="name"
            value={userInfo.name}
            onChange={updateUserInfo}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="bio" className="text-sm text-[#000] font-[400] mb-2">
            Bio
          </label>
          <input
            id="bio"
            type="text"
            className="border-b outline-none text-sm font-[700] text-[#000]"
            name="description"
            value={userInfo.description}
            onChange={updateUserInfo}
          />
        </div>
      </div>
      <FooterButton label="SAVE" onClickHandler={updateUserInformation} />
    </div>
  );
};

export default EditProfile;
