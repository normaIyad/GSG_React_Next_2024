import Itask from "../../types";
import "./Count.css"
interface Iptops {
  tasks: Itask[];
}
const Count = ({ tasks }: Iptops) => {
  const doneTasks = tasks.filter((task) => task.isDone);
  const urgent = tasks.filter((task) => task.isUrgent);
  return (
    <div className="count">
      <div>
        <h2>Done Tasks: </h2>
        <p>{doneTasks.length}</p>
      </div>
      <div>
        <h2>Urgent Tasks: </h2>
        <p>{urgent.length}</p>
      </div>
    </div>
  );
};
export default Count;
