// Load environment variables
require("dotenv").config();

// Access environment variables
const port = process.env.PORT;
const appName = process.env.APP_NAME;
const apiKey = process.env.API_KEY;

// Display values
console.log("App Name:", appName);
console.log("Running on Port:", port);
console.log("API Key:", apiKey);
