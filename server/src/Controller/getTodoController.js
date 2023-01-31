import TodoModel from "../Models/todoModel.js";

// Check if there is error and send appropriate response
export async function getTodoController(req, res) {
  // If the request is success and the req is valid
  let success = false;
  const result = await TodoModel.find();

  // If there are result is not null send result else send error message
  if (result) {
    success = true;
    const count = result.length;
    res.send({ success, msg: "Got Todo List", count, result });
  } else {
    res.send({ success, msg: "Couldnot get Todo List" });
  }
}
