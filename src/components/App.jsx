import React from "react";
import { useState } from "react";
import Task from "./Task";

const App = () => {
   const [newTask, setTask] = useState("");
   const [todoList, setTodoList] = useState([]);

   // task value assigned to newTask
   const handleChange = (event) => {
      setTask(event.target.value);
   };

   // task array object created and updated
   const addTask = () => {
      const task = {
         id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
         taskName: newTask,
         completed: false,
      };
      setTodoList([...todoList, task]);
   };

   // task deleted from array object
   const deleteTask = (id) => {
      setTodoList(todoList.filter((task) => task.id !== id));
   };

   // mark task as completed
   const completeTask = (id) => {
      setTodoList(
         todoList.map((task) => {
            if (task.id === id) return { ...task, completed: true };
            else return task;
         })
      );
   };

   return (
      <div className="App">
         <div className="addTask">
            <input onChange={handleChange} />
            <button onClick={addTask}>Add Task</button>
         </div>
         <div className="list">
            {todoList.map((task) => {
               return (
                  <Task
                     taskName={task.taskName}
                     key={task.id}
                     id={task.id}
                     deleteTask={deleteTask}
                     completeTask={completeTask}
                     completed={task.completed}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default App;
