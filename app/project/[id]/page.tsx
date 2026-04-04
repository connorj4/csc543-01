import React from "react";
//import { Project } from '@/types/types';
import { TODOS } from "@/library/todo-data";
import { getProjectById } from "@/library/projects-data";
/*
 * This is the ProjectPage component, which displays the details of a specific project based on the provided ID.
 * It fetches the project data using the getProjectById function and displays the project's title, description, and associated todos.
 * If the project is not found, it displays a "Project not found" message.
 * The component also includes styling using Tailwind CSS classes for layout and design.
 */
// Define the type for the component props, which includes the project ID extracted from the URL parameters
type ProjectPageProps = {
  params: {
    id: number;
  };
};

// Define the ProjectPage component as an asynchronous function that takes the project ID from the URL parameters, fetches the project data, and renders the project details and associated todos
const ProjectPage: React.FC<ProjectPageProps> = async ({
  params,
}: ProjectPageProps) => {
  const { id } = await params; // Extract the id from the params by destructuring
  console.log("Project Slug: ", id); // Log the project slug (ID) to the console for debugging purposes
  const project = await getProjectById(+id); // Fetch the project data using the getProjectById function, passing the id as a number (using the unary plus operator to convert it from a string)
  console.log("Project Data: ", project); // Log the fetched project data to the console for debugging purposes
  if (!project) {
    // If the project is not found, return a message indicating that the project was not found
    return <div>Project not found</div>;
  }

  const projectTodos = TODOS.filter((todo) => todo.project === +id); // Filter the TODOS array to get the todos associated with the current project by matching the project ID
  console.log("Project Todos: ", projectTodos);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>{project.title}</h1>
        <h2 className="text-lg font-semibold mb-4">Internal Project Data</h2>

        <dl className="divide-y divide-gray-200 border-t border-gray-200">
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium">ID:</dt>
            <dd className="mt-1 text-sm  sm:col-span-2 sm:mt-0">
              {project.id}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium ">TITLE</dt>
            <dd className="mt-1 text-smsm:col-span-2 sm:mt-0">
              {project.title}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium ">DESCRIPTION</dt>
            <dd className="mt-1 text-sm  sm:col-span-2 sm:mt-0">
              {project.description}
            </dd>
          </div>
        </dl>

        <div className="my-6 flex items-center justify-center gap-2">
          {/* Display the list of todos associated with the project by mapping over the projectTodos array and rendering each todo's title, description, status, and completion status in a styled card format using Tailwind CSS classes for layout and design */}
          {projectTodos.map((index) => (
            <div
              className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white"
              key={index.id}
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-800">
                  {index.title}
                </div>
                <p className="text-gray-700 text-base">{index.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Status: {index.status}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Completed: {index.completed ? "Yes" : "No"}{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
        <hr />
      </main>
    </div>
  );
};

export default ProjectPage;
