'use client';
import React from 'react';
import Branding from './branding';
import Nav from './nav';

const Header:React.FC = () => {
  return (
    <header className="w-full py-4 border-b border-gray-700 flex flex-row items-center justify-between px-8">
      <div className="flex flex-row content-end items-center">
        <Branding />
        <h4 className="text-2xl font-bold text-white ml-4">Task App</h4>
      </div>
      <Nav />
    </header>
    );
}
export default Header;
