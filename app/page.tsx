"use client";
import React from "react"; // Import React library for building the component
import User from "@/components/user"; // Import the User component from the components directory, which is used to display user information such as name and type. This component can be reused across different parts of the application to maintain consistency in how user data is presented.
import Link from "next/link"; // Import Link component from Next.js for client-side navigation, allowing for seamless transitions between pages without full page reloads. The Link component is used to wrap elements that should navigate to different routes when clicked, enhancing the user experience by providing fast and efficient navigation within the application.
import useFetch from "@/hooks/fetch"; // Import the useFetch custom hook from the hooks directory, which is used to fetch data from an API endpoint. This hook abstracts away the logic for making HTTP requests and managing loading and error states, allowing components to easily retrieve data without having to implement the fetching logic themselves. The useFetch hook can be reused across different components that need to fetch data, promoting code reusability and separation of concerns.
/*
  * This is the Home component, which serves as the main landing page of the application.
  * It utilizes the useFetch custom hook to retrieve data from a specified API endpoint and manages loading, error, and empty states accordingly.   
  * The component displays a list of posts fetched from the API, and each post is rendered as a link that navigates to a detailed view of the post when clicked. The User component is also included to display user information at the top of the page. The component is styled using Tailwind CSS classes for layout and design.
  * The Home component demonstrates how to effectively handle different states of data fetching (loading, error, and empty) while providing a user-friendly interface for displaying the fetched data.
  * The use of the useFetch hook allows for a clean and organized approach to data retrieval, making it easier to manage and maintain the component's logic related to fetching and displaying data.
  * Overall, the Home component serves as a central hub for users to access and interact with the content fetched from the API, while also showcasing best practices for handling asynchronous data in a React application.
*/
const Home: React.FC = () => {
  const {
    data: posts,
    loading,
    error,
  } = useFetch<{ id: number; title: string }[]>(
    "https://jsonplaceholder.typicode.com/todos/",
  ); // Use the useFetch hook to fetch data from the specified API endpoint. The hook returns an object containing the fetched data (posts), a loading state (loading), and any error that may have occurred during the fetch operation (error). The data is typed as an array of objects with id and title properties, ensuring type safety when accessing the fetched data in the component.
  console.log("Loading: ", loading); // Log the loading state to the console for debugging purposes, allowing developers to see when the data is being fetched and when it has completed loading.
  console.log("Error: ", error); // Log any errors that occur during the fetch operation to the console for debugging purposes, helping developers identify and troubleshoot issues with data retrieval.
  console.log("Posts: ", posts); // Log the fetched posts data to the console for debugging purposes, allowing developers to verify that the data is being retrieved correctly and to inspect the structure of the data for further use in the component.
  if (loading) {
    // Handle loading state by displaying a message and a skeleton UI component to indicate that content is being loaded. This provides feedback to users while they wait for the data to be fetched, improving the user experience by preventing confusion or frustration during loading times.
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <p>Content is loading...</p>
      </div>
    );
  }

  if (error) {
    // Handle error state by displaying an error message to the user, indicating that there was an issue with fetching the data. This helps inform users about problems with data retrieval and can guide them to take appropriate actions, such as retrying or contacting support.
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        Error: {error.message}
      </div>
    );
  }

  if (!posts) {
    // Handle the case where no posts are available by displaying a message to the user. This provides feedback in situations where the data fetch was successful but returned an empty result, ensuring that users are informed about the lack of content rather than being left with a blank screen.
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        No posts available.
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <User userName="Student Name" userType="Admin" />
        <ul className="list-disc pl-5 my-3">
          {posts.slice(0, 10).map((post: { id: number; title: string }) => (
            <li key={post.id} className="mb-2">
              <Link
                className="text-amber-400 hover:underline"
                href={`/sample/${post.id}`}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
