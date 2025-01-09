import pencil from "../../assets/Profile/svg/Pencil.svg"
const EditPencil = () => {
  return (
    <div className="w-full aspect-square flex items-center justify-center rounded-full bg-[#F4F4F4]">
      <img
        src={pencil}
        alt="pencil"
        className="w-[60%]"
      />
    </div>
  );
};

export default EditPencil;
