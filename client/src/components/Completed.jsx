import React, { useContext } from "react";
import initialTodo from "../context/TodoContext";
import "../styles/Todo.css";
import TodoItems from "./TodoItems";

const Completed = () => {
  const context = useContext(initialTodo);
  const { todo } = context;
  return (
    <div className="completed">
      <h3>Completed</h3>
      <div className="todoItems">
        {todo.result != undefined &&
          todo.result.map((item, index) => {
            if (item.Completed === true) {
              return (
                <TodoItems
                  key={item._id}
                  index={index}
                  title={item.Title}
                  des={item.Description}
                  priority={item.Priority}
                  complete={item.Completed}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default Completed;
