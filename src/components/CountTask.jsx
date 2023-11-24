
import { useSelector } from 'react-redux';

export  const CountTask = () => {
  const tasks = useSelector((state) => state.tasks);

  const totalTasks = tasks.length;
  const incompleteTasks = tasks.filter((task) => !task.completed).length;
  const completeTasks = tasks.filter((task) => task.completed).length;

return (
    <div className='container-boxes'>
       
      <p>You have total {totalTasks} task.</p>
      <p>You have a {incompleteTasks} incompleted task.</p>
      <p>You have a {completeTasks} completed task.</p>
     
    </div>
  );
}



