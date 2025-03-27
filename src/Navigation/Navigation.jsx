import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { NavigationMenu } from "./NavigationMenu";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleClick = useCallback((event) => setAnchorEl(event.currentTarget), []);
  const handleClose = useCallback(() => setAnchorEl(null), []);
  const handleLogout = useCallback(() => {
    onLogout();
    navigate("/");
  }, [onLogout, navigate]);

  return (
    <div className={`nav-container d-flex flex-column align-items-start ${isDarkMode ? "dark-mode" : ""}`}>
      
      <div className="nav-header d-flex align-items-center w-100 px-3 py-2">
        <XIcon className="x-icon me-3" />
      </div>

    
      <div className="nav-menu w-100 px-3">
        {NavigationMenu.map((item, index) => (
          <div
            key={index}
            className={`nav-item d-flex align-items-center py-2 ${location.pathname === item.path ? "active-nav-item" : ""}`}
            onClick={() => navigate(item.path)}
          >
            <div className="nav-icon me-2">{item.icon}</div>
            <p className="m-0">{item.title}</p>
          </div>
        ))}
      </div>

      
      <div className="tweet-btn-container w-100 px-3 mt-3">
        <button className="btn btn-primary w-100 rounded-pill py-2" onClick={() => navigate("/home")}>
          Tweet
        </button>
      </div>

      
      <div className="user-profile d-flex align-items-center w-100 mt-auto px-3 py-2">
        <Avatar className="profile-avatar me-2">
          <img src="https://i.pravatar.cc/150?img=5" alt="Profile Avatar" />
        </Avatar>
        <div className="user-details flex-grow-1">
          <span className="username fw-bold d-block">{user?.fullName || "Unknown"}</span>
          <span className="text-muted">@{user?.fullName?.split(" ").join("_").toLowerCase() || "unknown_user"}</span>
        </div>
        <Button id="basic-button" onClick={handleClick} className="more-options">
          <MoreHorizIcon />
        </Button>
      </div>

      
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Navigation;
