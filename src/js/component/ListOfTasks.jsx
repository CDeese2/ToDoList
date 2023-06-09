import React, { useState } from "react";
import Tasks from "./Tasks.jsx";
// import "../../styles/index.css";

const ListOfTasks = () => {
  const [textEntered, setTextEntered] = useState("");
  const [tasks, setTasks] = useState([]);
    
    function inputValue (e) {
      const itemValue = e.target.value;
      setTextEntered(itemValue);
    }

    function addNewTask (e) {
      if (e.key === "Enter") {
        setTasks((current)=>{
          return [...current, textEntered]
        })
        setTextEntered("");
      }
    }

    function deleteTask(id) {
      setTasks((current) =>{
        return current.filter((item,index)=>{
          return index != id
        })
      })
    }

    return (
      <div>
        <h1 className="todo-header">To Do List</h1>
        <div className="todo-container d-flex flex-column">
        <div className="todo-container-header d-flex flex-row">
          <span className="me-2">Tasks</span>
          <input type="text" onChange={inputValue} onKeyDown={addNewTask} value={textEntered} />
        </div>
        <div className="todo-container-body flex-grow-1">
          <ul>
            {tasks.map((task, index) => (
              <Tasks key={index} id={index} task={task} onDelete={deleteTask}
              />
            ))}
          </ul>
        </div>

        <div className="flex-grow-1">
          {tasks.length === 0 ? "where your tasks at?" : `things to do: ${tasks.length}`}       
        </div>
      </div>
      </div>
    );
};

export default ListOfTasks;
