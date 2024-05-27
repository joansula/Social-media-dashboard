import React, { useEffect, useState } from "react";
import FollowButton from "./FollowButton";

export default function Newfollowers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const userData = data.users.map((user) => ({
          username: user.username,
        }));
        setUsers(userData);
      });
  }, []);

  return (
    <div className="card overflow-auto shadow small-card">
      <div className="card-body">
        <div className="card-title">
          <p className="fw-light fs-4">New Followers</p>
        </div>
        <ol className="list-group list-group-numbered">
          {users.map((user, index) => (
            <li
              key={index}
              className="d-flex justify-content-between align-items-center mb-3 list-group-item"
            >
              <span>{user.username}</span>
              <FollowButton />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
