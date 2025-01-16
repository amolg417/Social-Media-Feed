import { useCallback, useState } from "react";
import leftArrow from "../assets/Post/svg/BlackLefttArraw.svg";
import CameraSection from "../components/CreatePost/CameraSection";
// import SelectedMediaCarousel from "../components/CreatePost/SelectedMediaCarousel";
import FooterButton from "../components/Profile/FooterButton";
import MediaSelection from "../components/CreatePost/MediaSelection";
import { useNavigate } from "react-router-dom";
import SelectedMediaCarousel from "../components/CreatePost/SelectedMediaCarousel";

const CreatePost = () => {
  const [media, setMedia] = useState<File[]>([]);
  const [useCamera, setUseCamera] = useState(false);
  const navigate = useNavigate();
  const toggleCamera = useCallback(() => {
    setUseCamera((prev) => !prev);
  }, []);

  function handleMedia(files: File[]) {
    console.log(files);
    const selectedfiles = Array.from(files || []);
    if (files.length) {
      setMedia((prev) => {
        const existingFiles = new Set(
          prev.map((file) => file.name + file.size)
        );
        const newFiles = selectedfiles.filter(
          (file) => !existingFiles.has(file.name + file.size)
        );
        return [...prev, ...newFiles];
      });
    } else {
      console.log("No files have been selected");
    }
  }
  return (
    <div className="w-full h-full px-[4%] py-[7%] relative">
      {useCamera ? <CameraSection toggleCamera={toggleCamera} /> : <></>}
      <div className="w-full flex items-center gap-x-[5%] mb-4">
        <img
          src={leftArrow}
          alt="leftArrow"
          className="w-[5%] cursor-pointer"
          onClick={() => navigate("/feed")}
        />
        <span className="font-[800] text-[#000] text-xl">New Post</span>
      </div>
      {media.length ? <SelectedMediaCarousel media={media} /> : <></>}
      <div className="w-full">
        <textarea
          name="description"
          id="description"
          className="w-full bg-[#D9D9D99C] text-sm py-[5%] px-[2%] rounded-md resize-none outline-none"
          placeholder="What’s on your mind?"
          rows={11}
        ></textarea>
      </div>
      {media.length === 0 ? (
        <MediaSelection toggleCamera={toggleCamera} handleMedia={handleMedia} />
      ) : (
        <></>
      )}
      <div className="w-[92%] fixed bottom-[5%] left-[4%]">
        <FooterButton label="CREATE" />
      </div>
    </div>
  );
};

export default CreatePost;
