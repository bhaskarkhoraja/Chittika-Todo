import React, { useContext, useState } from "react";
import initialTodo from "../context/TodoContext";
import "../styles/Todo.css";
import TodoItems from "./TodoItems";

const Todo = (props) => {
  const context = useContext(initialTodo);
  const { todo, addTodo } = context;

  const [showAdd, setShowAdd] = useState(true);
  const [newTodo, setNewTodo] = useState({
    newTitle: "",
    newDescription: "",
    newPriority: "",
  });

  const handleOnClickShowAdd = () => {
    setShowAdd(false);
  };

  const handleOnAddCancel = () => {
    setShowAdd(true);
    setNewTodo({
      newTitle: "",
      newDescription: "",
      newPriority: "",
    });
  };

  const handleChange = (event) => {
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    if (newTodo.newTitle.length < 5) {
      props.showAlert("Title is too short", "wrong");
    } else if (newTodo.newTitle.length > 20) {
      props.showAlert("Title is too long", "wrong");
    } else if (newTodo.newDescription.length < 5) {
      props.showAlert("Description is too short", "wrong");
    } else if (newTodo.newDescription.length > 140) {
      props.showAlert("Description is too long", "wrong");
    } else if (newTodo.newPriority.length < 3) {
      props.showAlert("Priority is too short", "wrong");
    } else if (newTodo.newPriority.length > 10) {
      props.showAlert("Priority is too long", "wrong");
    } else {
      await addTodo(
        newTodo.newTitle,
        newTodo.newDescription,
        newTodo.newPriority
      );
      setNewTodo({
        newTitle: "",
        newDescription: "",
        newPriority: "",
      });
      setShowAdd(true);
      props.showAlert("Successfully added Todo", "success");
    }
  };

  return (
    <div className="todo">
      <h2>Your Todo Items: {todo.count}</h2>
      <hr />
      <br />
      <h3>Todo</h3>
      <div className="todoItems">
        {todo.result != undefined &&
          todo.result.map((item, index) => {
            if (item.Completed === false) {
              return (
                <TodoItems
                  key={item._id}
                  index={index}
                  id={item._id}
                  title={item.Title}
                  des={item.Description}
                  priority={item.Priority}
                  complete={item.Completed}
                  showAlert={props.showAlert}
                />
              );
            }
          })}
        <div className="todoItem">
          <div className="addTitle">
            <input
              placeholder="Your Title"
              className="no-outline"
              maxLength="25"
              minLength="5"
              value={newTodo.newTitle}
              name="newTitle"
              onChange={handleChange}
            ></input>
          </div>
          <div className="addDes">
            <textarea
              placeholder="Your Description"
              className="no-outline"
              maxLength="140"
              minLength="5"
              value={newTodo.newDescription}
              name="newDescription"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="addPriority">
            <h3>Priority: </h3>
            <input
              placeholder="Low Medium High"
              className="no-outline"
              maxLength="10"
              minLength="3"
              value={newTodo.newPriority}
              name="newPriority"
              onChange={handleChange}
            ></input>
          </div>
          <div className="btns">
            <button
              className="done"
              onClick={() => handleClick()}
            >
              Add
            </button>
            <button
              className="delete"
              onClick={() => handleOnAddCancel()}
            >
              Cancel
            </button>
          </div>
          <div className={showAdd === true ? "addItem show" : "addItem"}>
            <button onClick={() => handleOnClickShowAdd()}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
