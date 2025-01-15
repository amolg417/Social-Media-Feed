import Header from "../components/Feed/Header";
import FeedList from "../components/Feed/FeedList";
import ShareModal from "../components/Feed/ShareModal";
import { useCallback, useState } from "react";
import { useGlobalInfo } from "../context/GlobalInfo";

const Feed = () => {
  const context=useGlobalInfo()
  console.log(context)
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const handleShareModal = useCallback((newValue: boolean) => {
    setShowShareModal(newValue);
  }, []);
  return (
    <div className="w-full h-full p-[5%] relative">
      <Header />
      <FeedList handleShareModal={handleShareModal} />
      {showShareModal && <ShareModal handleShareModal={handleShareModal} />}
    </div>
  );
};

export default Feed;
