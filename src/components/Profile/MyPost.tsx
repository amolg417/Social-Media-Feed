import React from "react";
import LikeIcon from "../Feed/LikeIcon";

const MyPost = () => {
  return (
    <div className="w-[47%] h-[60%] flex-shrink-0 flex-grow-0 relative">
      <img
        src="https://s3-alpha-sig.figma.com/img/5760/ca9b/faaae9e15a4924b85a62195848d258eb?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dRMW-yfRgtwI51CcXC0jMUmaS4nUCxxsU2wULrMQ0h25rLJD56VZxdRcKSUzLpyTAyYsgXIk4t1TBIeF8pdHVRVOMkSW4y-yHOBizZJSRXSdwUL~SdZPmh8hamJYL~CpfXJ3zEUoAF~SmKqAT85zFX6yw65ieSCSfe2QXm9IlNaTs9NmNllfSdBmHI19rAUPjK4gvguzgxv0AYa19L~s0fCP~WeQq7ANXdTpcl1vWVBhzoTbocU6~b2ZoKFpX6c2ofqIZKyHs4gvcaLwgSvRZpox3QDEKUAysEwwV61htrWQyIzlIM6wtu9a46LtCFVnb~9feQ-IJ2In82jnONsEJQ__"
        alt="post-image"
        className="w-full h-webkit-fill object-cover rounded-md"
      />
      <div
        className="w-full h-[95%] pl-[6%] pb-[6%] flex flex-col justify-end absolute bottom-0 left-0 z-10 rounded-md box-border"
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
