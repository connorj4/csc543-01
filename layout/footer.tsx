'use client';
import React from 'react';
import DateUtils from '@/utils/dates';

const Footer:React.FC = () => {
  return (
    <footer className="w-full bg-zinc-800 flex justify-center px-8 align-bottom ">
      <div className="bg-green-300 p-4 rounded-md">
        <p className="text-sm text-gray-600">
          &copy; {DateUtils.nowDate()} Task App. All rights reserved.
        </p>  
      </div>
      </footer>
    );
}
export default Footer;
