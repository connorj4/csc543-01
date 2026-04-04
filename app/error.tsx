'use client' // Error boundaries must be Client Components
import React from "react";
import { useEffect } from 'react'; // Import useEffect hook from React to perform side effects in the component, such as logging errors to the console
 /*
 * This is the Error component, which serves as an error boundary for the application.
 * It captures any errors that occur in the child components and displays a user-friendly message along with a button to attempt to recover from the error by re-rendering the segment.
 * The component also logs the error to the console for debugging purposes.
 */ 

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // Log the error to the console for debugging purposes
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
