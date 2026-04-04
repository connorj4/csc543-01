import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/library/db';
import Project, { ProjectModelType } from '@/models/project';


/**
 * Response data structure for the Project API.
 * This type defines the shape of the response that will be sent back to the client when handling requests to the Project API. It includes an optional message property, which can be used to provide feedback about the success or failure of the request, and an optional data property, which is an array of ProjectModelType objects representing the projects retrieved from the database or created as a result of a POST request. This type ensures that the API responses are consistent and properly typed, allowing for better error handling and improved developer experience when working with the API.
 * @typedef {Object} ResponseData
 * @property {string} [message] - Optional message providing feedback about the request.
 * @property {ProjectModelType[]} [data] - Optional array of ProjectModelType objects representing the projects.
 * @example
 * // Example of a successful response with data
 * const response: ResponseData = {
 *   message: 'Projects retrieved successfully',
 *   data: [
 *     {
 *       _id: '60c72b2f9b1d8e5a5c8f9b1a',
 *       type: 'project',
 *       title: 'Project One',
 *       description: 'This is the first project.',
 *       slug: 'project-one',
 *       completed: false,
 *       active: true,
 *     },
 *     // ... more projects
 *   ],
 * };
 *
 * // Example of an error response without data
 */
type ResponseData = {
    message?: string,
    data?: ProjectModelType[],
} 
// API route handler for the Project API, which handles GET and POST requests to retrieve and create projects in the MongoDB database. The handler connects to the database, processes the incoming request based on the HTTP method, and sends back a JSON response with an appropriate message and data if applicable. The handler also includes error handling to catch any issues that may arise during database operations or request processing, ensuring that the client receives informative feedback about the success or failure of their request.
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    await dbConnect();
    const { method } = req;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache');
    switch (method) {
        case 'GET':
            try {
                const project = await Project.find({});
                res.statusCode = 200;
                res.end(JSON.stringify({ message: 'Project Found', data: project }));
                break;
            } catch (err) {
                //console.error('Project Error: ' + err);
                res.statusCode = 400;
                const errorMessage = err instanceof Error ? err.message : 'Unknown error';
                res.end(JSON.stringify({ message: errorMessage }) || JSON.stringify({ message: 'Error: Project Failed'}));
                break;
            }  
        case 'POST':
            try {
                const newProjectModel = await new Project(req.body);
                const project = await Project.create(newProjectModel);
                res.statusCode = 201;
                res.end(JSON.stringify({ message: `${project.title} Project Was Created`, data: [project] }));
                break;
            } catch (err) {
                res.statusCode = 400;
                const errorMessage = err instanceof Error ? err.message : 'Unknown error';
                res.end(JSON.stringify({ message: errorMessage, errors: err }) || JSON.stringify({ message: 'Project Failed to Post' }));
                //res.end(JSON.stringify({ message: 'Task Failed to Post' }));
                break;
            }     
        default:
                res.statusCode = 400;
                res.end(JSON.stringify({ message: 'Error: Project Failed'}));
                break;
    }
}