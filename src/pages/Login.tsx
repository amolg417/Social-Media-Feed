import GoogleAuth from "../components/Login/GoogleAuth";
import banner from "../assets/Login/png/Banner.png";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    const storedUser = JSON.parse(Cookies.get("userInfo"));
    if (Object.keys(storedUser).length) {
      navigate("/feed");
    }
  }, 1000);
  return (
    <div className="min-w-full h-full relative">
      <img
        src={banner}
        alt="background-banner"
        className="w-full object-cover"
      />
      <GoogleAuth />
    </div>
  );
};

export default Login;
