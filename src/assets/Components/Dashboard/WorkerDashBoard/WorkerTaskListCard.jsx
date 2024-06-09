/* eslint-disable react/prop-types */
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

const WorkerTaskListCard = ({task}) => {
  const date = task?.date ? parseISO(task.date) : null;
    return (
      <div className="bg-white rounded-lg bg-opacity-70">
        {
            task && task?.task_quantity > 0 ? <>
            <li className="rounded-2xl border border-gray-200 p-8">
        <div className="flex justify-between">
        <div>
        <h3 className="font-bold text-lg text-[#22ab59] flex items-center">
        {task?.task_title}
        </h3>
        <p className="mt-2">Creator: {task?.taskCreator.name}</p>
        <p className="mt-2">Completion Date: {date ? format(date,'MMMM do, yyyy h:mm a'):"Invalid date"}</p>
        </div>
        <div className="flex flex-col justify-end text-right">
        <p className="mt-2">Payable Amount: ${task?.payable_amount}</p>
        <p className="mt-2">Task Quantity: {task?.task_quantity}</p>
        </div>
        </div>
        <Link to={`/dashboard/worker-tasklistDetails/${task._id}`}>
        <button className="mt-5 btn bg-[#22ab59] text-white">
        Start Job
        </button>
        </Link>
      </li>
            </> : ""
        }
      </div>
    );
};

export default WorkerTaskListCard;



