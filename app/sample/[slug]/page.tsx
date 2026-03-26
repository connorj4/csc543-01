// app/projects/[slug]page.tsx (dynamic project page & server component)

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
  console.log('Params: ', params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${slug}`,
  );
  const data = await response.json();

  console.log('Project Data: ', data);
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
