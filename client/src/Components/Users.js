import React from "react";

import User from "./User";

const Users = props => {
  return (
    <>
      {props.users.map(user => (
        <User user={user} />
      ))}
    </>
  );
};

export default Users;
