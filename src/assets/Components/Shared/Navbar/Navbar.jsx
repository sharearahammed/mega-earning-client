import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { FaCoins } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const axiosSecure = useAxiosSecure()
    const {
        data: coin = [""]
      } = useQuery({
        queryKey: ['coin'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/coins/${user.email}`)
          return res.data
        },
      })

  const links = (
    <>
      <li className="text-gray-400 font-bold">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#22AB59] font-bold rounded-full"
              : isPending
              ? "pending"
              : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      {user && (
        <>
          <li className="text-gray-400 font-bold">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#22AB59] font-bold  rounded-full"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={"/dashboard"}
            >
              Dashboard
            </NavLink>
          </li>
          <li className="lg:hidden text-gray-400 font-bold">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#22AB59] font-bold  rounded-full"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={"/userProfile"}
            >
              Profile
            </NavLink>
          </li>
          <li className="lg:hidden text-gray-400 font-bold">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#22AB59] font-bold  rounded-full"
                  : isPending
                  ? "pending"
                  : ""
              }
              
            >
              <FaCoins />{coin.coins}
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="fixed bg-transparent shadow shadow-green-400 flex-no-wrap z-10 w-full">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to={"/"} className="">
            <div className="hover:bg-gray-100 hover:border hover:rounded-lg px-3 py-1 flex lg:text-2xl font-extrabold">
              <h1>Mega<span className="bg-gradient-to-r from-[#099340] to-[#2ad471] bg-clip-text text-transparent">Earning</span></h1>
            </div>
            </Link>

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

            {user ? (
              <>
              <div className="lg dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div data-tip={user?.displayName} className="text-black tooltip tooltip-open tooltip-left w-14 border-2 border-[#2DE677] rounded-full">
                    <img data-tip={user?.displayName}
                    className="tooltip tooltip-open tooltip-left w-14 h-16"
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={-1}
                  className="lg:block hidden  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to={"/userProfile"} className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <a><FaCoins />{coin.coins}
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => logOut()}
                      className="bg-[#22AB59] text-white px-7 py-2 rounded-3xl"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
              <div>
              <button onClick={() => logOut()} className="bg-[#22AB59] text-white px-7 py-2 rounded-3xl lg:hidden">
                    Logout
                  </button>
              </div>
              </>
            ) : (
              <div className="flex gap-2 items-center mt-4 lg:mt-0">
                <Link to={"/login"}>
                  <button className="bg-[#22AB59] text-white px-7 py-2 rounded-3xl">
                    Login
                  </button>
                </Link>
                <Link to={"/signUp"}>
                  <button className="bg-[#22AB59] text-white px-7 py-2 rounded-3xl">
                    Register
                  </button>
                </Link>
                <button className="bg-[#22AB59] text-white px-7 py-2 rounded-3xl">
                  <a href="https://www.youtube.com/watch?v=aF5wEhVh2ZY">
                    WatchDemo
                  </a>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
