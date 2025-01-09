import GoogleAuth from "../components/Login/GoogleAuth";
import banner from '../assets/Login/png/Banner.png'
const Login = () => {
  return (
    <div className="min-w-full h-full relative">
      <img
        src={banner }
        alt="background-banner"
        className="w-full object-cover"
      />
      <GoogleAuth />
    </div>
  );
};

export default Login;
