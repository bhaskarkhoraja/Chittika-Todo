import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Completed from "./components/Completed";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import initialTodo from "./context/TodoContext";

function App() {
  const [alert, setAlert] = useState(null);

  // Show alert when getting notification
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  window.setTimeout(() => {
    setAlert(null);
  }, 3000);

  const context = useContext(initialTodo);
  const { fetchTodo, modal } = context;
  // Get all Todo items from database
  useEffect(() => {
    fetchTodo();
  }, []);
  return (
    <div className="App">
      {modal && <Modal showAlert={showAlert} />}
      <Navbar alert={alert} />
      <Todo showAlert={showAlert} />
      <hr />
      <Completed showAlert={showAlert} />
    </div>
  );
}

export default App;
