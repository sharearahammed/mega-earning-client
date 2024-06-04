import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import ManageUsersTable from "./ManageUsersTable";

const AdminManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {
        data: users = [],refetch
      } = useQuery({
        queryKey: ['userCoin'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/users`)
          return res.data
        },
      })

    return (
        <div className="pt-[90px]">
          <div className="">
          <div className="overflow-x-auto">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white mb-3">All Workers:</h1>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Worker Name </th>
                  <th>Worker Email</th>
                  <th>Photo</th>
                  <th>Role</th>
                  <th>Coin</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                    users?.filter(a=>a.role === 'Worker')?.map((user)=><ManageUsersTable 
                        key={user._id}
                        user={user}
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

export default AdminManageUsers;