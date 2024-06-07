import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import WorkerSubmissionTable from "./WorkerSubmissionTable";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const WorkerSubmission = () => {
  // const [itemsPerPage, setItemsPerPage] = useState(5);
  const itemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [workerSubs, setWorkerSubs] = useState([]);

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  
  useEffect(() => {
    console.log('one')
    const getData = async () => {
      try {
        const { data } = await axiosSecure.get(`/submissions?page=${currentPage}&size=${itemsPerPage}&email=${user?.email}`);
        setWorkerSubs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (user.email) {
      getData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.email,itemsPerPage,currentPage]);

    useEffect(() => {
      console.log('one')
    const getCount = async () => {
      try {
        const { data } = await axiosSecure.get(`/totalSubmissions/${user?.email}`);
        setCount(data.result.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getCount();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.email]);

  console.log("count",count)

  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()].map((e) => e + 1);
  // handle pagination
  const handlePaginationButton = (value) => {
    setCurrentPage(value)
  };


  return (
    <div className="pt-[90px] pb-6 lg:pl-14 min-h-screen rounded-none bg-no-repeat bg-cover overflow-x-auto w-full" style={{
      backgroundImage:
        'url("https://i.ibb.co/Fm7Bs6W/2148015628.jpg")',
    }}
  >
       <Helmet>
        <title>Dashboard | My Submission</title>
      </Helmet>
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
          {workerSubs?.filter(m => m.worker_email == user?.email).map((workerSub, idx) => (
            <WorkerSubmissionTable
              key={workerSub._id}
              idx={idx}
              workerSub={workerSub}
            />
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-12">
        <button
        disabled={currentPage  === 1}
        onClick={()=>handlePaginationButton(currentPage-1)}
         className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white">
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${currentPage === btnNum ? "bg-[#22AB59]" : ""} px-4 py-2 mx-1 transition-colors duration-300 text-gray-800 transform  rounded-md sm:inline hover:bg-gray-300  hover:text-black`}
          >
            {btnNum}
          </button>
        ))}

        <button
        disabled={currentPage === numberOfPages}
        onClick={()=>handlePaginationButton(currentPage+1)}
        className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500">
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WorkerSubmission;
