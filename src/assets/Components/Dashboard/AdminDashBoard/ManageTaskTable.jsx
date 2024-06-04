/* eslint-disable react/prop-types */

import { useState } from "react";
import ViewTaskDetailsModal from "./ViewTaskDetailsModal";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ManageTaskTable = ({ task, refetch ,idx}) => {
  const asiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDeleteTask = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "If you confirm then user will be deleteed",
        icon: "",
        showCancelButton: true,
        confirmButtonColor: "#22AB59",
        cancelButtonColor: "#d33",
        confirmButtonText: " confirm",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await asiosSecure.delete(`/delete/task/${task._id}`);
          console.log(res.data);
          toast.success("Task Delete successfully");
          refetch();
        }
      });
    } catch (error) {
      console.error("Failed to delete user", error);
      toast.error(`Failed to delete user for`, error);
    }
  };
  return (
    <>
      <tr key={task._id}>
        <th>{idx+1}</th>
        <td>{task?.task_title}</td>
        <td>{task?.taskCreator.name}</td>
        <td>{task?.task_quantity}</td>
        <td>{task?.totalDeduction}</td>
        <td>{task?.task_quantity > 0 ? "Available" : "Not Available"}</td>

        <td>
          <button onClick={() => setIsOpen(true)}>View</button>
        </td>

        <td>
          <button
            className="bg-red-300 flex justify-center items-center p-1 rounded-lg"
            onClick={handleDeleteTask}
          >
            Delete
          </button>
        </td>
      </tr>
      <ViewTaskDetailsModal
        isOpen={isOpen}
        closeModal={closeModal}
        task={task}
      />
    </>
  );
};

export default ManageTaskTable;
