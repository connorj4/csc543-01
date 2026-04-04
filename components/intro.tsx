import React from "react"; // Importing React for creating the component and using hooks
import ButtonUI from "@/layout/ui/button"; // Importing a custom ButtonUI component (assuming it's defined in the specified path)
/*
 * Intro component serves as a welcome message for the Task Management System application.
 * It provides a brief introduction to the application and encourages users to get started.
 * The component includes a heading, a paragraph of text, and a "Get Started" button that triggers an alert when clicked.
 * This component is designed to be simple and welcoming, providing users with an overview of what they can do with the application.
 */
function Intro() {
  return (
    <div>
        <h1>Hello Student Name</h1>
        <p>Welcome to the Task Management System! This application is designed to help you organize and manage your tasks efficiently. You can create projects, add tasks, set deadlines, and track your progress all in one place. Get started by creating your first project and adding some tasks to it. Happy task managing!</p>
        <ButtonUI onClick={() => alert("Get Started Clicked!")}>Get Started</ButtonUI>
    </div>
  );
}
export default Intro; 