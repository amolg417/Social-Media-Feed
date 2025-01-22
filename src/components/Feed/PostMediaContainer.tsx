import ImageCarousel from "./ImageCarousel";
import VideoPlayer from "./VideoPlayer";

type PostMediaContainerProps = {
  media: { url: string; type: string }[];
};
const PostMediaContainer = ({ media }: PostMediaContainerProps) => {
  return (
    <div className="w-full h-[60%]">
      {/* Render ImageCarousel if there are images */}

      <ImageCarousel media={media} />

      {/* Render VideoPlayer for each video */}
      {/* {videos?.map((video, index) => (
        <div key={index} className="my-4">
          
        </div>
      ))} */}
    </div>
  );
};

export default PostMediaContainer;
