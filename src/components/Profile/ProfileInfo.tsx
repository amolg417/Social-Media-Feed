import React from "react";
import MyPost from "./MyPost";
import plus from "../../assets/Profile/svg/Plus.svg";
import { useNavigate } from "react-router-dom";
const ProfileInfo = () => {
  let navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-end">
        <button
          className="px-[22%] py-[1.5%] border-[1px] border-[#0000007d] rounded-full font-[500]"
          onClick={() => {
            navigate("edit");
          }}
        >
          Edit Profile
        </button>
      </div>
      <div className="w-full py-[5%]">
        <h1 className="text-2xl font-[800] font-[Karla]">Sakshi Agarwal</h1>
        <p className="text-sm text-[#000] text-wrap leading-4 mt-2 font-[Kumbh Sans] font-[400]">
          Just someone who loves designing, sketching, and finding beauty in the
          little things 💕
        </p>
      </div>
      <div className="w-full h-[78%]">
        <h5 className="text-lg font-[Karla] font-[600] mb-[1%]">My Posts</h5>
        <div className="w-full h-[93%] flex justify-between flex-wrap gap-[4.5%] overflow-y-auto no-scrollbar relative">
          <button className="w-[12%] aspect-square flex items-center justify-center rounded-full bg-[#000] fixed bottom-[2.75rem] right-[1.75rem] z-30 shadow-2xl">
            <img src={plus} alt="plus" className="w-[40%]" />
          </button>
          <MyPost />
          <MyPost />
          <MyPost />
          <MyPost />
          <MyPost />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
