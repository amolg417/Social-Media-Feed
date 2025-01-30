import { useCallback, useEffect, useState } from "react";
import CreatePostButton from "../CreatePost/CreatePostButton";
import Post from "./Post";
import { getAllPosts } from "../../apiuils/post";
import toast from "react-hot-toast";

type FeedListProps = {
  handleShareModal: (newVal: boolean) => void;
};
const FeedList = ({ handleShareModal }: FeedListProps) => {
  const [posts, setPosts] = useState([]);
  const getPost = useCallback(async () => {
    try {
      toast.loading("Loading posts...")
      let Allposts = await getAllPosts();
      setPosts(Allposts);
      toast.dismiss()
    } catch (error) {
      toast.dismiss()
      toast.error("Failed to get posts")
    }
  }, []);
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="w-full h-[95%] pt-[7%]">
      <h3 className="text-2xl text-[#000] font-[700] mb-[4%]">Feeds</h3>
      <div className="w-full h-[93%] flex flex-col gap-y-[2%] overflow-y-auto no-scrollbar">
        {posts.map((item) => (
          <Post post={item} handleShareModal={handleShareModal} />
        ))}
      </div>
      <CreatePostButton path="/post" />
    </div>
  );
};

export default FeedList;
