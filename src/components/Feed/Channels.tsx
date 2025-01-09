import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
type ChannelProps = { title: string; shareUrl: string };
const Channels = ({ title, shareUrl }: ChannelProps) => {

  const Channels = [
    {
      button: (url: string, title: string) => (
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      ),
      label: "Twitter",
    },
    {
      button: (url: string, title: string) => (
        <FacebookShareButton url={url} title={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      ),
      label: "Facebook",
    },
    {
      button: (url: string, title: string) => (
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      ),
      label: "Linkedin",
    },
    {
      button: (url: string, title: string) => (
        <RedditShareButton url={url} title={title}>
          <RedditIcon size={32} round />
        </RedditShareButton>
      ),
      label: "Reddit",
    },
    {
      button: (url: string, title: string) => (
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      ),
      label: "Whatsapp",
    },
    {
      button: (url: string, title: string) => (
        <EmailShareButton url={url} title={title}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      ),
      label: "Email",
    },
    {
      button: (url: string, title: string) => (
        <TelegramShareButton url={url} title={title}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      ),
      label: "Telegram",
    },
    {
      button: (url: string, title: string) => (
        <InstapaperShareButton url={url} title={title}>
          <InstapaperIcon size={32} round />
        </InstapaperShareButton>
      ),
      label: "Instapaper",
    },
  ];
  return (
    <div className="w-full flex items-center justify-between flex-wrap gap-x-4 gap-y-7">
      {Channels.map((channel) => (
        <div className="w-[20%] flex flex-col items-center">
          <div className="w-full aspect-square rounded-full flex items-center justify-center bg-[#E7F1FD]">
            {channel.button(shareUrl, title)}
          </div>
          <span className="text-xs text-[#000] font-[400] mt-1">
            {channel.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Channels;
