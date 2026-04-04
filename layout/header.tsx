'use client';
import React from 'react';
import ResponsiveAppBar from './ui/menu';

const Header:React.FC = () => {
  return (
    <header className="w-full py-4 border-b border-gray-700 flex flex-row items-center justify-between px-8">
      <ResponsiveAppBar />
    </header>
    );
}
export default Header;
