import React, { useContext, useEffect } from "react";
import "./App.css";
import Completed from "./components/Completed";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import initialTodo from "./context/TodoContext";

function App() {
  const context = useContext(initialTodo);
  const { fetchTodo, modal } = context;
  // Get all Todo items from database
  useEffect(() => {
    fetchTodo();
  }, []);
  return (
    <div className="App">
      {modal && <Modal />}
      <Navbar />
      <Todo />
      <hr />
      <Completed />
    </div>
  );
}

export default App;
