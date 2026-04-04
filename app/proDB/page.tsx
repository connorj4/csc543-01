"use client";
import React from "react";
import { useProjectsData } from "@/hooks/projects"; // Import the custom hook to fetch project data
import SkeletonUI from "@/layout/ui/skeleton"; // Import the custom hook to fetch project data
import AddProject from "@/components/forms/addprojects"; // Import the AddProject component to add new projects
/*
 * This is the ProDB page of the application.
 * It demonstrates the use of a custom hook to fetch project data from a MongoDB database.
 * The page displays a list of projects, and includes a form to add new projects.
 * It also handles loading and error states when fetching data.
 */
 
const ProDBPage: React.FC = () => {
  const { data: projects, isLoading, error } = useProjectsData(); // Use the custom hook to fetch project data
  // Handle loading state
  if (isLoading) {
    return <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h3>Loading...</h3>
        <SkeletonUI loading={isLoading} /> 
        </div>;
  }
  // Handle error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  // Render the list of projects and the AddProject form
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <div className="mb-8">
        
        <h1 className="text-4xl font-bold mb-8">Mongo Projects</h1>
        {/* Display the list of projects if available, otherwise show a message indicating no projects found */}
        {projects && projects.length > 0 ? (
          <ul className="list-disc pl-5 my-3">
            {projects.map((project) => (
              <li key={project._id.toString()} className="mb-2">
                {project.title}
              </li>
            ))}
          </ul>
        ) : (
          <p>No projects found.</p>
        )}
        </div>
        <div className="flex w-full items-center justify-between border-t border-gray-300 pt-6">
          <AddProject /> {/* Render the AddProject component to allow adding new projects */}
        </div>
      </main>
    </div>
  );
};

export default ProDBPage;
