"use client"; // This component is a client-side component, as it uses React hooks and state management.
import React from "react"; // Importing React for creating the component and using hooks
import { cn } from "clsx-for-tailwind"; // Importing a utility function for conditionally joining class names (assuming it's a custom utility for Tailwind CSS)
import SlideUp from "@/layout/motion/slideup"; // Importing a custom SlideUp component for animation (assuming it's defined in the specified path)

/*
 * FormMessage component displays messages based on the state of a form submission.
 * It shows different messages for pending, error, and success states.
 * The message will automatically hide after 6 seconds.
 * It uses the `useEffect` hook to manage the visibility of the message.
 * The component accepts a `message` prop which contains the state of the form submission.
 */

// Define the expected shape of the message prop
interface FormMessageProps {
  message: {
    isPending?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    error?: unknown;
    data?: {
      isError?: boolean;
      message?: string;
    };
  };
}
// FormMessage Component
const FormMessage: React.FC<FormMessageProps> = ({ message }) => {
  const [showMessage, setShowMessage] = React.useState(false); // State to manage the visibility of the message

  // Effect to show the message when it changes and hide it after 6 seconds
  React.useEffect(() => {
    setShowMessage(true); // Show the message when it changes
    const timer = setTimeout(() => {
      setShowMessage(false); // Hide the message after 6 seconds
    }, 6000); // Set a timer to hide the message after 6 seconds
    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [message]); 
  // Render the message with appropriate styling based on the message state
  return (
    <SlideUp isAnimating={showMessage}>
      <div
        className={cn(
          "text-center transition-all duration-500 ease-in-out",
          showMessage ? "opacity-100" : "opacity-0",
        )}
      >
        {/* Display different messages based on the state of the form submission */}
        {message.isPending && (
          <p className="text-sm text-orange-500">Creating Task...</p>
        )}
        {message.isError && (
          <p className="text-sm text-red-600">
            {(message.error as Error).message}
          </p>
        )}
        {message.isSuccess && (
          <div
            className={cn(
              message.data?.isError ? "bg-red-800" : "bg-green-800",
              "rounded-md my-3 p-2 text-white text-sm w-full",
            )}
          >
            <p className="text-sm">
              {message.data?.message
                ? message.data.message
                : "Task Created Successfully!"}{" "}
            </p>
          </div>
        )}
      </div>
    </SlideUp>
  );
};
export default FormMessage;
