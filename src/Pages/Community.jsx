import React, { useState } from "react";
import { users, tweets } from "./Data";
import TweetCard from "./TweetCard"; 
import "../App.css";

const Community = () => {
  const [tweetList, setTweetList] = useState(tweets);

  const handleDelete = (tweetId) => {
    setTweetList(tweetList.filter((tweet) => tweet.id !== tweetId));
  };

  return (
    <div className="container d-flex flex-column align-items-center">
    <h1 className="text-center">Community</h1>
    <div className="tweets-list w-90">
      {tweetList.map((tweet) => {
        const user = users.find((u) => u.id === tweet.userId) || {
          fullName: "Unknown User",
          username: "unknown",
          profilePicture: "https://via.placeholder.com/150",
        };
  
        return <TweetCard key={tweet.id} tweet={tweet} user={user} onDelete={handleDelete} />;
      })}
    </div>
  </div>
  );
};

export default Community;
