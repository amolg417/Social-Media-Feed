import Feed from "./pages/Feed";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import ProfileInfo from "./components/Profile/ProfileInfo";
const Structure = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="" element={<ProfileInfo/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Structure;
