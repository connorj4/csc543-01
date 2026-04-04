import React from "react";
/*
 * This is the NotFound component, which serves as a custom 404 error page for the application.
 * It displays a message indicating that the requested page was not found and provides a user-friendly interface for users who may have navigated to a non-existent route.
 * The component is styled using Tailwind CSS classes to ensure a consistent look and feel with the rest of the application.
 */
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
