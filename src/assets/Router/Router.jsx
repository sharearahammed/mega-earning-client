import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Signup/Signup";
import Dashboard from "../Components/Dashboard/Dashboard";
import AddTask from "../Components/Dashboard/TaskCreator/AddTask";
import MyListings from "../Components/Dashboard/MyListings/MyListings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
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
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard />,
      children:[
        {
          path:'addNewTask',
          element: <AddTask />
        },
        {
          path:'my-listings',
          element: <MyListings />
        }
      ]
    }
  ]);

export default router;