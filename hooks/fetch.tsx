'use client';
import { useCallback, useEffect, useState } from "react"; // Importing React hooks for managing state and side effects
/* 
 * Custom hook to fetch data from a given URL.
 * It manages loading, data, and error states.
 */ 
export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null); // State to hold the fetched data, initialized to null
  const [loading, setLoading] = useState<boolean>(true); // State to indicate if the data is currently being loaded, initialized to true
  const [error, setError] = useState<Error | null>(null); // State to hold any error that occurs during the fetch, initialized to null

  // useCallback to memoize the fetchData function, which will only change if the URL changes

  const fetchData = useCallback(async () => {
    setLoading(true); // Set loading to true before starting the fetch
    try {
      const response = await fetch(url); // Fetch data from the provided URL
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);  // Throw an error if the response is not ok (status code is not in the range 200-299)
      }
      const result: T = await response.json(); // Parse the response as JSON and cast it to the expected type
      setData(result); // Update the data state with the fetched result
    } catch (err) {
      setError(err as Error); // Update the error state if an error occurs during the fetch
    } finally {
      setLoading(false); // Set loading to false after the fetch is complete, regardless of success or error
    }
  }, [url]); // Dependency array for useCallback, the fetchData function will be recreated only if the URL changes

  // useEffect to call the fetchData function when the component mounts or when the URL changes

  useEffect(() => {
    fetchData(); // Call the fetchData function to initiate the data fetching process
  }, [fetchData]);

  return { data, loading, error };
}// hooks/fetch.tsx (custom hook for data fetching)     