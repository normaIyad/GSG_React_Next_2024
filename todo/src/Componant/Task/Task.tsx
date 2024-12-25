import { useState } from "react";
import Itask from "../../types";
import "./Task.css"
interface ITask extends ITask {
    isDone: boolean;
    taskName: string;
}
const Task = ({ task }) => {
    const [isDone, setIsdone] = useState(false)
    const isDonChange = () => {
        console.log("isDone changed" + task.isDone);
        task.isDone =!task.isDone; // Mock function to simulate changing task.isDone state.  You would replace this with actual logic.
        setIsdone(!task.isDone); // Mock function to simulate changing task.isDone state.  You would replace this with actual logic.
         console.log("isDone changed" + isDone);
     }
    console.log(task.taskName);
    return (
        <div className="to-do-item">
            <input type="checkbox" id='donTask' className="state" onChange={isDonChange}  />
            <label htmlFor="donTask"  >
                {task.taskName
                } <span className={task.isDone  ? "Done" : "NotDone"}>
                    {task.isDone  ? "Done" : "Not Done"}
                </span>
            </label>
        </div>
    )
}
export default Task;