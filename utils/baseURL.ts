/**
 * Base Url
 *
 * @type {*}
 * @description This module defines the base URL for the application, which is typically used for making API requests or constructing links within the application. The base URL is retrieved from environment variables, allowing for flexibility in different deployment environments (e.g., development, staging, production). If the base URL is not defined in the environment variables, an error is thrown to ensure that the application does not run without a valid base URL, which is essential for proper functioning of API calls and routing.
 * @example
 * // Example usage of BASE_URL in an API call
 * import BASE_URL from '@/utils/baseURL';
 * 
 * const fetchData = async () => {
 *   const response = await fetch(`${BASE_URL}/api/data`);
 *   const data = await response.json();
 *   return data;
 * };

 */

const BASE_URL: string | null = process.env.NEXT_PUBLIC_BASE_URL || null;
if (!BASE_URL) {
  throw new Error('Please define the Base URL in your .env file');
} 
if (BASE_URL.endsWith('/')) {
  throw new Error('Base URL should not end with a slash (/)');
}
if (!/^https?:\/\//.test(BASE_URL)) {
  throw new Error('Base URL should start with http:// or https://');
}
if (BASE_URL.includes(' ')) {
  throw new Error('Base URL should not contain spaces');
}
if (BASE_URL == null) {
  throw new Error('Base URL is not defined');
}
export default BASE_URL;