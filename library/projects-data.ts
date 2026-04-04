
import { Project } from "@/types/types";

/**
 * Projects data for the application.
 * Each item in the PROJECTS array represents a project with an id, title, description, image URL, and tags.
 * The id is a unique identifier for the project, the title is the name of the project, the description provides a brief overview of the project, the imageUrl is the path to an image representing the project, and the tags are an array of technologies or concepts associated with the project.
 * This array can be used to dynamically generate project listings or details in the application, allowing for easy updates and maintenance of the project data.
 * @constant {Project[]} PROJECTS - An array of project objects, where each object contains an id, title, description, imageUrl, and tags for use in the application's project listings.
 * @type {Project[]}
 * @example
 * const PROJECTS: Project[] = [
 *   {
 *     id: 1,
 *     title: "Project One",
 *     description: "This is the first project.",
 *     imageUrl: "/images/project-one.png",
 *     tags: ["React", "TypeScript"],
 *   },
 *   {
 *     id: 2,
 *     title: "Project Two",
 *     description: "This is the second project.",
 *     imageUrl: "/images/project-two.png",
 *     tags: ["Next.js", "Tailwind CSS"],
 *   },
 * ];
 */
export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Project One",
        description: "This is the first project.",
        imageUrl: "/images/project-one.png",
        tags: ["React", "TypeScript"],
    },
    {
        id: 2,
        title: "Project Two",
        description: "This is the second project.",
        imageUrl: "/images/project-two.png",
        tags: ["Next.js", "Tailwind CSS"],
    },
    {
        id: 3,
        title: "Project Three",
        description: "This is the third project.",
        imageUrl: "/images/project-three.png",
        tags: ["Node.js", "Express"],
    },
];

export const getProjectById = (id: number): Project | undefined => {
    return PROJECTS.find(project => project.id === id);
};