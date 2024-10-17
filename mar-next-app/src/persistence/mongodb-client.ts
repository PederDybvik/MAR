// src/lib/mongodb.ts
import { MongoClient } from "mongodb";

// Ensure that the MongoDB URI is provided in the environment variables
if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to the environment variables");
}

const uri: string = process.env.MONGODB_URI;
const options = {};

// Declare client and clientPromise
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Extend globalThis with _mongoClientPromise property (no var, using let/const)
declare global {
  interface Global {
    _mongoClientPromise?: Promise<MongoClient>;
  }
}

// Check if we are in development mode
if (process.env.NODE_ENV === "development") {
  // In development, reuse the global promise to avoid multiple connections
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, always create a new MongoClient
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export the client promise to use throughout the project
export default clientPromise;

