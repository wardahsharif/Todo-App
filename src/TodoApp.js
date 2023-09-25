import React, { useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import './App.css';

function TodoApp() {
  const [tasks, setTasks] = useState([
    {
      text: "Drink water",
      completed: false
    },
     {
      text: "Do homework",
      completed: false
    },
    {
      text: "Code a webpage",
      completed: false
    },
    {
      text: "Go for a walk",
      completed: false
    },
    {
      text: "Water the plants",
      completed: false
    }
  ]);


  const addTask = (newTaskText) => {
    if (newTaskText.trim() !== "") {
      const newTaskObject = {
        text: newTaskText,
        completed: false
      };
      setTasks([...tasks, newTaskObject]);
    }
  };

  
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  
  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
    <div className="todolist my-3  rounded " id="todo-list">
      <h1>To-do list <i class="fa-solid fa-list-check"></i></h1>
      <AddTask onAddTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Task
              task={task}
              onToggleCompletion={() => toggleTaskCompletion(index)}
                    onDelete={() => deleteTask(index)}
            />

          </li>
        ))}
      </ul>

    </div>
          <p className="text-center  rounded p-2" id="coded">Open source code by <a href="https://github.com/wardahsharif" className="text-dark" id="git" target="_blank">Wardah Sharif</a></p>
    </div>
  );
}

export default TodoApp;

