/* eslint-disable react/prop-types */
import { format, parseISO } from "date-fns";
const WorkerSubmissionTable = ({workerSub,idx}) => {
  const date = workerSub?.current_date ? parseISO(workerSub.current_date) : null;
    return (
        <tr>
        <th>
          <label>
            {idx+1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={workerSub?.task_img_url} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{workerSub?.task_title}</div>
            </div>
          </div>
        </td>
        <td>
        {workerSub?.task_detail}
        </td>
        <td>{workerSub?.creator_email}</td>
        <td>{date ? format(date,'MMMM do, yyyy h:mm a'):"Invalid date"}</td>
        <td>{workerSub?.status}</td>
      </tr>
    );
};

export default WorkerSubmissionTable;

