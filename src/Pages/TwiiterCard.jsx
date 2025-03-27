import React, { useState } from "react";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import ReplyModel from "./ReplyModel";

const TwitterCard = ({ tweet, user, onDelete, onEdit }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [liked, setLiked] = useState(false);
  const [retweets, setRetweets] = useState(tweet.retweets || 0);
  const [likes, setLikes] = useState(tweet.likes || 0);
  const [openReplyModel, setOpenReplyModel] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tweet.text);

  const handleOpenReplyModel = () => setOpenReplyModel(true);
  const handleCloseReplyModel = () => setOpenReplyModel(false);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleRetweet = () => setRetweets(retweets + 1);
  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    handleClose();
  };

  const handleSaveEdit = () => {
    onEdit(tweet.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="tweet-card">
      <div className="d-flex gap-3">
        <Avatar>
          <img src="https://images.pexels.com/photos/31280266/pexels-photo-31280266/free-photo-of-curved-architectural-shadows-in-abstract-light.jpeg" alt="Profile Avatar" />
        </Avatar>

        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2 cursor-pointer">
              <span className="username fw-bold d-block">{user?.fullName || "Unknown"}</span>
              <span className="text-muted">@{user?.fullName?.split(" ").join("_").toLowerCase() || "unknown_user"}</span>
            </div>

            <div>
              <Button
                id="basic-button"
                aria-controls={anchorEl ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={anchorEl ? "true" : undefined}
                onClick={handleClick}
                className="more-options"
              >
                <MoreHorizIcon />
              </Button>

              <Menu id="basic-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleEditClick}>Edit</MenuItem>
                <MenuItem onClick={() => { onDelete(tweet.id); handleClose(); }}>Delete</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="content-container">
            {isEditing ? (
              <div>
                <input
                  type="text"
                  className="form-control"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <Button onClick={handleSaveEdit}>Save</Button>
              </div>
            ) : (
              <p className="mb-2">{tweet.text}</p>
            )}
            {tweet.image && <img src={tweet.image} className="tweet-img" alt="Tweet" />}
          </div>

          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex align-items-center gap-3 text-muted">
              <ChatIcon className="cursor-pointer" onClick={handleOpenReplyModel} />
              <span>{tweet.comments || 0}</span>

              <div className="d-flex align-items-center gap-2">
                <RepeatIcon className="cursor-pointer" onClick={handleRetweet} />
                <span>{retweets}</span>
              </div>

              <div className="d-flex align-items-center gap-2">
                {liked ? (
                  <FavoriteIcon className="text-danger cursor-pointer" onClick={handleLike} />
                ) : (
                  <FavoriteBorderIcon className="cursor-pointer" onClick={handleLike} />
                )}
                <span>{likes}</span>
              </div>

              <FileUploadIcon className="cursor-pointer" />
              <BarChartIcon className="cursor-pointer" />
              <span>10k</span>
            </div>
          </div>
        </div>
      </div>
      <ReplyModel open={openReplyModel} handleClose={handleCloseReplyModel} />
    </div>
  );
};

export default TwitterCard;
