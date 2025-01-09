
type FooterButton={
    label:string,
    onClickHandler?:()=>void
}
const FooterButton = ({label}:FooterButton) => {
  return (
    <button className="w-full py-[3%] bg-[#000] rounded-full text-[#fff] text-base font-[500]">
      {label}
    </button>
  );
};

export default FooterButton;
