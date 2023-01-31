import express from "express";
import cors from "cors";
import path from "path";
import { config } from "dotenv";
import { fileURLToPath } from "url";
import connectToMongo from "./database.js";

// using "url" to get __filename and __dirname as ES6 module is used for this project
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
config({ path: path.join(__dirname, ".env") });

// Getting port from .env
const PORT = process.env.PORT;

const app = express();

// help read request in json without body-parser
app.use(express.json());
app.use(cors());


// Connecting to MongoDB Atlas
connectToMongo();

// listening to desired port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
