import Itask from "../../types";
import { Trash } from "@phosphor-icons/react";
import "./Task.css";

interface TaskProps {
  task: Itask; // The task object
  handleDelete: (id: number) => void; // Function to delete the task
  isDonChange: (taskId: number) => void; // Function to toggle the task's done state
}

const Task = ({ task, handleDelete, isDonChange }: TaskProps) => {
  const handleCheckboxChange = () => {
    isDonChange(task.id); // Call the prop function to toggle the task's done state
  };

  const handleTaskDelete = () => {
    handleDelete(task.id); // Call the prop function to delete the task
  };

  return (
    <div className={`to-do-item ${task.isUrgent ? "urgent" : ""}`}>
      <input
        type="checkbox"
        id={task.id.toString()}
        className="state"
        checked={task.isDone}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={task.id.toString()}>
        {task.taskName}{" "}
        <span className={task.isDone ? "Done" : "NotDone"}>
          {task.isDone ? "Done" : "Not Done"}
        </span>
      </label>
      <div onClick={handleTaskDelete} className="delete-button">
        <Trash className="icon" size={32} />
      </div>
    </div>
  );
};

export default Task;
