import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import WorkerStats from "./WorkerStats";
import WorkerApproveSubmission from "./WorkerApproveSubmission";

const WorkerHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // userCollection
  const { data: userCoin = [] } = useQuery({
    queryKey: ["userCoin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });

  // Submission
  const { data: submissions = [] } = useQuery({
    queryKey: ["submissionsss"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/submissions/${user?.email}`);
      return res.data;
    },
  });

  // Filter submissions with 'approve' status
  const approvedSubmissions = submissions?.filter(
    (submission) => submission?.status === "approve"
  );

  // Calculate the sum of payable_amount for approved submissions
  const totalPayableAmount = approvedSubmissions.reduce(
    (sum, submission) => sum + submission.payable_amount,
    0
  );

  return (
    <div className="pt-[90px] px-5 lg:pl-14 min-h-screen rounded-none bg-no-repeat bg-cover"
    style={{
      backgroundImage:
        'url("https://i.ibb.co/Fm7Bs6W/2148015628.jpg")',
    }}>
      <div>
        <WorkerStats
          userCoin={userCoin}
          submissions={submissions}
          totalPayableAmount={totalPayableAmount}
        />
      </div>
      <div className="mt-20">
        <div className="overflow-x-auto">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white mb-3">
            Approved Submission
          </h1>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>task_title</th>
                <th>payable_amount</th>
                <th>creator_name</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {approvedSubmissions?.map((approvedSubmission, idx) => (
                <WorkerApproveSubmission
                  key={approvedSubmission._id}
                  approvedSubmission={approvedSubmission}
                  idx={idx}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkerHome;
