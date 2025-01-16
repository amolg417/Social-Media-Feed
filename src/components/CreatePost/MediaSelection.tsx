import { useRef, useState } from "react";
import image from "../../assets/Post/svg/image.svg";
import video from "../../assets/Post/svg/video.svg";
import camera from "../../assets/Post/svg/camera.svg";
import folder from "../../assets/Post/svg/folder.svg";
type MediaSelectionProps = {
  toggleCamera: () => void;
  handleMedia: (e: File[]) => void;
};
const MediaSelection = ({ toggleCamera, handleMedia }: MediaSelectionProps) => {
  const [showUploadOptions, setShowUploadOptions] = useState(false);
  const media = [
    {
      label: "Photos",
      img: image,
      is_showing: false,
      onClickHandler: (e:React.ChangeEvent<HTMLInputElement>) => {
        handleMedia(Array.from(e.target?.files || []));
      },
    },
    {
      label: "Videos",
      img: video,
      is_showing: false,
      onClickHandler: (e:React.ChangeEvent<HTMLInputElement>) => {
        handleMedia(Array.from(e.target?.files || []));
      },
    }
  ];

  const chooseFileHandler = () => {
    setShowUploadOptions(true);
  };

  return (
    <div className="w-full pt-[5%] flex flex-col gap-y-3">
      {!showUploadOptions ? (
        <div
          className="flex items-center gap-x-1 cursor-pointer"
          onClick={chooseFileHandler}
        >
          <img src={folder} alt="Choose the file" className="w-[5%]" />
          <label className="text-sm text-[#000] font-[700]">
            Choose the file
          </label>
        </div>
      ) : (
        media?.map((item) => {
          return (
            <label
              key={item.label}
              htmlFor={item.label+"id"}
              className="flex items-center gap-x-1 cursor-pointer"
            >
              <input
                type="file"
                name="Media"
                className="hidden"
                accept="image/*,video/*"
                id={item.label+"id"}
                onChange={item.onClickHandler}
              />
              <img src={item.img} alt={item.label} className="w-[5%]" />
              <span className="text-sm text-[#000] font-[700]">
                {item.label}
              </span>
            </label>
          );
        })
      )}
      <div
        className="flex items-center gap-x-1 cursor-pointer"
        onClick={toggleCamera}
      >
        <img src={camera} alt="Choose the file" className="w-[5%]" />
        <label className="text-sm text-[#000] font-[700]">Camera</label>
      </div>
    </div>
  );
};

export default MediaSelection;
