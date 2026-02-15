'use client';
import React from "react";

const User: React.FC<{ userName: string; userType: string }> = ({ userName, userType }) => {
  return (
    <div>
      <h3> {userName} </h3>
      <p>User Type: {userType}</p>
    </div>
  );
};
export default User;