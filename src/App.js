import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: task, status: "In Progress" },
      ]);
      setTask("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "In Progress" ? "Done" : "In Progress",
            }
          : task
      )
    );
  };

  const handleEditTask = (id, text) => {
    setEditTaskId(id);
    setEditTaskText(text);
  };

  const handleSaveEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editTaskText } : task
      )
    );
    setEditTaskId(null);
    setEditTaskText("");
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.status === "Done" ? "completed" : ""}`}
          >
            {editTaskId === task.id ? (
              <input
                type="text"
                value={editTaskText}
                onChange={(e) => setEditTaskText(e.target.value)}
                onBlur={() => handleSaveEdit(task.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSaveEdit(task.id);
                  }
                }}
                autoFocus
                className="edit-input"
              />
            ) : (
              <div className="task-content">
                <input
                  type="checkbox"
                  checked={task.status === "Done"}
                  onChange={() => handleToggleStatus(task.id)}
                  className="task-checkbox"
                />
                <span
                  className="task-text"
                  onClick={() => handleToggleStatus(task.id)}
                >
                  {task.text}
                </span>
                <div className="button-group">
                  <button
                    className="edit-button"
                    onClick={() => handleEditTask(task.id, task.text)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
