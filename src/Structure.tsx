import Feed from "./pages/Feed";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import ProfileInfo from "./components/Profile/ProfileInfo";
import EditProfile from "./components/Profile/EditProfile";
const Structure = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<ProfileInfo/>}/>
            <Route path="edit" element={<EditProfile/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Structure;
