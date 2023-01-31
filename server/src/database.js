import mongoose from "mongoose";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// using "url" to get __filename and __dirname as ES6 module is used for this project
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
config({ path: path.join(__dirname, ".env") });

// strictQuery will be True by default in future
mongoose.set("strictQuery", false);

// Connecting to MongoDB Atlas
const connectToMongo = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to mongodb successfully");
    })
    .catch(() => {
      console.log("Error: Connecting to mongodb failed");
    });
};

export default connectToMongo;
