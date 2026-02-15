"use client";
import React from "react";
import Link from 'next/link';
// https://mui.com/material-ui/react-menu/ -- HOW TO USE MUI MENU COMPONENT --

const Header: React.FC = () => {
  return (
    <nav className="background-gray-800 p-4">
      <ul className="flex flex-row gap-4 ">
        <li className="border border-gray-700 rounded-md px-2 py-1">
          <Link href="/"> Home</Link>
        </li>
        <li className="border border-gray-700 rounded-md px-2 py-1">
          <Link href="/about"> About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
