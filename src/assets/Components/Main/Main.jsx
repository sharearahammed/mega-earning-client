import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import useAuth from '../Hook/useAuth';
import LoadingSpinner from '../Shareds/Shared';

const Main = () => {
    const {loading} = useAuth();
    if(loading) return <LoadingSpinner />
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;