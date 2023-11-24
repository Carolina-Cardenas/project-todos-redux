import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { deleteTask, toggleTodo } from "../redux/tasksSlice";
import "./../index.css";

export const TodoItem = ({ id, text, completed,handleToggleTodo, handleDeleteTask}) => {
  const dispatch = useDispatch();
  
  const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}

  const [taskText, setTaskText] = useState(text ? text : "");
  
    const handleChange = (e) => {
      setTaskText(e.target.value);
    };
  const completedClass = completed ? "completed" : "";
 
  return (
    <li className={`todo-item ${completed ? "completed" : ""}`}>
      <input type="checkbox" checked={completed} onChange={handleToggleTodo} />

      {/* <span className={`task-text ${completed ? "completed-text" : ""}`}>
        {text}
      </span> */}
      <input type="text" value={taskText} onChange={handleChange}
        className={`task-input ${completed ? "completed-input" : ""}`}
      />
      <button onClick={removeTask}>Delete</button>
    </li>
  );
};
