import TodoModel from "../Models/todoModel.js";

// Check if there is error and send appropriate response
export async function deleteTodoController(req, res) {
  // Check if there is a todo item with the requested id
  let todoItem = await TodoModel.findById(req.params.id);

  if (todoItem) {
    await TodoModel.findByIdAndDelete(req.params.id);
    res.send({ msg: "Successfully deleted todo item", todoItem });
  } else {
    res.send({ msg: "No todo item with that id found" });
  }
}
