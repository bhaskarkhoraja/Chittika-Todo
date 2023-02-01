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
    if (modalData.Title.length < 5) {
      props.showAlert("Title is too short", "wrong");
    } else if (modalData.Title.length > 20) {
      props.showAlert("Title is too long", "wrong");
    } else if (modalData.Description.length < 5) {
      props.showAlert("Description is too short", "wrong");
    } else if (modalData.Description.length > 140) {
      props.showAlert("Description is too long", "wrong");
    } else if (modalData.Priority.length < 3) {
      props.showAlert("Priority is too short", "wrong");
    } else if (modalData.Priority.length > 10) {
      props.showAlert("Priority is too long", "wrong");
    } else {
      await updateTodo();
      await toggleModal();
      props.showAlert("Update Successfully", "success");
    }
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
              maxLength="20"
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
