"use client";
import React from "react";
import { useProjectsData } from "@/hooks/projects";
import SkeletonUI from "@/layout/ui/skeleton";
import AddProject from "@/components/forms/addprojects";

const ProDBPage: React.FC = () => {
  const { data: projects, isLoading, error } = useProjectsData();

  if (isLoading) {
    return <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h3>Loading...</h3>
        <SkeletonUI loading={isLoading} /> 
        </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <div className="mb-8">
        
        <h1 className="text-4xl font-bold mb-8">Mongo Projects</h1>
  
        {projects && (
          <ul className="list-disc pl-5 my-3">
            {projects.map((project) => (
              <li key={project._id.toString()} className="mb-2">
                {project.title}
              </li>
            ))}
          </ul>
        )}
        </div>
        <div className="flex w-full items-center justify-between border-t border-gray-300 pt-6">
          <AddProject />
        </div>
      </main>
    </div>
  );
};

export default ProDBPage;
