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
import PrivateRoute from "../../Routes/PrivateRoute";
import AdminRoute from "./AdminRoute";
import TaskCreatorRoute from "./TaskCreatorRoute";
import WorkerRoute from "./WorkerRoute";
import DashboardHome from "../Components/Dashboard/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/userProfile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashboardHome />
          </PrivateRoute>
        ),
      },
      // TaskCreator
      {
        element: (
          <TaskCreatorRoute>
            <PrivateRoute>
              <TaskCreatorHome />
            </PrivateRoute>
          </TaskCreatorRoute>
        ),
      },
      {
        path: "taskCreator-home",
        element: (
          <TaskCreatorRoute>
            <PrivateRoute>
              <TaskCreatorHome />
            </PrivateRoute>
          </TaskCreatorRoute>
        ),
      },
      {
        path: "addNewTask",
        element: (
          <TaskCreatorRoute>
            <PrivateRoute>
              <AddTask />
            </PrivateRoute>
          </TaskCreatorRoute>
        ),
      },
      {
        path: "my-listings",
        element: (
          <TaskCreatorRoute>
            <PrivateRoute>
              <MyListings />
            </PrivateRoute>
          </TaskCreatorRoute>
        ),
      },
      {
        path: "purchase-coin",
        element: (
          <TaskCreatorRoute>
            <PrivateRoute>
              <PurchaseCoin />
            </PrivateRoute>
          </TaskCreatorRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <TaskCreatorRoute>
            <PrivateRoute>
              <PaymentHistory />
            </PrivateRoute>
          </TaskCreatorRoute>
        ),
      },

      // Worker
      {
        path: "worker-home",
        element: (
          <WorkerRoute>
            <PrivateRoute>
              <WorkerHome />
            </PrivateRoute>
          </WorkerRoute>
        ),
      },
      {
        path: "worker-tasklist",
        element: (
          <WorkerRoute>
            <PrivateRoute>
              <WorkerTaskList />
            </PrivateRoute>
          </WorkerRoute>
        ),
      },
      {
        path: "worker-tasklistDetails/:id",
        element: (
          <WorkerRoute>
            <PrivateRoute>
              <TaskListDetails />
            </PrivateRoute>
          </WorkerRoute>
        ),
      },
      {
        path: "worker-submission",
        element: (
          <WorkerRoute>
            <PrivateRoute>
              <WorkerSubmission />
            </PrivateRoute>
          </WorkerRoute>
        ),
      },
      {
        path: "withdrawForm",
        element: (
          <WorkerRoute>
            <PrivateRoute>
              <WithdrawForm />
            </PrivateRoute>
          </WorkerRoute>
        ),
      },
      // Admin Route
      {
        element: (
          <AdminRoute>
            <PrivateRoute>
              <AdminHome />
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <AdminHome />
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <AdminManageUsers />
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "manage-tasks",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <ManageTasks />
            </PrivateRoute>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
