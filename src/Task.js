import React from "react";
import DeleteTask from "./DeleteTask"; 
const Task = ({ task, onToggleCompletion, onDelete}) => (
  <div className="task d-flex flex-row justify-content-center my-3 rounded" id="tasks">
    
    <input
      type="checkbox"
      checked={task.completed}
      onChange={onToggleCompletion}
      className="mx-3 mb-3"
    />
    <span className="mt-2">{task.text}</span>
      <DeleteTask onDelete={onDelete} /> 
  </div>
);

export default Task;

