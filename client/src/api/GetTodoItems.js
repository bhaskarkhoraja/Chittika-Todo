import { API_URL } from "./Config";

export async function getTodoItems() {
  const response = fetch(`${API_URL}/api/todo`).then((response) =>
    response.json()
  );
  return response;
}
