import useAuth from "../Hook/useAuth";

const DashboardHome = () => {
    const {user} = useAuth();
    return (
        <div className="mt-16">
            <h1 className="text-2xl font-bold">Welcome {user?.displayName}</h1>
        </div>
    );
};

export default DashboardHome;