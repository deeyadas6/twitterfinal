import * as React from "react";
import Box from "@mui/material/Box";
import ImageIcon from "@mui/icons-material/Image";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ReplyModel({ handleClose, open, onComment }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: (values) => {
      if (values.content.trim() !== "") {
        onComment({
          username: "Deeya", // Mocked user for now
          userProfile: "https://images.pexels.com/photos/31280266/pexels-photo-31280266/free-photo-of-curved-architectural-shadows-in-abstract-light.jpeg",
          text: values.content,
        });
      }
      handleClose();
    },
  });

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="reply-modal">
      <Box sx={style}>
        <div className="d-flex gap-3">
          <Avatar>
            <img src="https://images.pexels.com/photos/31280266/pexels-photo-31280266/free-photo-of-curved-architectural-shadows-in-abstract-light.jpeg" alt="Profile Avatar" />
          </Avatar>

          <div className="flex-grow-1">
            <form onSubmit={formik.handleSubmit}>
              <input
                type="text"
                name="content"
                placeholder="Write a comment..."
                className="form-control border-0"
                {...formik.getFieldProps("content")}
              />

              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="d-flex gap-3">
                  <label className="icon-label">
                    <ImageIcon className="icon-style" />
                    <input type="file" className="d-none" />
                  </label>
                </div>

                <Button className="tweet-btn" variant="contained" type="submit">
                  Reply
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
