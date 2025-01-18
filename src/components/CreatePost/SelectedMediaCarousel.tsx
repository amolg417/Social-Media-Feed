import Carousel from "react-material-ui-carousel";
import deleteIcon from "../../assets/Post/svg/delete.svg";
import VideoPlayer from "../Feed/VideoPlayer";
type SelectedMediaCarouselProps = {
  media: File[];
  deleteMedia:(fileName:string)=>void
};

const SelectedMediaCarousel = ({
  media,
  deleteMedia,
}: SelectedMediaCarouselProps) => {
  console.log(media?.[0].type);
  return (
    <>
      <div className="w-[90%] h-[42%] mx-auto relative">
        <Carousel
          height={"92%"}
          swipe={false}
          navButtonsAlwaysVisible={media.length > 1}
          indicators={media.length > 1}
          autoPlay={false}
          navButtonsProps={{
            style: {
              backgroundColor: "transparent",
              color: "#fff",
              padding: 0,
              margin: 0,
            },
          }}
          navButtonsWrapperProps={{
            style: {
              top: "50%",
              height: "50%",
              transform: "translateY(-50%)",
            },
          }}
          indicatorContainerProps={{
            style: {
              margin: 0,
            },
          }}
          className="image-container w-full h-full"
        >
          {media.map((file) => {
            if (file.type.startsWith("image")) {
              return (
                <>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="w-[11%] aspect-square rounded-full flex items-center justify-center bg-[#00000085] absolute left-3 bottom-3 z-20" onClick={()=>deleteMedia(file.name)}>
                    <img src={deleteIcon} alt="deleteIcon" />
                  </div>
                </>
              );
            }
            return (
              <>
                <VideoPlayer file={file} />
                <div className="w-[11%] aspect-square rounded-full flex items-center justify-center bg-[#00000085] absolute left-3 bottom-3 z-20" onClick={()=>deleteMedia(file.name)}>
                  <img src={deleteIcon} alt="deleteIcon" />
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default SelectedMediaCarousel;
