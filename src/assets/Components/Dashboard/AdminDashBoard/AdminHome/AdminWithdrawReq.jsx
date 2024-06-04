import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import AdminWithdrawReqTable from "./AdminWithdrawReqTable";

const AdminWithdrawReq = () => {


    const axiosSecure = useAxiosSecure();
    const {
        data: withdraws = [],refetch
      } = useQuery({
        queryKey: ['withdraws'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/withdraws`)
          return res.data
        },
      })

      console.log('withdraws',withdraws)

    return (
        <div className="">
            <h1 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Withdraw request</h1>
            <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Worker Name </th>
                  <th>Withdraw Coin</th>
                  <th>Withdraw Amount</th>
                  <th>Payment Number</th>
                  <th>Payment System</th>
                  <th>Withdraw Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                    withdraws?.map((withdraw)=><AdminWithdrawReqTable 
                        key={withdraw._id}
                        withdraw={withdraw}
                        refetch={refetch}
                         />)
                }
              </tbody>
            </table>
            </div>
        </div>
    );
};

export default AdminWithdrawReq;