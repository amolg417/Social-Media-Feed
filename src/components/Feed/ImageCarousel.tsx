import Carousel from "react-material-ui-carousel";

const ImageCarousel = () => {
  type User = {
    id: number;
    url: string;
  };
  const items: User[] = [
    { id: 1, url: "src/assets/Feed/png/slide1.jpg" },
    { id: 2, url: "src/assets/Feed/png/slide2.jpg" },
  ];
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
        {items.map((item) => (
          <img
            src={item.url}
            key={item.id}
            className="w-full h-[90%] object-contain rounded-xl"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
