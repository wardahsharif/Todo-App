import React from "react";

const DeleteTask = ({ onDelete }) => {
    const handleDelete = () => {
    onDelete();
  };
  return (
    <div className="delete-task mx-2">
      <button className="btn mb-3" id="delete-button" onClick={handleDelete}>
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </div>
  );
};

export default DeleteTask;


