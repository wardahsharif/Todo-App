import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div className="add-task mt-4">
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={handleTaskChange}
        className="rounded p-2"
      />
      <button className="btn" id="plus-button" onClick={handleAddTask}>
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default AddTask;





