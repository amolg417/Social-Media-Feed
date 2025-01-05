import React from "react";

const EditProfile = () => {
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
          />
        </div>
      </div>
      <button className="w-full py-[3%] bg-[#000] rounded-full text-[#fff] text-base font-[500]">SAVE</button>
    </div>
  );
};

export default EditProfile;
