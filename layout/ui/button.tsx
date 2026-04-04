"use client";
import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";
import Button from "@mui/material/Button";
/* * ButtonUI component renders a styled button using Material-UI's Button component.
 * It accepts children (the content to be displayed inside the button) and an onClick function as props.
 * The button displays the children content followed by a right-pointing chevron icon from react-icons.
 * This component can be used throughout the application wherever a styled button with an icon is needed, providing a consistent look and feel.
 */
const ButtonUI = ({children, onClick}: {children: React.ReactNode, onClick: () => void}) => {
  return (
    <div>
      <Button variant="contained" onClick={onClick}> {children}  <FaCircleChevronRight /> </Button>
    </div>
  );
};
export default ButtonUI;
