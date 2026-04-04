"use client";
import React, { useEffect, useState } from "react";
/*
 * Footer component renders a footer section for the application, displaying the current date and time.
 * It uses React's useState and useEffect hooks to manage and update the time state every second.
 * The time is displayed in a formatted manner using toLocaleDateString and toLocaleTimeString methods.
 * The footer is styled with Tailwind CSS classes to create a visually appealing layout.
 * This component can be used at the bottom of the application to provide users with real-time information about the current date and time, enhancing the user experience.
 */

const Footer: React.FC = () => {
  const [time, setTime] = useState<Date | null>(null); // State to hold the current date and time, initialized to null

  useEffect(() => {
    const tick = () => {
      setTime(new Date()); // Updating the time state with the current date and time every second
    };

    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval); // Cleanup function to clear the interval when the component unmounts to prevent memory leaks
  }, []);

  return (
    <footer className="w-full bg-zinc-800 flex justify-center px-8 align-bottom ">
      <div className="bg-green-300 p-4 rounded-md">
        <p className="text-sm text-gray-600">
          &copy; {time ? time.toLocaleDateString() : "—"}{" "}
          {time ? time.toLocaleTimeString() : "—"} Task App. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
