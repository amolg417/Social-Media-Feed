import defaultuser from "../../assets/Profile/png/default_user.png";
import { useGlobalInfo } from "../../context/GlobalInfo";
const UserAvatar = () => {
  const context = useGlobalInfo();
  console.log(context?.user?.profile_img);
  return (
    <img
      src={context?.user?.profile_img || defaultuser}
      alt="UserAvatar"
      className="w-full rounded-full object-cover aspect-square"
    />
  );
};

export default UserAvatar;
