import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
import ManageTaskTable from "./ManageTaskTable";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { Helmet } from "react-helmet-async";

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
      
    return (
        <div className='pt-[90px] pb-6 p-5 lg:pl-14 md:pl-14 min-h-screen rounded-none bg-no-repeat bg-cover overflow-x-auto w-full flex flex-col text-gray-800 bg-gray-50' style={{
          backgroundImage:
            'url("https://i.ibb.co/Fm7Bs6W/2148015628.jpg")',
        }}>
          <Helmet>
        <title>Dashboard | Manage Task</title>
      </Helmet>
            <div className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Task Title</th>
        <th>TaskCreator Name</th>
        <th>Task Count</th>
        <th>Payable Amount</th>
        <th>Total Coin Needed</th>
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
