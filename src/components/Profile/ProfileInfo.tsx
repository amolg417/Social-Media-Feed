import React from "react";
import MyPost from "./MyPost";

const ProfileInfo = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-end">
        <button className="px-[22%] py-[1.5%] border-[1px] border-[#0000007d] rounded-full font-[500]">
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
        <h5 className="text-lg font-[Karla] font-[600]">My Posts</h5>
        <div className="w-full h-[94%] flex justify-between flex-wrap gap-[5%] overflow-y-auto no-scrollbar">
          <MyPost />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
