import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import leftArrow from "../../assets/Profile/svg/SmLeft.svg";
import flipCamera from "../../assets/Post/svg/flip-camera.svg"
type CameraSectionProps={
  toggleCamera:()=>void
}
const CameraSection = ({toggleCamera}:CameraSectionProps) => {
  const webcamRef = useRef<Webcam>(null);
  const [isFrontCamera, setIsFrontCamera] = useState(true);
  const changeCamera=useCallback(()=>{
    setIsFrontCamera(prev=>!prev)
  },[])
  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
    }
  }, [webcamRef]);
  return (
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
    </div>
  );
};

export default CameraSection;
