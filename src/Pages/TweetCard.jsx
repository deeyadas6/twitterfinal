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

const TweetCard = ({ tweet, user, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [liked, setLiked] = useState(false);
  const [retweets, setRetweets] = useState(tweet.retweets || 0);
  const [likes, setLikes] = useState(tweet.likes || 0);
  const [openReplyModel, setOpenReplyModel] = useState(false);
  const [comments, setComments] = useState(tweet.comments || []); 

  const handleOpenReplyModel = () => setOpenReplyModel(true);
  const handleCloseReplyModel = () => setOpenReplyModel(false);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleRetweet = () => setRetweets(retweets + 1);
  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]); 
  };

  return (
    <div className="tweet-card mb-4 p-3 border rounded">
      <div className="d-flex gap-3">
        <Avatar src={user.profilePicture} alt={user.fullName} />
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2 cursor-pointer">
              <span className="username fw-bold d-block">{user.fullName}</span>
              <span className="text-muted">@{user.username}</span>
              <span className="text-muted">• {tweet.timestamp}</span>
            </div>

            <div>
              <Button onClick={handleClick} className="more-options">
                <MoreHorizIcon />
              </Button>

              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem
                  onClick={() => {
                    onDelete(tweet.id);
                    handleClose();
                  }}
                >
                  Delete
                </MenuItem>
              </Menu>
            </div>
          </div>

          <div className="content-container">
            <p className="mb-2">{tweet.text}</p>
            {tweet.image && <img src={tweet.image} className="tweet-img" alt="Tweet" />}
          </div>

          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex align-items-center gap-3 text-muted">
              <div className="d-flex align-items-center gap-2">
                <ChatIcon className="cursor-pointer" onClick={handleOpenReplyModel} />
                <span>{comments.length}</span>
              </div>

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

          <div className="comments-section">
  {Array.isArray(tweet.comments) && tweet.comments.length > 0 ? (
    tweet.comments.map((comment, index) => (
      <div key={index} className="comment">
        <strong>{comment.username}</strong>: {comment.text}
      </div>
    ))
  ) : (
    <p className="text-muted"></p>
  )}
</div>
        </div>
      </div>

      <ReplyModel open={openReplyModel} handleClose={handleCloseReplyModel} onComment={handleAddComment} />
    </div>
  );
};

export default TweetCard;
