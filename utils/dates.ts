import { format } from 'date-and-time';
/** 
 * 
 * This module provides utility functions for working with dates in the application. It includes functions for formatting dates according to specified formats and retrieving the current date in a specific format. The module uses the 'date-and-time' library to handle date formatting, allowing for flexible and consistent date representations throughout the application. The functions are designed to be reusable and can be easily integrated into various parts of the application where date manipulation is required.
 * 
 * @module utils/dates
 * @requires date-and-time  
 * 
 */
const dateFormat =format(new Date(), 'ddd, MMM DD YYYY HH:mm:ss'); // Wed, Jul 09 2025
const DateUtils = {
  formatDate: (date: Date, formatStr: string): string => {
    return format(date, formatStr); // Format the given date according to the specified format string using the 'date-and-time' library, allowing for flexible date representations based on the provided format string. The function takes a Date object and a format string as parameters and returns the formatted date as a string. 
  },
  nowDate: (): string => {
    return dateFormat; // Retrieve the current date formatted as a string using the predefined dateFormat variable, which is set to the current date and time formatted as 'ddd, MMM DD YYYY HH:mm:ss'. This function can be used to get the current date in a consistent format throughout the application.
  }
};

export default DateUtils;