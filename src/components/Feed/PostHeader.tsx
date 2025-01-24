import { calculateTimePassed } from "../../utils/postUtils";
import UserAvatar from "../Profile/UserAvatar";


type postHeaderProps={
  userInfo:{
    name:string,
    profile_img:string
  } | any
  postCreatedTime:any
}
const PostHeader = ({userInfo,postCreatedTime}:postHeaderProps) => {
  return (
    <div className="w-full flex items-center gap-x-[3%] select-none">
      <div className="w-[14%]">
        <UserAvatar avatar={userInfo.profile_img}/>
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-base text-[#000] font-[600] leading-5">
          {userInfo.name}
        </h4>
        <span className="text-[10px] text-[#414040]">{calculateTimePassed(postCreatedTime)}</span>
      </div>
    </div>
  );
};

export default PostHeader;
