import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
import ManageTaskTable from "./ManageTaskTable";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const ManageTasks = () => {

    const axiosSecure = useAxiosSecure();
    

    const {
        data: tasks = [],refetch
      } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/tasks`)
          console.log("------------",res.data)
          return res.data
        },
      })
    //   console.log(tasks)
    return (
        <div className="pt-16">
            <div className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Task Title</th>
        <th>TaskCreator Name</th>
        <th>Task Count</th>
        <th>Coin Needed</th>
        <th>Availability</th>
        <th>view</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
      {
        tasks && tasks?.map((task,idx)=>
            <ManageTaskTable key={task._id}
            refetch={refetch}
            idx={idx}
             task={task} />
        )
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageTasks;
