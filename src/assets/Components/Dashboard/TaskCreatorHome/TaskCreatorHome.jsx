import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import TaskCreatorHomeTable from "./TaskCreatorHomeTable";
import TaskCreatorHomeStats from "./TaskCreatorHomeStats";

const TaskCreatorHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // userCollection
  const {
      data: userCoin = [],
    } = useQuery({
      queryKey: ['userCoin'],
      queryFn: async () => {
        const res = await axiosSecure.get(`/users/${user.email}`)
        return res.data
      },
    })
console.log('user total coin',userCoin.coins) 

// taskCollection
const {
  data: tasks = [],
} = useQuery({
  queryKey: ['tasks'],
  queryFn: async () => {
    const res = await axiosSecure.get(`/task/${user.email}`)
    return res.data
  },
})
const totalTaskQuantity = tasks.reduce((total, item) => total + item.task_quantity, 0);

console.log('current user tasks:',tasks)
console.log('current user totalTaskQuantity:',totalTaskQuantity)

// total payment paid by user
const {
  data: payments = [],
} = useQuery({
  queryKey: ['payments'],
  queryFn: async () => {
    const res = await axiosSecure.get(`/paymentdata/${user.email}`)
    return res.data
  },
})

const totalpayment = payments.reduce((total, item) => total + item.cart.price, 0);

console.log('current user paymentlist:',payments)
console.log('current user totalPayment:',totalpayment)

  const { data: submissions = [],refetch } = useQuery({
    queryKey: ["submissions"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/submission/${user.email}`);
      return res.data;
    },
  });
  console.log(submissions)
  return (
    <div className="pt-[90px]">

          <div>
            <TaskCreatorHomeStats
            userCoin={userCoin} 
            totalTaskQuantity={totalTaskQuantity}
            totalpayment={totalpayment}
             />
          </div>
          <div className="mt-20">
          <div className="overflow-x-auto">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white mb-3">Task To Review:</h1>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Worker Name </th>
                  <th>Worker Email</th>
                  <th>Task Title</th>
                  <th>Payable Amount</th>
                  <th>Submission Details</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                    submissions?.map((submission)=><TaskCreatorHomeTable 
                        key={submission._id}
                        submission={submission}
                        refetch={refetch}
                         />) 
                }
              </tbody>
            </table>
          </div>
          </div>
    </div>
  );
};

export default TaskCreatorHome;
