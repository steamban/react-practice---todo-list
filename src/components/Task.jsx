import React from "react";

function Task(props) {
   return (
      <div
         className="task-container"
         style={{ backgroundColor: props.completed ? "green" : "#242424" }}
      >
         <h1>{props.taskName}</h1>
         <button onClick={() => props.completeTask(props.id)}>Y</button>
         <button onClick={() => props.deleteTask(props.id)}>X</button>
      </div>
   );
}

export default Task;
