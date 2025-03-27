import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, TextField, IconButton } from '@mui/material';
import "../App.css";
export default function ProfileModel({ open, handleClose }) {
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (event) => {
    setUploading(true);
    const { name } = event.target;
    const file = event.target.files;
    formik.setFieldValue(name, file);
    setUploading(false);
  };

  const handleSubmit = (values) => {
    console.log("submitted", values);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      website: "",
      location: "",
      bio: "",
      backgroundImage: "",
      image: ""
    },
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <Modal show={open} onHide={handleClose} centered>
        <Modal.Body className="p-4 rounded">
          <Form onSubmit={formik.handleSubmit}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-3">
                <IconButton onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <p className="mb-0 fw-bold">Edit Profile</p>
              </div>
              <Button type="submit">Save</Button>
            </div>

            <div className="overflow-auto" style={{ maxHeight: "70vh" }}>
              <div className="w-100 position-relative">
                <img
                  className="w-100 rounded"
                  style={{ height: "12rem", objectFit: "cover" }}
                  src="https://cdn.pixabay.com/photo/2021/10/11/17/38/light-6701427_1280.jpg"
                  alt="Background"
                />
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                  name="backgroundImage"
                />
              </div>

              <div className="position-relative" style={{ transform: "translateY(-50%)", marginLeft: "1rem" }}>
                <Avatar
                  sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                  src="https://images.pexels.com/photos/31280266/pexels-photo-31280266/free-photo-of-curved-architectural-shadows-in-abstract-light.jpeg"
                />
                <input
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                  onChange={handleImageChange}
                  name="image"
                  type="file"
                />
              </div>

              <div className="mt-3">
                <TextField fullWidth id="fullName" name="fullName" label="Full Name" value={formik.values.fullName} onChange={formik.handleChange} error={formik.touched.fullName && Boolean(formik.errors.fullName)} helperText={formik.touched.fullName && formik.errors.fullName} />

                <TextField fullWidth multiline rows={4} id="bio" name="bio" label="Bio" value={formik.values.bio} onChange={formik.handleChange} error={formik.touched.bio && Boolean(formik.errors.bio)} helperText={formik.touched.bio && formik.errors.bio} className="mt-3" />

                <TextField fullWidth id="website" name="website" label="Website" value={formik.values.website} onChange={formik.handleChange} error={formik.touched.website && Boolean(formik.errors.website)} helperText={formik.touched.website && formik.errors.website} className="mt-3" />

                <TextField fullWidth id="location" name="location" label="Location" value={formik.values.location} onChange={formik.handleChange} error={formik.touched.location && Boolean(formik.errors.location)} helperText={formik.touched.location && formik.errors.location} className="mt-3" />

                <div className="my-3">
                  <p className="fw-bold">Birth date · Edit</p>
                  <p className="fs-5">May 26, 2020</p>
                </div>

                <p className="fw-bold">Edit Professional Profile</p>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
