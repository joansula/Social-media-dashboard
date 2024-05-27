import React, { useState } from "react";

export default function FollowButton() {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleClick = () => {
    setIsFollowed(!isFollowed);
  };

  return (
    <button
      className="btn btn-primary"
      style={{
        backgroundColor: isFollowed ? "#FFFFFF" : "#04A777",
        color: isFollowed ? "#04A777" : "#FFFFFF",
        border: `1px solid ${isFollowed ? "#04A777" : "#04A777"}`,
      }}
      onClick={handleClick}
    >
      {isFollowed ? "Followed" : "Follow"}
    </button>
  );
}
