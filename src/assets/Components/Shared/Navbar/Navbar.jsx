import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useAuth()
    const links = (
        <>
          <li className="text-gray-400 font-bold">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#FF5851] font-bold rounded-lg"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          {
            user ? 
            <>
            <li className="text-gray-400 font-bold">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#FF5851] font-bold  rounded-lg"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={"/about"}
            >
              Dashboard
            </NavLink>
          </li>
          <li className="text-gray-400 font-bold">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#FF5851] font-bold  rounded-lg"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={"/contact"}
            >
              Available Coin
            </NavLink>
          </li>
          <li className="text-gray-400 font-bold">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#FF5851] font-bold  rounded-lg"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={"/contact"}
            > 
              User Profile
            </NavLink>
          </li>
            </>
            :
            <li className="text-gray-400 font-bold">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#FF5851] font-bold  rounded-lg"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={"/rooms"}
            >
              WatchDemo
            </NavLink> 
          </li>
          }
        </>
      );
    return (
        <nav className="relative bg-white shadow ">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <div className="lg:text-2xl font-extrabold bg-gradient-to-r from-[#E63946] to-[#FB8B24]  bg-clip-text text-transparent">
            <Link to={'/'}>MEGAEARNING</Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-black  hover:text-gray-600  focus:outline-none  "
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <ul className="menu lg:menu-horizontal px-1">{links}</ul>
            </div>

            {user ? <div >
              <button onClick={()=>logOut()} className="bg-[#FF5851] text-white px-7 py-2 rounded-3xl">Logout</button>
            </div> :
            <div className="flex gap-2 items-center mt-4 lg:mt-0">
            <Link to={'/login'}>
            <button className="bg-[#FF5851] text-white px-7 py-2 rounded-3xl">Login</button>
            </Link>
            <Link to={'/signUp'}>
            <button className="bg-[#FF5851] text-white px-7 py-2 rounded-3xl">Register</button>
            </Link>
          </div>}
          </div>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;