import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams({
      title: task.title,
      description: task.description,
    });
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <Button
            className={`bg-slate-400 text-white p-2 rounded-md text-left w-full ${
              task.isCompleted && "line-through"
            }`}
            onClick={() => onTaskClick(task.id)}
          >
            {task.title}
          </Button>
          <Button
            className="bg-slate-400 text-white p-2 rounded-md "
            onClick={() => onSeeDetailsClick(task)}
          >
            <ChevronRightIcon />
          </Button>
          <Button
            className="bg-slate-400 text-white p-2 rounded-md "
            onClick={() => onDeleteTaskClick(task.id)}
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
