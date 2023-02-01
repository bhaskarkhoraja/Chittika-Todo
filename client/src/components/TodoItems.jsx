import React, { useContext } from "react";
import "../styles/TodoITems.css";
import initialTodo from "../context/TodoContext";

const TodoItems = (props) => {
  const { id, index, title, des, priority, complete } = props;

  const context = useContext(initialTodo);
  const { deleteTodo, toggleTodo, toggleModal } = context;

  const handleDelete = async (id) => {
    await deleteTodo(id);
    props.showAlert("Deleted Successfully", "success");
  };

  const handleToggleComplete = async (index) => {
    await toggleTodo(index);
    props.showAlert("Changed Todo Status", "success")
  };

  const handleToggleModal = async (index) => {
    await toggleModal(index);
  };

  return (
    <div className="todoItem">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="des">{des}</div>
      <div className="priority">
        <h3>Priority: </h3>
        <p>{priority}</p>
      </div>
      <div className="btns">
        <button
          className="done"
          onClick={() => handleToggleComplete(index)}
        >
          {complete === true ? "Undo" : "Done"}
        </button>
        <button
          className="update"
          onClick={() => handleToggleModal(index)}
        >
          Update
        </button>
        <button
          className="delete"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
