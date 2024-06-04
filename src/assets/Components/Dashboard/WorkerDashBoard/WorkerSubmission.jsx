import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import WorkerSubmissionTable from "./WorkerSubmissionTable";

const WorkerSubmission = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const {
        data: workerSubs = [],
      } = useQuery({
        queryKey: ['workerSub'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/submissions/${user.email}`)
          return res.data
        },
      })

    return (
        <div className="mt-16 overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Job Title</th>
        <th>Job Details</th>
        <th>Creator Email</th>
        <th>Submission Date</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        workerSubs?.map((workerSub,idx)=><WorkerSubmissionTable key={workerSub._id}
        idx={idx}
            workerSub={workerSub}
             />)
      }

    </tbody>

    
  </table>
</div>
    );
};

export default WorkerSubmission;