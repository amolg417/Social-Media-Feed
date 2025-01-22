import Carousel from "react-material-ui-carousel";
import VideoPlayer from "./VideoPlayer";

type ImageCarouselProps = {
  media: { type: string; url: string }[];
};
const ImageCarousel = ({media}:ImageCarouselProps) => {
  console.log({media})
  // const items: User[] = [
  //   { id: 1, url: "src/assets/Feed/png/slide1.jpg" },
  //   { id: 2, url: "src/assets/Feed/png/slide2.jpg" },
  // ];
  return (
    <div className="w-full h-full">
      <Carousel
        height={"100%"}
        swipe={false}
        navButtonsAlwaysVisible={true}
        autoPlay={false}
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
            color: "black",
            padding: 0,
            margin: 0,
          },
        }}
        navButtonsWrapperProps={{
          style: {
            top: "47%",
            transform: "translateY(-50%)",
          },
        }}
        className="w-full h-full"
      >
        {media.map((item) => {
          if(item.type==="image"){

           return <img
            src={item.url}
            key={item.url}
            className="w-full h-[90%] object-contain rounded-xl"
            />
          }
          return <VideoPlayer file={item.url} />
        })}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
