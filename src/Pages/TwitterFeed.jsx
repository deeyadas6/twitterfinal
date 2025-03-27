import React, { useEffect, useState } from "react";
import axios from "axios";
import TweetCard from "./TweetCard";

const TweetFeed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/tweets")
      .then(response => setTweets(response.data))
      .catch(error => console.error("Error fetching tweets:", error));
  }, []);

  return (
    <div>
      {tweets.map(tweet => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetFeed;
