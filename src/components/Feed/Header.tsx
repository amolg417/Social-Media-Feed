import { useNavigate } from "react-router-dom";
import UserAvatar from "../Profile/UserAvatar";

const Header = () => {
  let navigate=useNavigate()
  return (
    <div className="w-full flex items-center gap-x-[3%] select-none">
      <div className="w-[15%]" onClick={()=>navigate("/profile")}>
        <UserAvatar />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[10px] text-[#a9a9a9]">Welcome Back,</span>
        <h4 className="text-base text-[#000] font-[600] leading-5">
          Sakshi Agarwal
        </h4>
      </div>
    </div>
  );
};

export default Header;
