import pencil from "../../assets/Profile/svg/Pencil.svg";
import { handleUpload } from "../../apiuils/media";
import { useGlobalInfo } from "../../context/GlobalInfo";
type EditPencilProps = {
  editType: "profile" | "cover";
};
const EditPencil = ({ editType }: EditPencilProps) => {
  const context = useGlobalInfo();

  async function upload(selectedFile: any) {
    try {
      if (!selectedFile) return;
      console.log(selectedFile);
      const url = await handleUpload(selectedFile, "image");
      console.log("file uploaded", url);
      if (editType === "profile") {
        context.updateUser({ profile_img: url });
      } else {
        context.updateUser({ cover_img: url });
      }
    } catch (error: any) {
      console.error("Error uploading file:", error.message);
    }
  }

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e?.target?.files[0];
    if (selectedFile) {
      upload(selectedFile);
    }
  };

  return (
    <label
      className="w-full aspect-square flex items-center justify-center rounded-full bg-[#F4F4F4]"
      htmlFor={`upload-${editType}`}
    >
      <img src={pencil} alt="pencil" className="w-[60%]" />
      <input
        type="file"
        className="hidden"
        id={`upload-${editType}`}
        accept="image/*"
        multiple={false}
        onChange={handleFileChange}
      />
    </label>
  );
};

export default EditPencil;
