import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";

const TaskListDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { data: taskdetails = [] } = useQuery({
    queryKey: ["taskdetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasklist/${id}`);
      return res.data;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const textArea = form.textarea.value;
    const task_id = taskdetails._id;
    const task_title = taskdetails.task_title;
    const task_detail = taskdetails.task_detail;
    const task_img_url = taskdetails.image;
    const payable_amount = taskdetails.payable_amount;
    const worker_name = user.displayName;
    const worker_email = user.email;
    const submission_details = taskdetails.submission_info;
    const creator_name = taskdetails.taskCreator.name;
    const creator_email = taskdetails.taskCreator.email;
    const current_date = new Date();
    const status = "pending";

    const submissionInfo = {
      textArea,
      task_id,
      task_title,
      task_detail,
      task_img_url,
      payable_amount,
      worker_name,
      worker_email,
      submission_details,
      creator_name,
      creator_email,
      current_date,
      status
    };
    console.log(submissionInfo)
    
    axiosSecure.post('/submission',submissionInfo)
    .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
            toast.success("Submission Send Successfully!")
            form.reset()
            navigate('/dashboard/worker-submission')
        }
        else{
            toast.error("Submission not send!")
        }
    })

    
  };

  return (
    <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="py-8">
          <h1 className="text-3xl font-bold mb-2">{taskdetails?.task_title}</h1>
          <p className="text-gray-500 text-sm">
            Published on <time>{taskdetails?.currentTime}</time>
          </p>
        </div>

        <img
          src={taskdetails?.image}
          alt="Featured image"
          className="w-full h-auto mb-8"
        />

        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex justify-start">
              <p>
                <span className="font-bold">Job Description :</span> <br />
                <span className="text-justify">{taskdetails?.task_detail}</span>
              </p>
            </div>
            <div className="flex justify-start flex-col">
              <p className="mt-3">
                <span className="font-bold">Payable Amount:</span> $
                {taskdetails?.payable_amount}
              </p>
              <p className="mt-3">
                <span className="font-bold">Task Quantity:</span>{" "}
                {taskdetails?.task_quantity}
              </p>
              <p className="mt-3">
                <span className="font-bold">Submission Last Date:</span>{" "}
                {taskdetails?.date}
              </p>
              <p className="mt-3">
                <span className="font-bold">Submission Info :</span>{" "}
                {taskdetails?.submission_info}
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-xl mt-10 mx-auto bg-[#E5E7EB] p-5">
          <form onSubmit={handleSubmit}>
            <div className="w-full px-3">
              <label className="p-3 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Enter The Required Proof Of Job Finished:
              </label>
              <textarea
                rows="10"
                name="textarea"
                className="appearance-none block w-full text-gray-700 border border- rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#22ab59]"
                required
              ></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center">
                <label className="block text-gray-500 font-bold" />
                <button
                  className="mt-10 shadow bg-[#22ab59] hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Request For Complete
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskListDetails;
