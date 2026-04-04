"use client";
import { useQuery } from "@tanstack/react-query"; // Importing useQuery hook from React Query for data fetching and caching
import { ProjectModelType } from "../models/project"; // Importing the ProjectModelType type definition from the specified path (assuming it defines the structure of a project object)
import BASE_URL from "@/utils/baseURL"; // Importing the BASE_URL constant from the specified path (assuming it defines the base URL for API requests)

// Might be better to get projects, groups and tasks in one go here 
const fetchProjects = async (): Promise<ProjectModelType[]> => {
    const response = await fetch(BASE_URL + "/api/project", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }); // Fetching projects from the API endpoint using a GET request with appropriate headers
    if (!response.ok) {
      throw new Error(`Error fetching projects: ${response.statusText}`); // Throwing an error if the response is not ok (status code is not in the range 200-299)
    }
    const data = await response.json();
    console.log('Group Data: ' + JSON.stringify(data.data)); // Logging the fetched data for debugging purposes (assuming the response has a data property that contains the projects)
    return data.data; // Returning the data property from the response, which is expected to be an array of projects (as defined by ProjectModelType)
  };

  const useProjectsData = () => {
    return useQuery({
        queryKey: ["projects"], // Query key
        queryFn: fetchProjects, // Query function to fetch projects
        staleTime: 1000 * 60 * 30, // 30 minutes
      });
  }

  export { useProjectsData }; //