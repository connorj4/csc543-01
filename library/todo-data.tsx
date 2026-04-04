import { Todo } from "@/types/types";
/**
 * Todos data for the application.
 * Each item in the TODOS array represents a todo item with properties such as userId, id, project, title, description, completed status, and status.
 * The userId is the identifier of the user associated with the todo item, the id is a unique identifier for the todo item itself, the project is the identifier of the project to which the todo item belongs, the title is a brief description of the task to be completed, the description provides more details about the task, the completed property indicates whether the task has been completed or not, and the status indicates the current state of the task (e.g., "pending", "new", etc.).
 * This array can be used to dynamically generate todo lists or task details in the application, allowing for easy updates and maintenance of the todo data.
 * @constant {Todo[]} TODOS - An array of todo items, where each item is an object containing properties such as userId, id, project, title, description, completed status, and status for use in the application's todo lists and task management features.
 * @type {Todo[]}
 * @example
 * const TODOS: Todo[] = [
 *   {
 *     userId: 1,
 *     id: 1,
 *     project: 1,
 *     title: "delectus aut autem",
 *     description: "This is a sample todo item.",
 *     completed: false,
 *     status: "pending"
 *   },
 *   {
 *     userId: 1,
 *     id: 2,
 *     project: 1,
 *     title: "delectus aut autem",
 *     description: "This is a sample todo item.",
 *     completed: false,
 *     status: "new"
 *   },
 * ];
 */

export const TODOS: Todo[] = [
    {
        userId: 1,
        id: 1,
        project: 1,
        title: "delectus aut autem",
        description: "This is a sample todo item.",
        completed: false,
        status: "pending"   
    },
    {
        userId: 1,
        id: 2,
        project: 1,
        title: "delectus aut autem",
        description: "This is a sample todo item.",
        completed: false, 
        status: "new"  
    },
    {
        userId: 1,
        id: 3,
        project: 2,
        title: "delectus aut autem",
        description: "This is a sample todo item.",
        completed: false, 
        status: "new"  
    },
    {
        userId: 1,
        id: 4,
        project: 2,
        title: "delectus aut autem",
        description: "This is a sample todo item.",
        completed: false, 
        status: "new"  
    },
    {
        userId: 1,
        project: 2,
        id: 5,
        title: "delectus aut autem",
        description: "This is a sample todo item.",
        completed: false, 
        status: "new"  
    },
];