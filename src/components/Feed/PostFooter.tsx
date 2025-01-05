import LikeIcon from "./LikeIcon";
type PostFooterProps = {
  handleShareModal: (newVal: boolean) => void;
};
const PostFooter = ({ handleShareModal }: PostFooterProps) => {
  return (
    <footer className="flex items-center justify-between">
      <div className="w-[50%] flex items-center gap-x-[4%]">
        <LikeIcon color={"red"} />
        <span className="text-sm text-[#000]">67</span>
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
