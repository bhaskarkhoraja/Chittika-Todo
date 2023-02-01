import React, { useContext } from "react";
import initialTodo from "../context/TodoContext";
import "../styles/Modal.css";

const Modal = (props) => {
  const context = useContext(initialTodo);
  const { toggleModal, modalData, setModalData, updateTodo } = context;

  const handleChange = (event) => {
    setModalData({ ...modalData, [event.target.name]: event.target.value });
  };

  const handleUpdate = async () => {
    await updateTodo();
    await toggleModal();
    props.showAlert("Update Successfully", "success");
  };

  return (
    <div className="modal">
      <div
        onClick={toggleModal}
        className="overlay"
      ></div>
      <div className="modal-content">
        <div className="todoItem">
          <div className="addTitle">
            <input
              placeholder="Your Title"
              className="no-outline"
              maxLength="25"
              minLength="5"
              value={modalData.Title}
              name="Title"
              onChange={handleChange}
            ></input>
          </div>
          <div className="addDes">
            <textarea
              placeholder="Your Description"
              className="no-outline"
              maxLength="140"
              minLength="5"
              value={modalData.Description}
              name="Description"
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
              value={modalData.Priority}
              name="Priority"
              onChange={handleChange}
            ></input>
          </div>
          <div className="btns">
            <button
              className="done"
              onClick={() => handleUpdate()}
            >
              Update
            </button>
            <button
              className="delete"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
