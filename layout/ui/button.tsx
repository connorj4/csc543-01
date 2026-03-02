"use client";
import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";
import Button from "@mui/material/Button";

const ButtonUI = ({children, onClick}: {children: React.ReactNode, onClick: () => void}) => {
  return (
    <div>
      <Button variant="contained" onClick={onClick}> {children}  <FaCircleChevronRight /> </Button>
    </div>
  );
};
export default ButtonUI;
