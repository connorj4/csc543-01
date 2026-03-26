import React from "react";
import { PROJECTS } from "@/library/projects-data";
import Link from "next/link";

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <ul className="list-disc pl-5 my-3">
          {PROJECTS.map((project) => (
            <li key={project.id} className="mb-2">
              <Link className="text-amber-400 hover:underline" href={`/project/${project.id}`}>{project.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ProjectsPage;