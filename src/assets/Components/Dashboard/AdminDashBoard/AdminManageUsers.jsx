import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import ManageUsersTable from "./ManageUsersTable";
import LoadingSpinner from "../../Shareds/Shared";
import { Helmet } from "react-helmet-async";

const AdminManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {
        data: userss = [],refetch,isLoading
      } = useQuery({
        queryKey: ['userCoin'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/users`)
          return res.data
        },
      })
 if(isLoading) <LoadingSpinner />
    return (
        <div className="pt-[90px]">
          <Helmet>
        <title>Dashboard | Users</title>
      </Helmet>
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
                  userss && userss ? userss?.filter(a=>a?.role === 'Worker')?.map((user)=><ManageUsersTable 
                  key={user._id}
                  user={user}
                  refetch={refetch}
                   />) : "Please Reload the Page Again"
                }
              </tbody>
            </table>
          </div>
          </div>
    </div>
    );
};

export default AdminManageUsers;