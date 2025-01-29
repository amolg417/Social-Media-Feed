import LikeIcon from "../Feed/LikeIcon";

type myPostProps={
  description:string,
  likes:number,
  postImg:string
  type:"image"|"video"
}
const MyPost = ({description,likes,postImg,type}:myPostProps) => {
  return (
    <div className="w-[47%] h-[60%] flex-shrink-0 flex-grow-0 relative">
      {type==="image"?
      <img
        src={postImg}
        alt="post-image"
        className="w-full h-webkit-fill object-contain rounded-md"
      />:
      <video src={postImg} className="w-full h-webkit-fill object-contain rounded-md"></video>}
      <div
        className="w-full h-[95%] pl-[6%] pb-[6%] flex flex-col justify-end absolute bottom-0 left-0 z-10 rounded-md box-border"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,248,248,0.01) 0%, rgba(0,0,0,0.5) 100%)",
        }}
      >
        <h5 className="text-sm text-[#fff] font-[500] line-clamp-[1]">{description}</h5>
        <div className="w-[50%] flex items-center gap-x-[4%]">
          <LikeIcon color={"red"} width="w-[20%]" />
          <span className="text-xs text-[#fff]">{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
