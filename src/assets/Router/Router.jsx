import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Signup/Signup";
import Dashboard from "../Components/Dashboard/Dashboard";
import AddTask from "../Components/Dashboard/TaskCreator/AddTask";
import MyListings from "../Components/Dashboard/MyListings/MyListings";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import PurchaseCoin from "../Components/Dashboard/PurchaseCoin/PurchaseCoin";
import PaymentHistory from "../Components/Dashboard/PaymentHistory/PaymentHistory";
import WorkerTaskList from "../Components/Dashboard/WorkerDashBoard/WorkerTaskList";
import TaskListDetails from "../Components/Dashboard/WorkerDashBoard/TaskListDetails";
import WorkerSubmission from "../Components/Dashboard/WorkerDashBoard/WorkerSubmission";
import TaskCreatorHome from "../Components/Dashboard/TaskCreatorHome/TaskCreatorHome";
import WorkerHome from "../Components/Dashboard/WorkerDashBoard/WorkerHome/WorkerHome";
import UserProfile from "../Components/Home/UserProfile/UserProfile";
import AdminManageUsers from "../Components/Dashboard/AdminDashBoard/AdminManageUsers";
import ManageTasks from "../Components/Dashboard/AdminDashBoard/ManageTasks";
import WithdrawForm from "../Components/Dashboard/WorkerDashBoard/WithDrawals";
import AdminHome from "../Components/Dashboard/AdminDashBoard/AdminHome/AdminHome";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement:<ErrorPage />,
      children:[
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <SignUp />
        },
        {
          path:'/userProfile',
          element:<UserProfile />
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard />,
      errorElement:<ErrorPage />,
      children:[
        // TaskCreator
        {
          // index: true,
          element:<TaskCreatorHome />
        }
        ,
        {
          path:'taskCreator-home',
          element:<TaskCreatorHome />
        }
        ,
        {
          path:'addNewTask',
          element: <AddTask />
        },
        {
          path:'my-listings',
          element: <MyListings />
        },
        {
          path:'purchase-coin',
          element: <PurchaseCoin />
        },
        {
          path:'payment-history',
          element:<PaymentHistory />
        },

        // Worker
        {
          path:'worker-home',
          element:<WorkerHome />
        }
        ,
        {
          path:'worker-tasklist',
          element:<WorkerTaskList />
        },
        {
          path:'worker-tasklistDetails/:id',
          element:<TaskListDetails />
        },
        {
          path:"worker-submission",
          element:<WorkerSubmission />
        }
        ,
        {
          path:'withdrawForm',
          element:<WithdrawForm />
        }
        ,
        // Admin Route
        {
          path:'admin-home',
          element:<AdminHome />
        }
        ,
        {
          path:'manage-users',
          element:<AdminManageUsers />
        },
        {
          path:'manage-tasks',
          element:<ManageTasks />
        }
      ]
    }
  ]);

export default router;
