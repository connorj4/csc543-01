'use client'; // This component is a client-side component, as it uses React hooks and state management.
import React from "react"; // Importing React for creating the component and using hooks
import { UserProps } from "@/types/types"; // Importing the UserProps type definition from the specified path (assuming it defines the expected props for the User component)
/*
 * User component displays user information such as name and user type.
 * It accepts props defined in the UserProps interface, which includes userName and userType.
 * The component renders a simple UI with the user's name and their type (e.g., admin, regular user).
 * This component can be used in various parts of the application where user information needs to be displayed.
 */ 
const User: React.FC<UserProps> = ({ userName, userType }) => {
  return (
    <div>
      <h3> {userName} </h3>
      <p>User Type: {userType}</p>
    </div>
  );
};
export default User;