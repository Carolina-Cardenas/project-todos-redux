
import { useDispatch } from 'react-redux';
import { deleteTask,toggleTodo } from '../redux/tasksSlice';
import './../index.css';
export const  TodoItem =({ id, text, completed })=> {
const dispatch = useDispatch();

const handleToggleTodo = () => {
 
  dispatch(toggleTodo({id}));

};

const handleDeleteTask = () => {

    dispatch(deleteTask({id}));
  };

  const completedClass = completed ? 'completed' : '';
    return (
        <li className={`todo-item ${completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleTodo}
        />
        <span className={`task-text ${completed ? 'completed-text' : ''}`}>
        {text}
      </span>
        <button onClick={handleDeleteTask}>Delete</button>
      </li>
    );
  };