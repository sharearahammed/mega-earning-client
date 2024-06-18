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
        queryKey: ['userss'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/users`)
          return res.data
        },
      })
 if(isLoading) <LoadingSpinner />


    return (
        <div className="pt-[90px] pb-6 p-5 lg:pl-14 min-h-screen rounded-none bg-no-repeat bg-cover overflow-x-auto w-full flex flex-col text-gray-800 bg-gray-50" style={{
          backgroundImage:
            'url("https://i.ibb.co/Fm7Bs6W/2148015628.jpg")',
        }}>
          <Helmet>
        <title>Dashboard | Users</title>
      </Helmet>
          <div className="md:pl-10">
          <div className="overflow-x-auto">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white mb-3">All Users:</h1>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>User Name </th>
                  <th>User Email</th>
                  <th>Photo</th>
                  <th>Role</th>
                  <th>Coin</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  userss?.map((user)=><ManageUsersTable 
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