import React from "react";
import GoogleAuth from "../components/Login/GoogleAuth";
const Login = () => {
  return (
    <div className="min-w-full h-full relative">
      <img
        src="src\assets\Login\png\Banner.png"
        alt="background-banner"
        className="w-full object-cover"
      />
      <GoogleAuth />
    </div>
  );
};

export default Login;
