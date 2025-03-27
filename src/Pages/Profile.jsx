import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Button from "react-bootstrap/Button";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TweetCard from "./TweetCard";
import ProfileModel from "./ProfileModel";
import { tweets, users } from "./Data";


const Profile = () => {
  const [openProfileModel, setOpenProfileModel] = useState(false);
  const handleOpenProfileModel = () => setOpenProfileModel(true);
  const handleClose = () => setOpenProfileModel(false);
  const [TabValue, setTabValue] = useState("1"); 
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
 
  const handleBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    if (newValue === "4") {
      console.log("Likes tweets");
    } else if (newValue === "1") {
      console.log("User tweets");
    }
  };

  const [tweetList, setTweetList] = useState(tweets);
 
   const handleDelete = (tweetId) => {
     setTweetList(tweetList.filter((tweet) => tweet.id !== tweetId));
   };
 
  return (
    <div className="container">
      <section className="position-sticky top-0 d-flex align-items-center bg-white py-3 border-bottom">
        <KeyboardBackspaceIcon className="cursor-pointer me-3" onClick={handleBack} />
        <h1 className="fw-bold opacity-90 m-0">
  {user ? user.fullName.split(" ").join("_").toLowerCase() : "Loading..."}
</h1>
      </section>

      <section>
        <img
          className="w-100"
          style={{ height: "15rem", objectFit: "cover" }}
          src="https://cdn.pixabay.com/photo/2021/10/11/17/38/light-6701427_1280.jpg"
          alt="Cover"
        />
      </section>

      <section className="ps-3 position-relative">
        <div className="d-flex align-items-start justify-content-between">
          <div className="position-absolute" style={{ top: "-3rem", left: "1rem" }}>
            <img
              src="https://images.pexels.com/photos/31280266/pexels-photo-31280266/free-photo-of-curved-architectural-shadows-in-abstract-light.jpeg"
              alt="Profile"
              className="rounded-circle border border-white"
              style={{
                width: "5rem",
                height: "5rem",
                objectFit: "cover",
              }}
            />
          </div>
          <Button
            onClick={handleOpenProfileModel}
            variant="primary"
            className="rounded-pill px-3 py-1 ms-auto mt-3"
            style={{ fontSize: "0.875rem" }}
          >
            Edit Profile
          </Button>
        </div>

        <span className="username fw-bold d-block">
  {user ? user.fullName : "Unknown User"}
</span>
<span className="text-muted">
  @{user ? user.fullName.split(" ").join("_").toLowerCase() : "unknown"}
</span>

        <div className="mt-2">
          <p>Hello, Nice to meet you all</p>
          <div className="d-flex flex-wrap gap-3 text-secondary">
            <div className="d-flex align-items-center">
              <BusinessCenterIcon />
              <span className="ms-2">Education</span>
            </div>
            <div className="d-flex align-items-center">
              <LocationOnIcon />
              <span className="ms-2">Indian</span>
            </div>
            <div className="d-flex align-items-center">
              <CalendarMonthIcon />
              <span className="ms-2">Joined Jan 2025</span>
            </div>
          </div>
          <div className="d-flex gap-4 mt-2">
            <div className="fw-semibold">
              <span>5000</span> <span className="text-secondary">Followers</span>
            </div>
            <div className="fw-semibold">
              <span>500</span> <span className="text-secondary">Following</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={TabValue}> 
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {tweetList.map((tweet) => {
                        const user = users.find((u) => u.id === tweet.userId) || {
                          fullName: "Unknown User",
                          username: "unknown",
                          profilePicture: "https://via.placeholder.com/150",
                        };
                        return <TweetCard key={tweet.id} tweet={tweet} user={user} onDelete={handleDelete} />;
                      })}
              
  
</TabPanel>
            <TabPanel value="2">User replies</TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="4">Likes</TabPanel>
          </TabContext>
        </Box>
      </section>

      <section>
        <ProfileModel handleClose={handleClose} open={openProfileModel} />
      </section>
    </div>
  );
};

export default Profile;
