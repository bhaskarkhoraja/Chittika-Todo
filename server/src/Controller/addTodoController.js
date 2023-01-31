import TodoModel from "../Models/todoModel.js";
import { validationResult } from "express-validator";

// Check if there is error and send appropriate response
export async function addTodoController(req, res) {
  // If the request is success and the req is valid
  let success = false;
  const errors = validationResult(req);

  // If errors are not empty it means our request have some errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, msg: errors.array() });
  }

  const newTodo = new TodoModel({
    Title: req.body.title,
    Description: req.body.description,
    Priority: req.body.priority,
    Completed: false,
  });

  success = true;
  const currentTodo = await newTodo.save();
  res.send({ success, msg: "Succesfully added Todo Item", currentTodo });
}
