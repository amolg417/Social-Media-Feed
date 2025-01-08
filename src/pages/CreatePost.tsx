import leftArrow from "../assets/Post/svg/BlackLefttArraw.svg";
import CameraSection from "../components/CreatePost/CameraSection";
import MediaSelection from "../components/CreatePost/MediaSelection";
import SelectedMediaCarousel from "../components/CreatePost/SelectedMediaCarousel";
import FooterButton from "../components/Profile/FooterButton";

const CreatePost = () => {
  return (
    <div className="w-full h-full px-[4%] py-[7%] relative">
      <div className="w-full flex items-center gap-x-[5%] mb-4">
        <img
          src={leftArrow}
          alt="leftArrow"
          className="w-[5%] cursor-pointer"
        />
        <span className="font-[800] text-[#000] text-xl">New Post</span>
      </div>
      <SelectedMediaCarousel />
      <div className="w-full">
        <textarea
          name="description"
          id="description"
          className="w-full bg-[#D9D9D99C] text-sm py-[5%] px-[2%] rounded-md resize-none outline-none"
          placeholder="What’s on your mind?"
          rows={11}
        ></textarea>
      </div>
      {/* <MediaSelection/> */}
      <div className="w-[92%] fixed bottom-[5%] left-[4%]">
        <FooterButton label="CREATE" />
      </div>
    </div>
  );
};

export default CreatePost;
