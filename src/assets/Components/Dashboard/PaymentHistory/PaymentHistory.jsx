/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import PaymentHistoryTable from "./PaymentHistoryTable";
import { Helmet } from "react-helmet-async";

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
        <div className="pt-[99px] pb-6 p-5 lg:pl-14 min-h-screen rounded-none bg-no-repeat bg-cover overflow-x-auto w-full  text-gray-800 bg-gray-50"style={{
          backgroundImage:
            'url("https://i.ibb.co/Fm7Bs6W/2148015628.jpg")',
        }}>
           <Helmet>
        <title>Dashboard | Payment History</title>
      </Helmet>
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