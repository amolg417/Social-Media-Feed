import MyPost from "./MyPost";
import { useNavigate } from "react-router-dom";
import CreatePostButton from "../CreatePost/CreatePostButton";
import { useGlobalInfo } from "../../context/GlobalInfo";
import { useCallback, useEffect, useState } from "react";
import { getPostsForUser } from "../../apiuils/post";
import toast from "react-hot-toast";

const ProfileInfo = () => {
  const navigate = useNavigate();
  const context = useGlobalInfo();
  const [userPosts, setUserPosts] = useState([]);

  const getUserPosts = useCallback(async () => {
    try {
      toast.loading("Posts Loading...");
      const postsData = await getPostsForUser(context?.user?.uid);
      toast.dismiss()
      setUserPosts(postsData);
    } catch (error) {
      toast.dismiss()
      toast.error("something went wrong, please refresh page!");
    }
  }, []);

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-end">
        <button
          className="px-[22%] py-[1.5%] border-[1px] border-[#0000007d] rounded-full font-[500]"
          onClick={() => {
            navigate("edit");
          }}
        >
          Edit Profile
        </button>
      </div>
      <div className="w-full py-[5%]">
        <h1 className="text-2xl font-[800] font-[Karla]">
          {context?.user?.name}
        </h1>
        <p className="text-sm text-[#000] text-wrap leading-4 mt-2 font-[Kumbh Sans] font-[400]">
          {context.user?.description}
        </p>
      </div>
      <div className="w-full h-[80%]">
        <h5 className="text-lg font-[Karla] font-[600] mb-[1%]">My Posts</h5>
        <div className="w-full h-[93%] flex justify-between flex-wrap gap-[4.5%] overflow-y-auto no-scrollbar relative">
          <CreatePostButton path="/post" />
          {userPosts.map((item) => (
            <MyPost
              key={item.id}
              description={item.description}
              likes={item.likes}
              postImg={item.media?.[0].url}
              type={item.media?.[0].type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
