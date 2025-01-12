import { useNavigate } from "react-router-dom";
import plus from "../../assets/Profile/svg/Plus.svg";

type createPostButtonProps = {
  path: string;
};

const CreatePostButton = ({ path }: createPostButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path)}
      className="w-[12%] aspect-square flex items-center justify-center rounded-full bg-[#000] fixed bottom-[2.75rem] right-[1.75rem] z-30 shadow-2xl"
    >
      <img src={plus} alt="plus" className="w-[40%]" />
    </button>
  );
};

export default CreatePostButton;
