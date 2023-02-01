import { API_URL } from "./Config";

export async function addTodoItems(title, description, priority) {
  const response = await fetch(`${API_URL}/api/todo`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      description: description,
      priority: priority,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
  return response;
}
