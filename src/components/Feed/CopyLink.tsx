import { useState } from "react";
type CopyLinkProps = {
  shareUrl: string;
};
const CopyLink = ({ shareUrl }: CopyLinkProps) => {
  const [copied, setCopied] = useState<boolean>(false);
  
  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => setCopied(true))
        .catch((err) => console.error("Failed to copy link: ", err));
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = shareUrl;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
      } catch (err) {
        console.error("Fallback: Failed to copy link", err);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  return (
    <div>
      <h4 className="text-base text-[#000] font-[500]">Page Link</h4>
      <div className="relative w-full max-w-md flex items-center mt-[2%]">
        <input
          type="text"
          value={shareUrl}
          readOnly
          className="w-full p-3 border border-gray-300 rounded-md outline-none focus:outline-none bg-[#D9D9D9] text-xs"
        />
        <button className="absolute right-2 w-[7%]">
          <img
            src={
              copied
                ? "src/assets/Feed/svg/Copied.svg"
                : "src/assets/Feed/svg/Copy.svg"
            }
            onClick={handleCopy}
            alt="Copy Icon"
            className="w-full"
          />
        </button>
      </div>
    </div>
  );
};

export default CopyLink;
