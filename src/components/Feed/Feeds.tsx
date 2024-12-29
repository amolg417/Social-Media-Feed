import Post from "./Post";

const Feeds = () => {
  return (
    <div className="w-full h-[93%] flex flex-col gap-y-[2%] overflow-y-auto no-scrollbar">
      <Post
        media={{
          type: "video",
          url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
      />
      <Post media={{ type: "image", url: "src/assets/Feed/png/slide1.jpg" }} />
      <Post media={{ type: "image", url: "src/assets/Feed/png/slide1.jpg" }} />
      <Post media={{ type: "image", url: "src/assets/Feed/png/slide1.jpg" }} />
      <Post media={{ type: "image", url: "src/assets/Feed/png/slide1.jpg" }} />
      <Post media={{ type: "image", url: "src/assets/Feed/png/slide1.jpg" }} />
      <Post media={{ type: "image", url: "src/assets/Feed/png/slide1.jpg" }} />
      <Post media={{ type: "image", url: "src/assets/Feed/png/slide1.jpg" }} />
    </div>
  );
};

export default Feeds;
