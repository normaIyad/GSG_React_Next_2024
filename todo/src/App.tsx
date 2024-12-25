import { useState } from 'react';
import './App.css';
import Itask from "./types";
import Task from "./Componant/Task/Task";
// Define the type for a task

function App() {
  const [tasks, setTasks] = useState<Itask[]>([]); // Correct type for tasks
  const [task, setTask] = useState("");
  const [errorsList, setErrorsList] = useState<string[]>([]);
  const handleChange = (task: string) => {
    setTask(task);
  };

  const handleSubmit = () => {
    if (task.length > 5) {
      setTasks([...tasks, { taskName: task, isDone: false }]); // Correct taskName
      setTask(''); 
    }else{
      setErrorsList(["Task name should be more than 5 characters"])
    }
  };
  console.log(task);
  return (
    <>
      <div className='form'>
        <label htmlFor="task" className='title'>
          Add a new task
        </label>
        <span className='error'>
        {errorsList.length ? errorsList.map((error: string) => (
          <p key={error}>{error}</p>
        )) : null}
        </span>
        <input
          className='input'
          type="text"
          id="task"
          value={task}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit} className='button'>Add task</button>
      </div>

      <div>
        <h2>To-Do List</h2>
        <ul>
          {tasks.map((task:Itask) => (
            <Task task={task}  />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
