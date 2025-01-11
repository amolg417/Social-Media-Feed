import PostMediaContainer from "./PostMediaContainer";
import PostDescripton from "./PostDescripton";
// import PostFooter from "./PostFooter"; 
import PostHeader from "./PostHeader";
import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";
import PostFooter from "./PostFooter";
type PostProps = {
  media: { type: "image" | "video"; url: string };
  handleShareModal: (newVal: boolean) => void;
};
const Post = ({ media,handleShareModal }: PostProps) => {
  const [bgColor, setBgColor] = useState<string | null>(null);

  const lightenColor = (rgba: string): string => {
    const [r, g, b, a] = rgba
      .slice(5, -1)
      .split(",")
      .map((v) => parseFloat(v.trim()));
    const adjust = (value: number) => Math.min(255, Math.floor(value + 140));
    const newR = adjust(r);
    const newG = adjust(g);
    const newB = adjust(b);
    return `rgba(${newR}, ${newG}, ${newB}, ${a})`; // Return modified RGBA
  };

  useEffect(() => {
    if (media.type === "image") {
      if (!localStorage.getItem(media.url)) {
        const fac = new FastAverageColor();
        fac
          .getColorAsync(media.url)
          .then((color) => {
            const lightenedColor = lightenColor(color.rgba); // Lighten the extracted color
            setBgColor(lightenedColor);
            localStorage.setItem(media.url, lightenedColor);
          })
          .catch((error) => console.error("Error extracting color:", error));
      } else {
        setBgColor(localStorage.getItem(media.url));
      }
    }
  }, [media]);

  useEffect(() => {
    if (media.type === "video") {
      if (!localStorage.getItem(media.url)) {
        const video = document.createElement("video");
        video.src = media.url;
        video.crossOrigin = "anonymous";
        video.autoplay = true;
        video.currentTime = 3;
        video.addEventListener("canplaythrough", () => {
          const canvas = document.createElement("canvas");
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const frame = canvas.toDataURL("image/png");
            const fac = new FastAverageColor();
            fac
              .getColorAsync(frame)
              .then((color) => {
                if (color.rgb !== "rgb(0,0,0)") {
                  setBgColor(color.rgb);
                  localStorage.setItem(media.url, color.rgb);
                }
              })
              .catch((error) =>
                console.error("Error extracting color:", error)
              );
          }
        });

        video.load();
      } else {
        setBgColor(localStorage.getItem(media.url));
      }
    }
  }, [media]);

  return (
    <div
      style={{ backgroundColor: bgColor || "#fff" }}
      className="w-full h-[65%] min-h-fit p-[3%] border rounded-3xl flex flex-col justify-between flex-shrink-0 flex-grow-0"
    >
      <PostHeader />
      <PostDescripton />
      <PostMediaContainer />
      <PostFooter handleShareModal={handleShareModal} />
    </div>
  );
};

export default Post;
