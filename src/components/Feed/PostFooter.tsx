import { useEffect, useState } from "react";
import LikeIcon from "./LikeIcon";
import { db } from "../../congif/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toggleLikePost } from "../../apiuils/post";
import toast from "react-hot-toast";
type PostFooterProps = {
  handleShareModal: (newVal: boolean) => void;
  post: {
    likesCount: number;
    userId: string;
    postId: string;
    likedBy: string[];
  };
};
const PostFooter = ({ handleShareModal, post }: PostFooterProps) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setLikes(post.likesCount || 0);
    setIsLiked(post.likedBy?.includes(post.userId) || false);
  }, [post.postId, post.userId]);

  const handleLikeToggle = async () => {
    try {
      setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
      setIsLiked(!isLiked);
      await toggleLikePost(post.postId, post.userId, isLiked);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <footer className="flex items-center justify-between">
      <div
        className="w-[50%] flex items-center gap-x-[4%]"
        onClick={handleLikeToggle}
      >
        <LikeIcon color={isLiked ? "red" : "white"} />
        <span className="text-sm text-[#000]">{likes}</span>
      </div>
      <button
        className="w-[25%] px-[2%] py-[1%] bg-[#edc6f172] rounded-full flex items-center justify-center gap-x-[5%]"
        onClick={() => handleShareModal(true)}
      >
        <img src="src\assets\Feed\svg\Share.svg" alt="" className="w-[18%]" />
        <span className="text-sm text-[#000] text-nowrap">Share</span>
      </button>
    </footer>
  );
};

export default PostFooter;
