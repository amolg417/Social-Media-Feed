import React, { useState } from "react";
import image from "../../assets/Post/svg/image.svg";
import video from "../../assets/Post/svg/video.svg";
import camera from "../../assets/Post/svg/camera.svg";
import folder from "../../assets/Post/svg/folder.svg";
const MediaSelection = () => {
  //   const handleFileType = ;
  const media = [
    {
      label: "Choose the file",
      img: folder,
      is_showing: true,
      onClickHandler: () => {
        setMediaItems((prev) => {
          return prev.map((item) =>
            item.label === "Choose the file"
              ? { ...item, is_showing: false }
              : { ...item, is_showing: true }
          );
        });
      },
    },
    {
      label: "Photos",
      img: image,
      is_showing: false,
      onClickHandler:()=>{}
    },
    {
      label: "Videos",
      img: video,
      is_showing: false,
      onClickHandler:()=>{}
    },
    {
      label: "Camera",
      img: camera,
      is_showing: true,
      onClickHandler:()=>{}
    },
  ];
  const [mediaItems, setMediaItems] = useState(media);
  return (
    <div className="w-full pt-[5%] flex flex-col gap-y-3">
      {mediaItems?.map((item) => {
        if (item.is_showing) {
          return (
            <div key={item.label} className="flex items-center gap-x-1 cursor-pointer" onClick={item.onClickHandler}>
              <img src={item.img} alt={item.label} className="w-[5%]" />
              <span className="text-sm text-[#000] font-[700]">
                {item.label}
              </span>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default MediaSelection;
