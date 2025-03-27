import React from 'react';
import { useNavigate } from 'react-router-dom';
import TweetCard from './TweetCard';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const TweetDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <React.Fragment>
      <section className="position-static top-0 d-flex align-items-center bg-white py-3 border-bottom" style={{ zIndex: 1000 }}>
        <KeyboardBackspaceIcon className="cursor-pointer me-3" onClick={handleBack} />
        <h1 className="fw-bold opacity-90 m-0 flex-grow-1 text-center">Tweet</h1>
      </section>
      
      <section>
        <TweetCard />
        <hr className="my-3" />
      </section>
      
      <section>
        {[1, 1, 1].map((_, index) => (
          <TweetCard key={index} />
        ))}
      </section>
    </React.Fragment>
  );
};

export default TweetDetails;
