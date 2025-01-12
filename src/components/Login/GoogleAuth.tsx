import logo from "../../assets/Login/png/logo.png"
import google from"../../assets/Login/svg/google.svg"
import {auth,googleProvider} from "../../congif/firebase"
import {signInWithPopup} from "firebase/auth"
const GoogleAuth = () => {

  const login = ()=>{
    signInWithPopup(auth,googleProvider)
  }
  return (
    <div className="w-full h-[35%] flex flex-col items-center bg-[#fff] absolute left-0 bottom-0 z-100 rounded-t-[63px] pt-[10%] font-[karla]">
      <div className="logo-section flex items-center justify-center gap-x-[1%]">
        <img
          src={logo}
          alt="logo"
          className="w-[22%] flex-shrink-0 flex-grow-0"
        />
        <h4 className="text-[28px] text-[#000] font-[600]">Vibesnap</h4>
      </div>
      <span className="text-base text-center mb-[6%]">
        Moments That Matter, Shared Forever.
      </span>
      <button
        className="flex items-center justify-between gap-x-[5%] px-[5.5%] py-[3%] bg-[#292929] rounded-full"
        onClick={() => login()}
      >
        <img src={google} alt="" />
        <span className="text-base text-[#fff] font-[700] text-nowrap">
          Continue with Google
        </span>
      </button>
    </div>
  );
};

export default GoogleAuth;
