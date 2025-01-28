import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
type AuthVerifyProps = {
  Component: React.ReactElement;
};
const AuthVerify = ({ Component }: AuthVerifyProps) => {
  const user = JSON.parse(Cookies.get("userInfo") || "{}");
  
  if (user.uid) {
    return Component;
  }
  return <Navigate to="/" replace />;
};

export default AuthVerify;
