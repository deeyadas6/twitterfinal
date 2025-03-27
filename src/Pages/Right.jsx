import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Subscription from "../Subscription/Subscription";
import '../App'
const allTrends = [
  { category: "Cricket · Trending", hashtag: "#TamimIqbal", posts: "" },
  { category: "Entertainment · Trending", hashtag: "#Raid2", posts: "2,028 posts" },
  { category: "Politics · Trending", hashtag: "Gaddar", posts: "17.8K posts" },
  { category: "Technology · Trending", hashtag: "#AIRevolution", posts: "45.6K posts" },
  { category: "Sports · Trending", hashtag: "#Messi", posts: "89.2K posts" },
  { category: "Gaming · Trending", hashtag: "#GTA6", posts: "104K posts" },
  { category: "World News · Trending", hashtag: "#ClimateChange", posts: "58.3K posts" },
  { category: "Music · Trending", hashtag: "#TaylorSwift", posts: "220K posts" },
  { category: "Finance · Trending", hashtag: "#Bitcoin", posts: "31.7K posts" },
  { category: "Science · Trending", hashtag: "#SpaceX", posts: "12.4K posts" },
  { category: "Food · Trending", hashtag: "#VeganLife", posts: "9.8K posts" },
  { category: "Movies · Trending", hashtag: "#Deadpool3", posts: "72.1K posts" },
  { category: "Fashion · Trending", hashtag: "#ParisFashionWeek", posts: "25.3K posts" }
];

const Right = () => {
  const [openSubscription, setOpenSubscription] = useState(false);
  const [visibleTrends, setVisibleTrends] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const shuffledTrends = [...allTrends].sort(() => 0.5 - Math.random());
    setVisibleTrends(shuffledTrends.slice(0, 5));
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleThemeChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTrends = visibleTrends.filter(
    (trend) =>
      trend.hashtag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trend.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`py-5 position-sticky top-0 ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="position-relative d-flex align-items-center mb-4">
        <input
          type="text"
          className="form-control rounded-pill ps-5 py-2 search-input"
          placeholder="Search trends"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <SearchIcon className="position-absolute search-icon" />
        <Brightness4Icon
          className="ms-3 cursor-pointer"
          onClick={handleThemeChange}
        />
      </div>

      <section className="my-4">
        <h1 className="fs-5 fw-bold">Get verified</h1>
        <h2 className="fw-bold my-2">Subscribe to unlock new features</h2>
        <button className="btn btn-primary rounded-pill px-4 py-2" onClick={() => setOpenSubscription(true)}>
          Get Verified
        </button>
      </section>

      <section className="mt-4">
        <h1 className="fw-bold fs-5 py-1">What's happening</h1>

        {filteredTrends.length > 0 ? (
          filteredTrends.map((trend, index) => (
            <div key={index} className="d-flex justify-content-between align-items-start w-100 py-2">
              <div>
                <p className="text-muted small mb-1">{trend.category}</p>
                <p className="fw-bold">{trend.hashtag}</p>
                {trend.posts && <p className="text-muted small mb-0">{trend.posts}</p>}
              </div>
              <MoreHorizIcon />
            </div>
          ))
        ) : (
          <p className="text-muted">No matching trends found</p>
        )}
      </section>

      <section>
        <Subscription open={openSubscription} handleClose={() => setOpenSubscription(false)} />
      </section>
    </div>
  );
};

export default Right;
