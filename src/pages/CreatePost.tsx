import { useCallback, useEffect, useRef, useState } from "react";
import leftArrow from "../assets/Post/svg/BlackLefttArraw.svg";
import CameraSection from "../components/CreatePost/CameraSection";
import FooterButton from "../components/Profile/FooterButton";
import MediaSelection from "../components/CreatePost/MediaSelection";
import { useNavigate } from "react-router-dom";
import SelectedMediaCarousel from "../components/CreatePost/SelectedMediaCarousel";
import { uploadMediaAndGetUrls } from "../apiuils/media";
import { useGlobalInfo } from "../context/GlobalInfo";
import { addRecord } from "../apiuils/post";
import toast from "react-hot-toast";
import TextArea from "../components/CreatePost/TextArea";

const CreatePost = () => {
  const context = useGlobalInfo();
  const [media, setMedia] = useState<File[]>([]);
  const [useCamera, setUseCamera] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [postDescription, setPostDescription] = useState("");
  const navigate = useNavigate();
  const toggleCamera = useCallback(() => {
    setUseCamera((prev) => !prev);
  }, []);

  const handleMedia = (files: FileList | null) => {
    if (!files || files.length === 0) {
      toast.error("No files have been selected");
      return;
    }
    const selectedFiles = Array.from(files);
    setMedia((prev) => {
      const existingFiles = new Set(prev.map((file) => file.name + file.size));
      const newFiles = selectedFiles.filter(
        (file) => !existingFiles.has(file.name + file.size)
      );
      return [...prev, ...newFiles];
    });
  };

  const deleteMedia = useCallback((fileName: string) => {
    if (!fileName) return;
    setMedia((prev) => {
      return prev.filter((file) => file.name !== fileName);
    });
  }, []);

  const handlePostDescription = useCallback((value: string) => {
    setPostDescription(value);
  }, []);

  const createPost = useCallback(async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      toast.loading("Creating post");
      if (!context.user.uid) return;
      let urlsData = await uploadMediaAndGetUrls(media);
      const post = {
        media: urlsData,
        description: postDescription,
        user: `/Users/${context.user.uid}`,
        likes: 0,
        createdAt: new Date(),
      };
      await addRecord(post);
      setIsLoading(false);
      toast.dismiss();
      navigate("/feed");
    } catch (error) {
      setIsLoading(false);
      toast.dismiss();
      toast.error("Something went wrong");
    }
  }, [postDescription, isLoading, context.user.uid, media]);

  return (
    <div className="w-full h-full px-[4%] py-[7%] relative">
      {useCamera ? (
        <CameraSection toggleCamera={toggleCamera} handleMedia={handleMedia} />
      ) : (
        <></>
      )}
      <div className="w-full flex items-center gap-x-[5%] mb-4">
        <img
          src={leftArrow}
          alt="leftArrow"
          className="w-[5%] cursor-pointer"
          onClick={() => navigate("/feed")}
        />
        <span className="font-[800] text-[#000] text-xl">New Post</span>
      </div>
      {media.length ? (
        <SelectedMediaCarousel media={media} deleteMedia={deleteMedia} />
      ) : (
        <></>
      )}
      <TextArea
        postDescription={postDescription}
        handlePostDescription={handlePostDescription}
      />

      {media.length === 0 ? (
        <MediaSelection toggleCamera={toggleCamera} handleMedia={handleMedia} />
      ) : (
        <></>
      )}
      <div className="w-[92%] fixed bottom-[5%] left-[4%]">
        <FooterButton label="CREATE" onClickHandler={createPost} />
      </div>
    </div>
  );
};

export default CreatePost;
