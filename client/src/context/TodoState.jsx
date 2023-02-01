import { useState } from "react";
import { API_URL } from "../api/Config";
import TodoContext from "./TodoContext";
import { getTodoItems } from "../api/GetTodoItems";
import { addTodoItems } from "../api/AddTodoItems";
import { deleteTodoItem } from "../api/DeleteTodoItems";
import { updateTodoItems } from "../api/UpdateTodoItems";

const TodoState = (props) => {
  const [todo, setTodo] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  // Fetch todo from api
  const fetchTodo = async () => {
    const response = await getTodoItems();
    setTodo(response);
  };

  // Add todo item
  const addTodo = async (title, description, priority) => {
    const response = await addTodoItems(title, description, priority);
    const newTodo = { ...todo };
    newTodo.result.push(response.currentTodo);
    newTodo.count = newTodo.count + 1;
    setTodo(newTodo);
  };

  // Delete todo item
  const deleteTodo = async (id) => {
    await deleteTodoItem(id);

    function removeObjectWithId(arr, id) {
      const objWithIdIndex = arr.findIndex((obj) => obj._id === id);

      if (objWithIdIndex > -1) {
        arr.splice(objWithIdIndex, 1);
      }

      return arr;
    }
    const newTodo = { ...todo };
    newTodo.result = await removeObjectWithId(newTodo.result, id);
    newTodo.count = newTodo.count - 1;
    setTodo(newTodo);
  };

  const toggleTodo = async (index) => {
    const newTodo = { ...todo };
    newTodo.result[index].Completed = !newTodo.result[index].Completed;
    setTodo(newTodo);
    updateTodoItems(newTodo.result[index]);
  };

  const updateTodo = async () => {
    const newTodo = { ...todo };
    newTodo.result.map((data, index) => {
      if (data._id === modalData._id) {
        newTodo.result[index] = modalData;
      }
    });
    updateTodoItems(modalData);
  };

  // Modal
  const toggleModal = (index) => {
    const newTodo = { ...todo };
    setModalData(newTodo.result[index]);
    setModal(!modal);
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        fetchTodo,
        addTodo,
        deleteTodo,
        toggleTodo,
        modal,
        toggleModal,
        modalData,
        setModalData,
        updateTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
