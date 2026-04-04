import mongoose, { Mongoose } from 'mongoose';
/**
 * This file establishes a connection to a MongoDB database using Mongoose. It checks for the presence of the MONGODB_URI environment variable, which should contain the connection string for the MongoDB database. If the variable is not defined, it throws an error. The file also implements a caching mechanism to reuse existing database connections, improving performance by avoiding unnecessary reconnections. The dbConnect function is exported as the default export of the module, allowing it to be easily imported and used in other parts of the application to establish a connection to the database when needed.
 * @module db
 * @requires mongoose
 * @example
 * // Example usage of dbConnect in another part of the application
 * import dbConnect from '@/library/db';
 *
 * async function fetchData() {
 *   await dbConnect(); // Establish a connection to the database
 *   // Perform database operations here, such as querying or saving data
 * }    
 */

declare global {
  var mongoose: {
    conn: Mongoose | null,
    promise: Promise<Mongoose> | null
  }
}
// Get the MongoDB connection URI from environment variables, which should be defined in a .env file or through other means of setting environment variables in the deployment environment
const MONGODB_URI = process.env.MONGODB_URI;
// Throw an error if the MONGODB_URI environment variable is not defined, as it is essential for establishing a connection to the MongoDB database
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}
// Cached connection object to reuse existing database connections and improve performance by avoiding unnecessary reconnections
let cached = global.mongoose;
// If there is no cached connection, initialize the cache with null values for the connection and promise properties
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
// Function to establish a connection to the MongoDB database using Mongoose, utilizing the cached connection if available or creating a new connection if not
async function dbConnect() {
  if (cached.conn) {
    return cached.conn; // Return the cached connection if it exists, allowing for reuse of the existing database connection and improving performance by avoiding unnecessary reconnections
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }; // Options for the Mongoose connection, such as disabling buffering of commands when the connection is not yet established
    cached.promise = mongoose.connect(MONGODB_URI as string, opts).then((mongoose) => {
      return mongoose;
    }); // Create a new connection to the MongoDB database using Mongoose, and store the promise in the cache to allow for reuse of the connection in future calls to dbConnect while the connection is being established. The connection is established using the MONGODB_URI and the specified options, and the resulting Mongoose instance is returned once the connection is successful.
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
export default dbConnect;