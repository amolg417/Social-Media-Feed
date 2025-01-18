import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import leftArrow from "../../assets/Profile/svg/SmLeft.svg";
import flipCamera from "../../assets/Post/svg/flip-camera.svg";
import ReviewImage from "./ReviewImage";
import { v4 as uuidv4 } from "uuid";

type CameraSectionProps = {
  toggleCamera: () => void;
  handleMedia: (files: File[]) => void;
};
const CameraSection = ({ toggleCamera, handleMedia }: CameraSectionProps) => {
  const webcamRef = useRef<Webcam>(null);
  const [isFrontCamera, setIsFrontCamera] = useState(true);
  const [capturedImage, setCapturedImage] = useState<null | string>(null);
  const [reviewImage, setReviewImage] = useState(false);

  const handleReviewImage = useCallback((newValue: boolean) => {
    if (newValue === false) {
      setCapturedImage(null);
    }
    setReviewImage(newValue);
  }, []);

  const changeCamera = useCallback(() => {
    setIsFrontCamera((prev) => !prev);
  }, []);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
      setCapturedImage(imageSrc);
    }
  }, [webcamRef]);

  const proceedToPost = useCallback((capturedImage: string) => {
    const base64ToFile = (base64: string, fileName: string) => {
      const [meta, content] = base64.split(",");
      const mime = meta.match(/:(.*?);/)?.[1] || "image/jpeg";
      const binary = atob(content);
      const arrayBuffer = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        arrayBuffer[i] = binary.charCodeAt(i);
      }
      return new File([arrayBuffer], fileName, { type: mime });
    };

    const file = base64ToFile(capturedImage, `captured-${Date.now()}.jpg`);
    handleMedia([file]);
    toggleCamera();
  }, []);

  return (
    <>
      {reviewImage ? (
        <ReviewImage
          imageSrc={capturedImage}
          baackToCamera={handleReviewImage}
          proceedToPost={proceedToPost}
        />
      ) : (
        <></>
      )}
      <div className="w-full h-full flex flex-col items-center absolute top-0 left-0 bg-[#fff] z-50">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={"100%"}
          height={"100%"}
          className="w-full h-full object-cover"
          videoConstraints={{
            facingMode: isFrontCamera ? "user" : "environment",
          }}
          style={{ width: "100%", height: "100%" }}
        />
        <button
          onClick={capture}
          className="w-16 aspect-square rounded-full flex items-center justify-center bg-[#fff] fixed bottom-8 z-40"
        >
          <div className="w-14 aspect-square rounded-full bg-[#fff] border-[0.5rem] border-[#bbb6b6]"></div>
        </button>
        <img
          src={leftArrow}
          alt="closeIcon"
          className="w-8 absolute top-2 left-2"
          onClick={toggleCamera}
        />
        <img
          src={flipCamera}
          alt="flipCamera"
          className="w-10 absolute bottom-11 right-14"
          onClick={changeCamera}
        />
        {capturedImage ? (
          <img
            src={capturedImage}
            alt="flipCamera"
            className="w-10 aspect-square rounded absolute bottom-11 left-14"
            onClick={() => handleReviewImage(true)}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CameraSection;
