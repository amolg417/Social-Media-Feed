import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileInfo from "./components/Profile/ProfileInfo";
import EditProfile from "./components/Profile/EditProfile";
import CreatePost from "./pages/CreatePost";
import AuthVerify from "./components/hocs/AuthVerify";
const Structure = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 2000,
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/feed" element={<AuthVerify Component={<Feed />} />} />
          <Route
            path="/profile"
            element={<AuthVerify Component={<Profile />} />}
          >
            <Route index element={<AuthVerify Component={<ProfileInfo />} />} />
            <Route
              path="edit"
              element={<AuthVerify Component={<EditProfile />} />}
            />
          </Route>
          <Route
            path="/post"
            element={<AuthVerify Component={<CreatePost />} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default Structure;
