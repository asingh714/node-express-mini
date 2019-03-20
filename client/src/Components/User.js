import React from "react";

const User = props => {
  const { name, bio } = props.user;
  return (
    <div className="user-container">
      <p>Name: {name}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default User;
