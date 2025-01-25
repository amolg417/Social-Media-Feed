import EditPencil from "../components/Profile/EditPencil";
import UserAvatar from "../components/Profile/UserAvatar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import leftArrow from "../assets/Profile/svg/SmLeft.svg";
import defaultcover from "../assets/Profile/png/defaultcover.png"
import { useGlobalInfo } from "../context/GlobalInfo";
const Profile = () => {
  const context = useGlobalInfo()
  const location = useLocation();
  const navigate=useNavigate()
  let editpage = <></>;
  let editpencil = <></>;
  let profileEdit = <></>;
  switch (location.pathname) {
    case "/profile/edit":
      editpage = (
        <span className="text-xl text-[#0000005d] text-nowrap font-[700]">
          Edit Profile
        </span>
      );
      editpencil = (
        <div className="w-6 absolute right-3 bottom-3">
          <EditPencil editType="cover" />
        </div>
      );
      profileEdit = (
        <div className="w-8 absolute right-0 bottom-0">
          <EditPencil editType="profile" />
        </div>
      );
      break;

    default:
      break;
  }
  return (
    <div className="w-full h-full">
      <div className="w-full h-[20%] relative">
        <img
          src={context?.user.cover_img||defaultcover}
          alt="cover-image"
          className="w-full h-full object-cover rounded-bl-lg rounded-br-lg"
        />
        <div className="h-[10%] flex items-center gap-x-[4%] absolute top-5 left-3 z-100">
          <img src={leftArrow} alt="left-arrow" className="invert" onClick={()=>navigate(location.pathname==="/profile"?"/feed":"/profile")} />
          {editpage}
        </div>
        {editpencil}
        <div className="w-[25%] absolute bottom-[-30%] left-4">
          <UserAvatar avatar={context.user.profile_img} />
          {profileEdit}
        </div>
      </div>
      <div className="w-full h-[80%] p-[4%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
