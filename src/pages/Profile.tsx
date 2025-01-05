import React from "react";
import EditPencil from "../components/Profile/EditPencil";
import UserAvatar from "../components/Profile/UserAvatar";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[20%] relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/d4b7/bb5d/bd8b3943a763e1d2e13b607efc1e224e?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y9HApfL~MvzVs4nkSA-RHtgV1wS3KiqXZEWReB0DK8nlfEL-2wR34VPMgWZRvkUlr8~sDHENtpS0tsy2Tc2E9cZNXvOMEHTWY3-6sePNZ4E9Pq6CSukdzT1-P~Ar6gkeI-VC23yvUAeVsHow2DVW~QEsKVMJmeP2pDGe1mCYMIEJT5bjGhCDthTSMWsqGX19BjoAcRPePGPCr2w8wP32emgZTYb8Jz8tuHfku-MNTCnqRil4jN7xsWwajOZBK-XezyoRKtY7947RMrunVAfwQvjEZ467-CqBcAu8aov8e-yYM8AlQ-anCc~a5exSsdwxXfSt~QkghUaTdCMCmYjt3Q__"
          alt="cover-image"
          className="w-full h-full object-cover rounded-bl-lg rounded-br-lg"
        />
        <div className="flex items-center gap-x-[4%] absolute top-5 left-3 z-100">
          <img
            src="src\assets\Profile\svg\SmLeft.svg"
            alt="left-arrow"
            className="w-[22%]"
          />
          <span className="text-xl text-[#fff] text-nowrap font-[700]">
            Edit Profile
          </span>
        </div>
        <div className="w-6 absolute right-3 bottom-3">
          <EditPencil />
        </div>
        <div className="w-[25%] absolute bottom-[-30%] left-4">
          <UserAvatar />
          <div className="w-8 absolute right-0 bottom-0">
            <EditPencil />
          </div>
        </div>
      </div>
      <div className="w-full h-[80%] p-[4%]">
        <Outlet/>
      </div>
    </div>
  );
};

export default Profile;
