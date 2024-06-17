import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/useAxiosSecure";
import SideNavbar from "./SiveNavbar/SideNavbar";
import useAuth from "../Hook/useAuth";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../Shareds/Shared";
import { useState } from "react";



const Dashboard = () => {
    const {user,loading} = useAuth()
    const axiosSecure = useAxiosSecure();
    const [isActive, setActive] = useState(false);
    const closeSidebar = () => {
      setActive(false);
    };
    const { data : loginUser = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async()=>{
            const {data} = await axiosSecure.get(`/users/${user.email}`)
            return data
        }
    })
    if(loading) return <LoadingSpinner />
    
  return (
      
    
      <div className='relative min-h-screen md:flex'
      >
        <Helmet>
        <title>Dashboard | Home</title>
      </Helmet>
      {/* Sidebar */}
      <SideNavbar isActive={isActive} setActive={setActive} loginUser={loginUser} />
      

      {/* Outlet --> Dynamic content */}
      <div onClick={closeSidebar} className='flex-1 md:pl-56'>
          <Outlet />
      </div>
    </div>
      
  )
};

export default Dashboard;