import leftArrow from "../../assets/Profile/svg/SmLeft.svg";
type reviewImageProps = {
  imageSrc: null | string;
  baackToCamera: (newValue: boolean) => void;
  proceedToPost:(img:string)=>void
};
const ReviewImage = ({ imageSrc, baackToCamera,proceedToPost }: reviewImageProps) => {
  console.log(imageSrc)
  return (
    <div className="w-full h-full flex justify-center absolute top-0 left-0 z-[70] bg-[#fff]">
      <img src={imageSrc??""} alt="image" className="w-full h-full object-cover" />
      <img
        src={leftArrow}
        alt="closeIcon"
        className="w-8 absolute top-2 left-2"
        onClick={() => baackToCamera(false)}
      />
      <button className="fixed bottom-4 w-[90%] py-3 text-center text-[#fff] bg-black font-[500] rounded-lg" onClick={()=>proceedToPost(imageSrc||"")}>
        PROCEED
      </button>
    </div>
  );
};

export default ReviewImage;
