import { API_URL } from "./Config";

export async function deleteTodoItem(id) {
  const response = await fetch(`${API_URL}/api/todo/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
  return response;
}
