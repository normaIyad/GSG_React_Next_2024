import { useState } from "react";
import Itask from "../../types";
interface Iprop {
    handelItem : (task:Itask) => void;  //function to be called when the task has  added 
}
const Form = ({ handelItem }: Iprop) => {
    const [task, setTask] = useState("");
    const [urgent , setUrgent] = useState(false)
    const [errorsList, setErrorsList] = useState<string[]>([]);
    const handleChange = (task: string) => {
        setTask(task);
    };
    const handleSubmit = () => {
        if (task.length > 4) {
            const newtask:Itask={ //Create a new task
                id: Date.now(),  // Mock function to simulate adding new task.  You would replace this with actual logic.
                taskName: task,
                isDone: false,
                isUrgent: urgent
            } 
            setTask(''); 
            setUrgent(false);
            handelItem(newtask); // Call parent function to add task
            setErrorsList([]);  // Clear errorsList after successful task addition.  You would replace this with actual logic.
        } else {
            setErrorsList(["Task name should be more than 5 characters"])
        }
    };

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
            <div className="urgent-form">
                <input type="checkbox"
                 id='urgentTask' 
                 className='urgent' 
                 checked={urgent}
                 onChange={() => setUrgent(!urgent)} />
                <label htmlFor="urgentTask" >
                    Urgent
                </label>
            </div>
        </div>
        <div>
        <button onClick={handleSubmit} className='button'>Add task</button>
      </div>
        </>
    )
}
export default Form;