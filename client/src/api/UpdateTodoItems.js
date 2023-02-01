import { API_URL } from "./Config";

export async function updateTodoItems(body) {
  const response = await fetch(`${API_URL}/api/todo/${body._id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: body.Title,
      description: body.Description,
      priority: body.Priority,
      completed: body.Completed,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
  return response;
}
