/* eslint-disable react/prop-types */
import { AiOutlineBars } from "react-icons/ai";
import { GrLogout, GrTask } from "react-icons/gr";
import { MdHomeWork, MdManageAccounts, MdOutlinePostAdd } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hook/useAuth";
import { IoNotifications } from "react-icons/io5";
import { FaClipboardList, FaThList } from "react-icons/fa";
import { PiCoins } from "react-icons/pi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

const SideNavbar = ({ loginUser }) => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      {/* Small Screen Navbar */}
      <div className="fixed z-10 bg-gray-100 text-gray-800 flex justify-between w-full">
        <div>
          <div className="items-center block cursor-pointer p-4 font-bold text-[10px] lg:text-2xl bg-gradient-to-r from-[#E63946] to-[#FB8B24]  bg-clip-text text-transparent">
            <Link to="/">MEGAEARNING</Link>
          </div>
        </div>
        <div className="flex justify-center items-center lg:mr-10">
          <div>
          {loginUser && (
            <div className="flex  flex-col">
              <div className="flex  items-center lg:gap-5">
                <h1 className="text-[10px]">Available coin: {loginUser.coins}</h1>
                <img
                  className="lg:h-10 h-7 rounded-full"
                  src={loginUser.image}
                  alt=""
                />
              </div>
              <div className="flex  items-center gap-5">
                <h1 className="text-[10px]">{loginUser.role}</h1> |<h1 className="text-[10px]">{loginUser.name}</h1>
              </div>
            </div>
          )}
          </div>
          <div>
            <button className="lg:relative flex items-center justify-center">
            <div><IoNotifications className="lg:text-3xl" /></div>
              <div className="text-[10px] lg:absolute -top-3 -right-4">+99</div>
            </button>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="lg:hidden mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`mt-[50px] lg:mt-14  md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            
            <nav>   
                {
                loginUser.role === 'Admin' ? (
                    <>
                    {/* Home */}
              <NavLink
                to="my-"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <MdHomeWork className="w-5 h-5" />

                <span className="mx-4 font-medium">Home</span>
              </NavLink>
              <NavLink
                to="mys"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <MdManageAccounts className="w-5 h-5" />

                <span className="mx-4 font-medium">Manage Users</span>
              </NavLink>
              <NavLink
                to="my-lings"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <GrTask className="w-5 h-5" />

                <span className="mx-4 font-medium">Manage Task</span>
              </NavLink>
                    </>
                ) : (
                    ""
                )
              }           
              {
                loginUser.role === 'Worker' ? (
                    <>
                    {/* Home */}
              <NavLink
                to="my"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <MdHomeWork className="w-5 h-5" />

                <span className="mx-4 font-medium">Home</span>
              </NavLink>
              <NavLink
                to="my-"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaThList className="w-5 h-5"/>

                <span className="mx-4 font-medium">TaskList</span>
              </NavLink>
              <NavLink
                to="my-s"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaClipboardList className="w-5 h-5" />

                <span className="mx-4 font-medium">My Submission</span>
              </NavLink>
                    </>
                ) : (
                    ""
                )
              }
              {
                loginUser.role === 'TaskCreator' ? (
                    <>
                    {/* Home */}
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <MdHomeWork className="w-5 h-5" />

                <span className="mx-4 font-medium">Home</span>
              </NavLink>
              <NavLink
                to="addNewTask"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <MdOutlinePostAdd className="w-5 h-5" />

                <span className="mx-4 font-medium">Add newTasks</span>
              </NavLink>
              <NavLink
                to="my-listings"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaClipboardList className="w-5 h-5" />

                <span className="mx-4 font-medium">MyTask’s</span>
              </NavLink>
              <NavLink
                to="my-kl"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <PiCoins className="w-5 h-5" />

                <span className="mx-4 font-medium">Purchase Coin</span>
              </NavLink>
              <NavLink
                to="my-"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <HiOutlineCurrencyDollar className="w-5 h-5" />

                <span className="mx-4 font-medium">Payment history</span>
              </NavLink>
                    </>
                ) : (
                    ""
                )
              }
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
