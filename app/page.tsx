import React from "react";

import User from "@/components/user";
import Link from 'next/link';

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const data = await response.json();
  return data;
}

const Home: React.FC = async() => {
  const posts = await getPosts();

  console.log('Posts: ',posts);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

       <User userName="Student Name" userType="Admin" />

      
       <ul className="list-disc pl-5 my-3">
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="mb-2">
            <Link className="text-amber-400 hover:underline" href={`/projects/${post.id}`}>{post.title}</Link>
          </li>
        ))}
         
       </ul>
         
      </main>
    </div>
  );
}

export default Home;
