import React, { useContext, useEffect } from "react";
import "./App.css";
import Completed from "./components/Completed";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import initialTodo from "./context/TodoContext";

function App() {
  const context = useContext(initialTodo);
  const { todo, fetchTodo } = context;
  // Get all Todo items from database
  useEffect(() => {
    fetchTodo();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Todo />
      <hr />
      <Completed />
    </div>
  );
}

export default App;
