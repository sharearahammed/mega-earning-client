import { Helmet } from "react-helmet-async";
import useAuth from "../Hook/useAuth";

const DashboardHome = () => {
    const {user} = useAuth();
    return (
        <div className="mt-16">
            <Helmet>
        <title>Dashboard</title>
      </Helmet>
            <h1 className="text-2xl font-bold">Welcome {user?.displayName}</h1>
        </div>
    );
};

export default DashboardHome;