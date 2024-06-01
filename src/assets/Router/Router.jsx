import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Signup/Signup";
import Dashboard from "../Components/Dashboard/Dashboard";

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
      path:'dashboard',
      element:<Dashboard />
    }
  ]);

export default router;