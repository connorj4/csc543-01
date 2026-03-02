'use client';
import React, {useEffect, useState} from 'react';

const Footer:React.FC = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {


    const tick = () => {
      setTime(new Date());
    };

    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <footer className="w-full bg-zinc-800 flex justify-center px-8 align-bottom ">
      <div className="bg-green-300 p-4 rounded-md">
        <p className="text-sm text-gray-600">
          &copy; {time ? time.toLocaleDateString() : '—'} {/**time.toLocaleTimeString() **/} Task App. All rights reserved.
        </p>  
      </div>
      </footer>
    );
}
export default Footer;
