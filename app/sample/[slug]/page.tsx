import React from "react"; // Import React library for building the component
/*
 * This is the ProjectPage component, which displays the details of a specific project based on the provided ID.
 * It fetches the project data from an external API using the provided slug parameter and displays the project's title, completion status, and user ID.
 * If the project data is not available, it displays default messages indicating that the title is not available and the user ID is unknown.
 * The component also includes styling using Tailwind CSS classes for layout and design.
 */

// Define the types for the parameters
type TodoSampleProps = {
  params: {
    slug: number;
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
};

const ProjectPage: React.FC<TodoSampleProps> = async ({
  params,
}: TodoSampleProps) => {
  
  const { slug } = params; // Extract the id from the params by destructuring
  console.log('Params: ', params); // Log the project slug (ID) to the console for debugging purposes
  // Fetch the project data from the external API using the slug parameter
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${slug}`,
  );
  const data = await response.json(); // Parse the response data as JSON and store it in the data variable  

  console.log('Project Data: ', data); // Log the fetched project data to the console for debugging purposes
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Project: {data.title? data.title : "No Title Available"}</h1>
        <p>Completed: {data.completed ? "Yes" : "No"}</p>
        <p>User ID: {data.userId ? String(data.userId) : "Unknown"}</p>
      
      </main>
    </div>
  );
};

export default ProjectPage;
