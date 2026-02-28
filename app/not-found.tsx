import React from "react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mt-4 text-lg">
          The page you are looking for does not exist.
        </p>
      </main>
    </div>
  );
}
