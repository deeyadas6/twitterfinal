import { useState, useCallback, lazy, Suspense, useMemo } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignIn = lazy(() => import("./SignIn"));
const SignUp = lazy(() => import("./SignUp"));

const Authentication = ({ onAuthSuccess }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleAuthSuccess = useCallback(
    (userData) => {
      localStorage.setItem("auth", "true");
      onAuthSuccess(userData);
      navigate("/home");
    },
    [onAuthSuccess, navigate]
  );

  const modalContent = useMemo(
    () => (
      <Suspense fallback={<div>Loading...</div>}>
        {isSignUp ? (
          <SignUp handleClose={() => setOpenModal(false)} onAuthSuccess={handleAuthSuccess} />
        ) : (
          <SignIn handleClose={() => setOpenModal(false)} onAuthSuccess={handleAuthSuccess} />
        )}
      </Suspense>
    ),
    [isSignUp, handleAuthSuccess]
  );

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-12 col-lg-6 p-0">
          <img
            src="https://deadline.com/wp-content/uploads/2023/07/x-twitter-logo.jpg?w=1024"
            className="w-100 vh-100 object-fit-cover"
            alt="Background"
            loading="lazy"
          />
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
          <div className="text-center w-75">
            <h1 className="fw-bold display-3">Happening now</h1>
            <h1 className="fw-bold h3 my-4">Join Twitter Today</h1>
          
            <Button
              onClick={() => {
                setIsSignUp(true);
                setOpenModal(true);
              }}
              variant="primary"
              className="w-100 rounded-pill py-2"
            >
              Create Account
            </Button>
            <p className="text-muted small mt-2">
              By signing up, you agree to the terms of service and privacy policy, including cookie use.
            </p>
            <p className="text-muted fw-bold">OR</p>
            <div className="mt-4">
              <h2 className="fw-bold h5">Already Have an Account?</h2>
              <Button
                onClick={() => {
                  setIsSignUp(false);
                  setOpenModal(true);
                }}
                variant="outline-primary"
                className="w-100 rounded-pill py-2"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={openModal} onHide={() => setOpenModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isSignUp ? "Create an Account" : "Sign In"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
      </Modal>
    </div>
  );
};

export default Authentication;
