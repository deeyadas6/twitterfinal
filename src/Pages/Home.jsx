import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Right from "./Right";

const Profile = lazy(() => import("./Profile"));
const TweetDetails = lazy(() => import("./TweetDetails"));
const Notification = lazy(() => import("./Notification"));
const Message = lazy(() => import("./Message"));
const Explore = lazy(() => import("./Explore"));
const Community = lazy(() => import("./Community"));
const HomeSection = lazy(() => import("./HomeSection"));

const Home = ({ user, onLogout, isDarkMode, setIsDarkMode }) => {
  return (
    <div className={`container-fluid vh-100 vw-100 ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="row h-100 w-100 m-0">
        <div className="col-2 d-flex flex-column align-items-start justify-content-start border">
          <Navigation user={user} onLogout={onLogout} />
        </div>

        <div className="col d-flex flex-column align-items-center justify-content-start">
          <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomeSection />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/tweet/:id" element={<TweetDetails />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/message" element={<Message />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/community" element={<Community />} />
              <Route path="*" element={<Explore />} />
            </Routes>
          </Suspense>
        </div>

        <div className="col d-flex flex-column align-items-start justify-content-start border">
          <Right isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Home;
