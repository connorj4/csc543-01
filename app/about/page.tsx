"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
/**
 * About page component
 * This component represents the About page of the application. It includes an image, a title, a description, and buttons to increment and decrement a count. The count is displayed on the page and can be updated by clicking the buttons. The component uses React state to manage the count and Material UI for styling the buttons.
 * 
 * @returns {JSX.Element} The About page component  
 * 
 */
const About: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        {/* Image is a nextjs Image component */}
        <Image
          src="/my-profit-tutor-ZfRWq1bRisE-unsplash.jpg"
          alt="About Image"
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="/my-profit-tutor-ZfRWq1bRisE-unsplash-blur.jpg"
        />
        <p className="mt-4 text-lg">This is the about page of the application.</p>

        <div className="flex space-x-4">
          <div className="flex">The Count is {count}</div>
          <div>
            <Button variant="contained" onClick={() => setCount(count + 1)}>
              Increment
            </Button>
          </div>
          <div>
            <Button variant="contained" onClick={() => setCount(count - 1)}>
              Decrement
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
export default About;
