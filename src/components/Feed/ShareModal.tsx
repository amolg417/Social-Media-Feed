import CopyLink from "./CopyLink";
import Channels from "./Channels";
import closeIcon from "../../assets/Feed/svg/Close.svg"
type ShareModalProps={
    handleShareModal:(newValue:boolean)=>void
}
const ShareModal = ({handleShareModal}:ShareModalProps) => {
  const shareUrl = "https://example.com";
  const title = "Check out this awesome website!";

  return (
    <div className={`w-full h-full absolute top-0 left-0 flex items-center justify-center bg-[#3b3a3a79] z-50`}>
      <div className="w-[90%] flex flex-col gap-y-6 p-[4%] bg-[#fff] rounded-lg">
        <div className="header w-full flex items-center justify-between">
          <h4 className="text-[22px] text-[#000] font-[700]">Share Post</h4>
          <img
            src={closeIcon}
            alt="close-icon"
            className="w-[10%]"
            onClick={()=>handleShareModal(false)}
          />
        </div>
        <Channels title={title} shareUrl={shareUrl} />
        <CopyLink shareUrl={shareUrl} />
      </div>
    </div>
  );
};  

export default ShareModal;
