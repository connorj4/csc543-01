import React from "react"; // Import React library for building the component
import { PROJECTS } from "@/library/projects-data"; // Import the PROJECTS data from the projects-data library
import Link from "next/link"; // Import Link component from Next.js for client-side navigation
/*
 * This is the ProjectsPage component, which displays a list of projects.
 * It uses the PROJECTS data to render a list of project titles, each of which is a link to the corresponding project page.
 * The component is styled using Tailwind CSS classes for layout and design.
 */
// Define the ProjectsPage component as a functional component that renders a list of projects with links to their respective pages using the Link component from Next.js for client-side navigation

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <ul className="list-disc pl-5 my-3">
          {/* Map over the PROJECTS array to render a list of project titles, each wrapped in a Link component that navigates to the corresponding project page based on the project's ID. The Link component is styled with Tailwind CSS classes for visual appeal and interactivity. */ }
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