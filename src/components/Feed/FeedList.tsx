// import Feeds from "./Feeds"
import Post from "./Post";
type FeedListProps={
  handleShareModal:(newVal:boolean)=>void
}
const FeedList = ({handleShareModal}:FeedListProps) => {
  return (
    <div className="w-full h-[95%] pt-[7%]">
      <h3 className="text-2xl text-[#000] font-[700] mb-[4%]">Feeds</h3>
      <div className="w-full h-[93%] flex flex-col gap-y-[2%] overflow-y-auto no-scrollbar">
        <Post
        handleShareModal={handleShareModal}
          media={{
            type: "video",
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          }}
        />
        <Post
          media={{ type: "image", url: "src/assets/Feed/png/slide1.jpg" }}
          handleShareModal={handleShareModal}
        />
        <Post
          media={{ type: "image", url: "src/assets/Feed/png/slide1.jpg" }}
          handleShareModal={handleShareModal}
        />
        <Post
          media={{ type: "image", url: "src/assets/Feed/png/slide1.jpg" }}
          handleShareModal={handleShareModal}
        />
        <Post
          media={{ type: "image", url: "src/assets/Feed/png/slide1.jpg" }}
          handleShareModal={handleShareModal}
        />
        <Post
          media={{ type: "image", url: "src/assets/Feed/png/slide1.jpg" }}
          handleShareModal={handleShareModal}
        />
        <Post
          media={{ type: "image", url: "src/assets/Feed/png/slide1.jpg" }}
          handleShareModal={handleShareModal}
        />
        <Post
          media={{ type: "image", url: "src/assets/Feed/png/slide1.jpg" }}
          handleShareModal={handleShareModal}
        />
      </div>
    </div>
  );
};

export default FeedList;
