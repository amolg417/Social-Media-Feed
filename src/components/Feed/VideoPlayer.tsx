import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";



type VideoPlayerProps={
  file:File|string
}
const VideoPlayer = ({file}:VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mute, setMute] = useState<boolean>(true);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const handleSound = useCallback(() => {
    setMute((prev) => !prev);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (inView) {
        video.play();
      } else {
        video.pause();
      }
    }
  }, [inView]);
  const videoSrc = typeof file === "string" ? file : URL.createObjectURL(file);
  return (
    <div className="w-full h-full relative" ref={ref}>
      <video
        src={videoSrc}
        muted={mute}
        ref={videoRef}
        className="w-full h-full object-cover rounded-xl"
      ></video>
      <img
        src={
          mute
            ? "src/assets/Feed/svg/Mute.svg"
            : "src/assets/Feed/svg/Volume.svg"
        }
        alt="speaker"
        className="w-[5%] absolute right-2 bottom-2 cursor-pointer"
        onClick={handleSound}
      />
    </div>
  );
};

export default VideoPlayer;
