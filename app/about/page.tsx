"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";

const About: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        
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
