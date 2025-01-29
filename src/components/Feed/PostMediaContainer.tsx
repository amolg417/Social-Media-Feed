import ImageCarousel from "./ImageCarousel";
import VideoPlayer from "./VideoPlayer";

type PostMediaContainerProps = {
  media: { url: string; type: string }[];
};
const PostMediaContainer = ({ media }: PostMediaContainerProps) => {
  return (
    <div className="w-full h-[60%]">
      <ImageCarousel media={media} />
    </div>
  );
};

export default PostMediaContainer;
