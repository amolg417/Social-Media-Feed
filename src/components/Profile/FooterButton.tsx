
type FooterButton={
    label:string,
    onClickHandler?:()=>void
}
const FooterButton = ({label,onClickHandler}:FooterButton) => {
  return (
    <button className="w-full py-[3%] bg-[#000] rounded-full text-[#fff] text-base font-[500]" onClick={onClickHandler}>
      {label}
    </button>
  );
};

export default FooterButton;
