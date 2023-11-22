import { useDispatch, useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';
import { toggleTodo } from './../redux/tasksSlice'; 

export const TodoList = () => {
	
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.tasks);
  	return (
		<ul className="tasks-list">
			{todos.map((todo) => (
			   <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} toggleTodo={() => dispatch(toggleTodo({ id: todo.id }))} />
			))}
		</ul>
	);
};
