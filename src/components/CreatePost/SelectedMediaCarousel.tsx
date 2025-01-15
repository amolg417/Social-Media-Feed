import Carousel from "react-material-ui-carousel";
import image from "../../assets/Post/svg/image.svg";
import deleteIcon from "../../assets/Post/svg/delete.svg";
// import VideoPlayer from "../Feed/VideoPlayer";
 type SelectedMediaCarouselProps={
  media:File[]
 }

const SelectedMediaCarousel = ({media}:SelectedMediaCarouselProps) => {
  const items = [
    {
      id: 1,
      url: "https://s3-alpha-sig.figma.com/img/3266/ee28/2707ba21eb516eb0975e8addee9028f1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EI1FYEwHa8BcT3fjb5OftK0mYBxIO8g~bZb0ULXYDxlfRKScGidr12BzpAN9ktVWnP4pLuQN~SZuuuR0OKgjXs-CmmzetKtAhdgveWzazAnKYMudhw6hQdbD5mSGOWPX~3UqMKAUO8pBJjNggfafWbzYoAYztNE-IFImDv7sMsEeIY7yr5WN7L9zBvLwsQqe~BbwXnpFkQggzWPl8Tc1UuXP4SvwjLoUk0UWg~29p7bhAFid2NYgmk6VFY10~l80jjOcxwovFn-dR~zCJyOUbB4vT3RHaOJ-kK~kb6ocb7f9Ydnq-VphFbRIEmGLIatYjwOGpUt7kmLCD44GKsn57Q__",
    },
    {
      id: 2,
      url: "https://s3-alpha-sig.figma.com/img/b28d/6627/71d7d92bc8492aa10faaf02da0d1d431?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pBF2YMWVonnrF-M0QDFjt0cPz7Uo~uRqNo3Y7a9ZUk5UZno11D~2t-EYgfvSX8MR9R7SuyNVGjr6tGfJmEHivwrsqLi09SNu4a7ionlSC17Fi42uBtx~cmA7b6y2QuZA54GiewEeRCvP-IquM~ZEXyYBRtsMUab0k7BI0PvRniuRUnji7ATwkInOzSPyJBcZAAy7lEXN6o1lk5-Pk4gOHEF-R8Y50szIBkLtlqMNjjeTVLYpaT32bZ1qAyPZs51T0CNJg4BMH13h5l5Mprm46dViRFJZkmo2E8aP0l4TFNsDMxmSYE9d0QyfhMK28CbIj-I8cDw1x~AhsStqLU8yCw__",
    },
  ];
  return (
    <>
      <div className="w-[90%] h-[42%] mx-auto relative">
        <Carousel
          height={"92%"}
          swipe={false}
          navButtonsAlwaysVisible={media.length>1}
          indicators={items.length>1}
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
          {/* {media.map((item) => (
            <img
              src={item.url}
              key={item.id}
              className="w-full h-full object-cover rounded-xl"
            />
          ))}
          {/* <VideoPlayer/> */}
        </Carousel> 
        <div className="w-[11%] aspect-square rounded-full flex items-center justify-center bg-[#00000085] absolute right-3 bottom-10 z-20">
            <img src={deleteIcon} alt="deleteIcon" />
        </div>
      </div>
      <div className="flex items-center gap-x-1 mb-[3%] cursor-pointer">
        <img src={image} alt="image" className="w-[5%]" />
        <span className="text-sm text-[#000] font-[700]">Add more Photos</span>
      </div>
    </>
  );
};

export default SelectedMediaCarousel;
