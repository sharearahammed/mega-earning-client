import { Helmet } from "react-helmet-async";
import useAuth from "../Hook/useAuth";

const DashboardHome = () => {
    const {user} = useAuth();
    return (
        <>
        <Helmet>
        <title>Dashboard</title>
      </Helmet>
        <div className="pt-16 pl-10 min-h-screen rounded-none bg-no-repeat bg-cover flex justify-center items-center"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/Fm7Bs6W/2148015628.jpg")',
        }}>
            <h1 className="text-6xl font-bold">Welcome {user?.displayName}</h1>

        </div>
        </>
    );
};

export default DashboardHome;
