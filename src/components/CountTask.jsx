
import { useSelector } from 'react-redux';

export  const CountTask = () => {
  const tasks = useSelector((state) => state.tasks);

  const totalTasks = tasks.length;
  const incompleteTasks = tasks.filter((task) => !task.completed).length;

//   return (
//     <div>
//       <p>Total Tasks: {totalTasks}</p>
//       <p>Incomplete Tasks: {incompleteTasks}</p>
//     </div>
//   );
// };


return (
    <div className='container-boxes'>
       
      <p>Total Tasks: {tasks.length}</p>
      <div>
        <p>Tasks:</p>
        
        <ul>
          {tasks.map((task) => (
            
                <div className="task-container">
                <input type="checkbox" checked={task.completed}/>
              <span>{task.text} - {task.completed ? 'Completed' : 'Incomplete'}</span>  
              </div>
      
          ))}
        </ul>
      </div>
    </div>
  );
}



