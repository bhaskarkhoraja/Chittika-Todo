import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Schema for todo
const TodoSchema = new Schema({
  Title: String,
  Description: String,
  Priority: String,
  Completed: Boolean,
});

// Creating a todo model
const TodoModel = mongoose.model("Todo", TodoSchema);

export default TodoModel;
