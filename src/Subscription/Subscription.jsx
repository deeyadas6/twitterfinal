import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import IconButton from '@mui/material/IconButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  outline: 'none',
};

export default function Subscription({handleClose,open}) {
 
  const [plan, setPlan] = useState("Annually");

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex align-items-center gap-3">
            <IconButton onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <p className="mb-0 fw-bold">Edit Profile</p>
          </div>

          <div className="d-flex justify-content-center py-4">
            <div className="w-75">
              <div className="p-3 rounded shadow-lg d-flex align-items-center justify-content-between bg-secondary text-white">
                <h1 className="fs-5 pe-3">
                  Blue subscribers with a verified phone number will get a blue checkmark once approved
                </h1>
                <img className="img-fluid" style={{ width: '100px', height: '100px' }} 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3yHNnmtMJmvbHeGrOVw_hq-tWodT6w4wNw&s" 
                  alt="Subscription" />
              </div>

              <div className="d-flex justify-content-between border rounded-pill px-3 py-2 mt-4">
                <div>
                  <span 
                    onClick={() => setPlan("Annually")} 
                    className={`me-3 ${plan === "Annually" ? "text-dark fw-bold" : "text-secondary"} cursor-pointer`}>
                    Annually
                  </span>
                  <span className="text-success small fw-bold">
                    SAVE 12%
                  </span>
                </div>
                <p 
                  onClick={() => setPlan("Monthly")} 
                  className={`${plan === "Monthly" ? "text-dark fw-bold" : "text-secondary"} cursor-pointer`}>
                  Monthly
                </p>
              </div>

              <div className="mt-4">
                <div className="d-flex align-items-center mb-2">
                  <FiberManualRecordIcon sx={{ width: "7px", height: "7px" }} />
                  <p className="ms-2 mb-0">Prioritized rankings in conversations and search</p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <FiberManualRecordIcon sx={{ width: "7px", height: "7px" }} />
                  <p className="ms-2 mb-0">See approximately twice as many tweets between ads in your "For You" and "Following" timelines</p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <FiberManualRecordIcon sx={{ width: "7px", height: "7px" }} />
                  <p className="ms-2 mb-0">Add bold and italic text in your tweets</p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <FiberManualRecordIcon sx={{ width: "7px", height: "7px" }} />
                  <p className="ms-2 mb-0">Post longer videos and 1080P video uploads</p>
                </div>
              </div>

              <div className="d-flex justify-content-center mt-4">
                <div className="d-flex align-items-center bg-dark text-white rounded-pill px-4 py-2">
                  <span className="text-decoration-line-through fst-italic me-3">₹7,800</span>
                  <span>₹6,800/year</span>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
