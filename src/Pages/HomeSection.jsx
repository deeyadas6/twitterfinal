import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Avatar, Button } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TwitterCard from "./TwiiterCard";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});

const HomeSection = () => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedTweets = localStorage.getItem("tweets");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedTweets) setTweets(JSON.parse(storedTweets));
  }, []);

  useEffect(() => {
    if (tweets.length > 0) {
      localStorage.setItem("tweets", JSON.stringify(tweets));
    }
  }, [tweets]);

  const handleSubmit = (values, { resetForm }) => {
    const newTweet = {
      id: Date.now(),
      text: values.content,
      image: selectedImage,
      likes: 0,
      retweets: 0,
      comments: [],
    };

    const updatedTweets = [newTweet, ...tweets];
    setTweets(updatedTweets);
    localStorage.setItem("tweets", JSON.stringify(updatedTweets));
    resetForm();
    setSelectedImage(null);
  };

  const formik = useFormik({
    initialValues: { content: "" },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleDeleteTweet = (id) => {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== id);
    setTweets(updatedTweets);
    localStorage.setItem("tweets", JSON.stringify(updatedTweets));
  };

  const handleEditTweet = (id, newText) => {
    const updatedTweets = tweets.map((tweet) =>
      tweet.id === id ? { ...tweet, text: newText } : tweet
    );
    setTweets(updatedTweets);
    localStorage.setItem("tweets", JSON.stringify(updatedTweets));
  };

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(imgFile));
    setUploadingImage(false);
  };

  return (
    <div className={` ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="py-5 position-sticky top-0">
        {/* Profile Section */}
        <div className="profile-container mb-3">
          <Avatar className="profile-avatar">
            <img src="https://i.pravatar.cc/150?img=5" alt="Profile" />
          </Avatar>
          <span className="profile-name">{user?.fullName || "Unknown"}</span>
        </div>

        {/* Tweet Input Section */}
        <div className="tweet-input-container">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-2 input-wrapper">
              <input
                type="text"
                name="content"
                placeholder="What is happening?"
                className="form-control border-0 tweet-input"
                {...formik.getFieldProps("content")}
              />
              {formik.errors.content && formik.touched.content && (
                <span className="text-danger small">{formik.errors.content}</span>
              )}
            </div>

            {selectedImage && (
              <div className="mt-2">
                <img src={selectedImage} alt="Selected" className="img-fluid rounded tweet-img" />
              </div>
            )}

            <div className="d-flex justify-content-between align-items-center mt-3">
             
              <div className="d-flex gap-3">
                <label className="icon-label">
                  <ImageIcon className="icon-style" />
                  <input type="file" name="imagefile" className="d-none" onChange={handleSelectImage} />
                </label>
                <FmdGoodIcon className="icon-style" />
                <TagFacesIcon className="icon-style" />
              </div>

              <Button
                className="tweet-btn"
                variant="contained"
                type="submit"
                disabled={uploadingImage || formik.isSubmitting}
              >
                Tweet
              </Button>
            </div>
          </form>
        </div>

      
        <section>
          {tweets.map((tweet) => (
            <TwitterCard key={tweet.id} tweet={tweet} user={user} onDelete={handleDeleteTweet} onEdit={handleEditTweet} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default HomeSection;
