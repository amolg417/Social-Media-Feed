import LikeIcon from "../Feed/LikeIcon";

const MyPost = () => {
  return (
    <div className="w-[47%] h-[60%] flex-shrink-0 flex-grow-0 relative">
      <img
        src="https://img.freepik.com/free-photo/portrait-pensive-young-girl-making-notes_171337-1646.jpg?t=st=1736851954~exp=1736855554~hmac=e38105d8dedfdf24950469ef7af72436603fb4e6c2ce6c9c92bfacd3f54cf0d0&w=996"
        alt="post-image"
        className="w-full h-webkit-fill object-cover rounded-md"
      />
      <div
        className="w-full h-[95%] pl-[6%] pb-[6%] flex flex-col justify-end absolute bottom-0 left-0 z-10 rounded-md box-border"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,248,248,0.01) 0%, rgba(0,0,0,0.5) 100%)",
        }}
      >
        <h5 className="text-sm text-[#fff] font-[500]">Working on a B2B...</h5>
        <div className="w-[50%] flex items-center gap-x-[4%]">
          <LikeIcon color={"white"} width="w-[20%]" />
          <span className="text-xs text-[#fff]">67</span>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
