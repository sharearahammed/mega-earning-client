import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { useState } from 'react';

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeNavbar = () => {
        setIsOpen(false);
      };
    return (
        <div>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div onClick={closeNavbar}>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;