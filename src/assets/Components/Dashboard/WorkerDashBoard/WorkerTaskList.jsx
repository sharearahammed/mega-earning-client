import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hook/useAxiosCommon";
import WorkerTaskListCard from "./WorkerTaskListCard";

const WorkerTaskList = () => {

    const axiospublic = useAxiosCommon();
    const {
        data: tasks = []
      } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
          const res = await axiospublic.get(`/tasks`)
          return res.data
        },
      })

    return (
        <section className="relative overflow-hidden py-10">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto text-center">
      <h2 className="font-display text-3xl tracking-tight text-slate-800 sm:text-4xl">Discover Our AI-Powered Solutions</h2>
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