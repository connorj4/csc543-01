
import { Project } from "@/types/types";

// Function to get project by ID
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