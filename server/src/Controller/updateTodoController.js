import TodoModel from "../Models/todoModel.js";
import { validationResult } from "express-validator";

// Check if there is error and send appropriate response
export async function updateTodoController(req, res) {
  // If the request is success and the req is valid
  let success = false;
  const errors = validationResult(req);

  // If errors are not empty it means our request have some errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, msg: errors.array() });
  }

  // Find if todo item is available in Database with id
  let result;
  const id = req.params.id;
  try {
    result = await TodoModel.findById(id);
  } catch (error) {
    res.status(500).send({ success, error: "Internal error occured" });
  }

  // If todo item is available it will update else send error message
  if (result) {
    success = true;

    // Destructuring the body for reducing code redundency and for easy understanding
    const { title, description, priority, completed } = req.body;

    // Store new value from the destructured body
    const newTodo = {
      Title: title,
      Description: description,
      Priority: priority,
      Completed: completed,
    };

    // Update the value in database by finding the todo item with id and updating
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: newTodo,
      },
      { new: true }
    );
    res.send({
      success,
      msg: "Succesfully updated Todo Item",
      old: result,
      new: updatedTodo,
    });
  } else {
    res.send({ success, msg: "Couldnot found any related todo item" });
  }
}
