import { useCallback, useState } from "react";
import leftArrow from "../assets/Post/svg/BlackLefttArraw.svg";
import CameraSection from "../components/CreatePost/CameraSection";
import FooterButton from "../components/Profile/FooterButton";
import MediaSelection from "../components/CreatePost/MediaSelection";
import { useNavigate } from "react-router-dom";
import SelectedMediaCarousel from "../components/CreatePost/SelectedMediaCarousel";

const CreatePost = () => {
  const [media, setMedia] = useState<File[]>([]);
  const [useCamera, setUseCamera] = useState(false);
  const [postDescription,setPostDescription]=useState("")
  const navigate = useNavigate();
  const toggleCamera = useCallback(() => {
    setUseCamera((prev) => !prev);
  }, []);

  const handleMedia = (files: FileList | null) => {
    if (!files || files.length === 0) {
      console.log("No files have been selected");
      return;
    }

    const selectedFiles = Array.from(files);
    setMedia((prev) => {
      const existingFiles = new Set(
        prev.map((file) => file.name + file.size)
      );
      const newFiles = selectedFiles.filter(
        (file) => !existingFiles.has(file.name + file.size)
      );
      return [...prev, ...newFiles];
    });
  };

  const deleteMedia=useCallback((fileName:string)=>{
      setMedia((prev)=>{
        return prev.filter((file)=>file.name!==fileName)
      })
  },[])

  const handlePostDescription=useCallback((value:string)=>{
    setPostDescription(value)
  },[])

  return (
    <div className="w-full h-full px-[4%] py-[7%] relative">
      {useCamera ? <CameraSection toggleCamera={toggleCamera} handleMedia={handleMedia} /> : <></>}
      <div className="w-full flex items-center gap-x-[5%] mb-4">
        <img
          src={leftArrow}
          alt="leftArrow"
          className="w-[5%] cursor-pointer"
          onClick={() => navigate("/feed")}
        />
        <span className="font-[800] text-[#000] text-xl">New Post</span>
      </div>
      {media.length ? <SelectedMediaCarousel media={media} deleteMedia={deleteMedia}/> : <></>}
      <div className="w-full">
        <textarea
          name="description"
          id="description"
          className="w-full bg-[#D9D9D99C] text-sm py-[5%] px-[2%] rounded-md resize-none outline-none"
          placeholder="What’s on your mind?"
          rows={11}
          value={postDescription}
          onChange={(e)=>handlePostDescription(e.target.value)}
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
