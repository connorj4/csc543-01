import React from 'react';
//import { Project } from '@/types/types';
import { TODOS } from '@/library/todo-data';
import { getProjectById } from '@/library/projects-data';

type ProjectPageProps = {
    params: {
        id: number;
    };
};

const ProjectPage: React.FC<ProjectPageProps> = async({ params }: ProjectPageProps) => {
    const { id } = await params; // Extract the id from the params by destructuring
    console.log('Project Slug: ', id);
    const project = await getProjectById(+id);
    console.log('Project Data: ', project);
    if (!project) {
        return <div>Project not found</div>;
    }

    const projectTodos = TODOS.filter(todo => todo.project === +id);
    console.log('Project Todos: ', projectTodos);   
    return (
            <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1>{project.title}</h1>
            <h2 className="text-lg font-semibold mb-4">Internal Project Data</h2>

<dl className="divide-y divide-gray-200 border-t border-gray-200">
  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="text-sm font-medium">ID:</dt>
    <dd className="mt-1 text-sm  sm:col-span-2 sm:mt-0">{project.id}</dd>
  </div>
  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="text-sm font-medium ">TITLE</dt>
    <dd className="mt-1 text-smsm:col-span-2 sm:mt-0">{project.title}</dd>
  </div>
  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="text-sm font-medium ">DESCRIPTION</dt>
    <dd className="mt-1 text-sm  sm:col-span-2 sm:mt-0">{project.description}</dd>
  </div>
</dl>

           
            <div className="my-6 flex items-center justify-center gap-2" >
                {projectTodos.map((index) => (
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white" key={index.id}>

  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-gray-800">{index.title}</div>
    <p className="text-gray-700 text-base">
      {index.description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Status: {index.status}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Completed: {index.completed ? 'Yes' : 'No'} </span>
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