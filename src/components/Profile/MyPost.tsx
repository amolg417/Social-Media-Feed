import React from "react";
import LikeIcon from "../Feed/LikeIcon";

const MyPost = () => {
  return (
    <div className="w-[47%] h-[60%] flex-shrink-0 flex-grow-0 relative">
      <img
        src="https://s3-alpha-sig.figma.com/img/3d74/8cb4/2f8d406fbe46243a0c8ca283df76b831?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MWO1FyKQ2tSzl0CUKKj7BC3G5P43gDZ7O634pzwoUG~gnF7U00cdB~FfKEwuHK-sktyL7W36-LDXjUcNMPm0ol2bN1~wRnYpyv9FO7nRooaKHCyraxK04vnJAaPjIJFra~--MXYrhtLg81Bec253Saht7LhHVmAhMrIC795QKITMR9A6kyAPqycAtLG2E2gJ3evkLyWMSa3zk6Lskq0~TFvdX~jJo9w3~jcFmG49UDkKj6R4zSlNTUnceG1VDzLUwBecwoR8r-loCbFCqOcpDXLA2sjj1q7Ge8tzEi19TIulONuJKZ6EY0uzE4AlLL4dQz~rlKrM0x1OAslES5dzeg__"
        alt="post-image"
        className="w-full object-contain rounded-md"
      />
      <div
        className="w-full h-full p-[6%] flex flex-col justify-end absolute bottom-0 left-0 z-10 rounded-md"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,248,248,0.01) 0%, rgba(0,0,0,0.5) 100%)",
        }}
      >
        <h5 className="text-sm text-[#fff] font-[500]">Working on a B2B...</h5>
        <div className="w-[50%] flex items-center gap-x-[4%]">
          <LikeIcon color={"white"} width="w-[20%]" />
          <span className="text-xs text-[#fff]">67</span>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
