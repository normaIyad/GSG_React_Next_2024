import { useState } from 'react';
import './App.css';
import Itask from "./types";
import Task from "./Componant/Task/Task";
import DayDate from "./Componant/Day&Date/DayDate";
import Form from "./Componant/Form/Form";
import Count from "./Componant/Count/Count";
// Define the type for a task

function App() {
  const [tasks, setTasks] = useState<Itask[]>([]); // Correct type for tasks
  const handelItem = (item:Itask)=>{
        setTasks([...tasks, item]); // Correct taskName
  }
  const handleDelete = (taskId: number) => {
    console.log("Delete task app" + taskId);
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }
  const isDonChange = (taskId:number)=>{
    console.log("isDone changed" + taskId);
    const newTasks = tasks.map((task) => task.id === taskId? {...task, isDone:!task.isDone} : task);
    setTasks(newTasks);
    console.log("isDone changed" + taskId + " new state " + newTasks[0].isDone);
  }
  return (
    <>
        <DayDate />
        <Form handelItem = {handelItem} />
        <Count tasks={tasks}/>
      <div>
        <h2>To-Do List</h2>
        <ul>
          {tasks.map((task: Itask) => (
            <Task 
            key={task.id}
            task={task} 
            handleDelete={handleDelete}
            isDonChange ={isDonChange}
            />
          ))}
        </ul>
      </div>

    </>
  );
}

export default App;
