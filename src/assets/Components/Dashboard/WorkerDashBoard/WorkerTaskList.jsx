import { useQuery } from "@tanstack/react-query";
import WorkerTaskListCard from "./WorkerTaskListCard";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const WorkerTaskList = () => {

    const axiosSecure = useAxiosSecure();
    const {
        data: tasks = []
      } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/tasks`)
          return res.data
        },
      })

    return (
        <section className="relative overflow-hidden py-10">
           <Helmet>
        <title>Dashboard | Task List</title>
      </Helmet>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto text-center">
      <h2 className="mt-5 font-display text-3xl tracking-tight text-slate-800 sm:text-4xl">All Tasks</h2>
    </div>
    {/* maping */}
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2">
    {
        tasks?.map(task=><WorkerTaskListCard key={task._id}
            task={task}
             />)
    }
    </div>
    
  </div>
</section>
    );
};

export default WorkerTaskList;