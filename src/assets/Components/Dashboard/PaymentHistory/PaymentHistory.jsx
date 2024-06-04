/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import PaymentHistoryTable from "./PaymentHistoryTable";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();


    const {
        data: carts = [],refetch
      } = useQuery({
        queryKey: ['room'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/paymentdata/${user.email}`)
          return res.data
        },
      })
    return (
        <div className="overflow-x-auto pt-[90px] w-full  flex flex-col justify-center items-center text-gray-800 rounded-xl">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Cost</th>
        <th>Coin Earn</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        carts && carts?.map((cart,idx)=><PaymentHistoryTable key={cart._id}
            cart={cart}
            idx={idx}
             />)
      }
      
    </tbody>
  </table>
</div>
    );
};

export default PaymentHistory;