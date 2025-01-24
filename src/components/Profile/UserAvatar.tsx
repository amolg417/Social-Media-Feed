import defaultuser from "../../assets/Profile/png/default_user.png";
import { useGlobalInfo } from "../../context/GlobalInfo";

type userAvatarProps={
  avatar:string
}
const UserAvatar = ({avatar}:userAvatarProps) => {
  const context = useGlobalInfo();
  console.log(avatar);
  return (
    <img
      src={avatar || defaultuser}
      alt="UserAvatar"
      className="w-full rounded-full object-cover aspect-square"
    />
  );
};

export default UserAvatar;
