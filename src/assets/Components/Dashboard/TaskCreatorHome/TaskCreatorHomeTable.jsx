/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useState } from "react";
import SubmissionDetailsModal from "./SubmissionDetailsModal";

const TaskCreatorHomeTable = ({ submission,refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleApprove = () => {
    console.log(submission._id);
    axiosSecure
      .put(`/submission/${submission._id}`, {
        ...submission,
        status: "approve",
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.result.modifiedCount > 0) {
          toast.success("Worker Submission Approved");
          refetch()
        }
      });
  };
  const handleRejected = () => {
    console.log(submission._id);
    axiosSecure
      .put(`/submissions/${submission._id}`, {
        ...submission,
        status: "rejected",
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Worker Submission Rejected");
          refetch()
        }
      });
  };
  return (
    <>
      {submission && submission?.status === "pending" ? (
        <tr>
          <th></th>
          <td>{submission.worker_name}</td>
          <td>{submission.worker_email}</td>
          <td>{submission.task_title}</td>
          <td>${submission.payable_amount}</td>
          <td><button onClick={() => setIsOpen(true)} className="bg-gray-300 flex justify-center items-center px-3 py-1 rounded-xl">Detais</button></td>
          <td>
            <button
              onClick={handleApprove}
              className="bg-green-300 flex justify-center items-center px-3 py-1 rounded-xl"
            >
              Approve
            </button>
          </td>
          <td>
            <button
              onClick={handleRejected}
              className="bg-red-300 flex justify-center items-center px-3 py-1 rounded-xl"
            >
              Reject
            </button>
          </td>
          <SubmissionDetailsModal isOpen={isOpen}
          closeModal={closeModal}
          submission={submission}
          />
        </tr>
        
      ) : (
        ""
      )}
    </>
  );
};

export default TaskCreatorHomeTable;
