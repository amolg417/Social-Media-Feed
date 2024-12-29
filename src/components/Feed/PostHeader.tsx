import UserAvatar from "../Profile/UserAvatar";

const PostHeader = () => {
  return (
    <div className="w-full flex items-center gap-x-[3%] select-none">
      <div className="w-[14%]">
        <UserAvatar />
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-base text-[#000] font-[600] leading-5">
          Sakshi Agarwal
        </h4>
        <span className="text-[10px] text-[#414040]">2 hours ago</span>
      </div>
    </div>
  );
};

export default PostHeader;
