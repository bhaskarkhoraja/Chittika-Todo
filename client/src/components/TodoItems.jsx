import React, { useContext } from "react";
import "../styles/TodoITems.css";
import initialTodo from "../context/TodoContext";

const TodoItems = (props) => {
  const { id, index, title, des, priority, complete } = props;

  const context = useContext(initialTodo);
  const { deleteTodo, toggleTodo } = context;

  const handleDelete = async (id) => {
    await deleteTodo(id);
  };

  const handleToggle = async (index) => {
    await toggleTodo(index);
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
          onClick={() => handleToggle(index)}
        >
          {complete === true ? "Undo" : "Done"}
        </button>
        <button className="update">Update</button>
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
