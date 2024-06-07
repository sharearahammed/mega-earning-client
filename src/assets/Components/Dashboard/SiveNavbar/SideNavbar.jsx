/* eslint-disable react/prop-types */
import { AiOutlineBars } from "react-icons/ai";
import { GrLogout, GrTask } from "react-icons/gr";
import { MdHomeWork, MdManageAccounts, MdOutlinePostAdd } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hook/useAuth";
import { IoNotifications } from "react-icons/io5";
import { FaClipboardList, FaThList } from "react-icons/fa";
import { PiCoins, PiHandWithdrawBold } from "react-icons/pi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import NotificationModal from "./NotificationModal";

const SideNavbar = ({ loginUser }) => {
  const { user, logOut } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isActive, setActive] = useState(false);

  // for notification
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const { data: notifications = [] } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/notifications?toEmail=${user.email}`);
      return res.data;
    },
  });

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      {/* Small Screen Navbar */}
      <div className="fixed z-10 text-gray-800 flex justify-between w-full">
        <div>
          
        </div>
        <div className="flex justify-center items-center lg:mr-10">
          <div>
            {loginUser && (
              <div className="flex  flex-col">
                <div className="flex  items-center lg:gap-5">
                  <h1 className="text-[10px]">
                    Available coin: {loginUser.coins}
                  </h1>
                  <img
                    className="lg:h-10 h-7 rounded-full"
                    src={loginUser.image}
                    alt=""
                  />
                </div>
                <div className="flex  items-center gap-5">
                  <h1 className="text-[10px]">{loginUser.role}</h1> |
                  <h1 className="text-[10px]">{loginUser.name}</h1>
                </div>
              </div>
            )}
          </div>
          <div>
            <button className="lg:relative flex items-center justify-center">
              <div onClick={() => setIsOpen(true)}>
                <IoNotifications
                  className="lg:text-3xl"
                /> 
              </div>
              <NotificationModal
                    key={notifications._id}
                    notifications={notifications}
                    isOpen={isOpen}
                    closeModal={closeModal}
                  />
              <div className="text-[10px] lg:absolute -top-3 -right-4">+{notifications.length}</div>
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
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#D7FFDD] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-700 ease-in-out`}
      >
        <div>
          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}
            <div>
            <div className=" w-full md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-gradient-to-r from-[#17a450] to-[#22AB59] bg-clip-text text-transparent font-extrabold mx-auto">
            <Link to="/">MEGAEARNING</Link>
          </div>
            </div>
            <nav>
              {loginUser.role === "Admin" ? (
                <>
                  {/* Home */}
                  <NavLink
                    to="admin-home"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <MdHomeWork className="w-5 h-5" />

                    <span className="mx-4 font-medium">Home</span>
                  </NavLink>
                  <NavLink
                    to="manage-users"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <MdManageAccounts className="w-5 h-5" />

                    <span className="mx-4 font-medium">Manage Users</span>
                  </NavLink>
                  <NavLink
                    to="manage-tasks"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <GrTask className="w-5 h-5" />

                    <span className="mx-4 font-medium">Manage Task</span>
                  </NavLink>
                </>
              ) : (
                ""
              )}
              {loginUser.role === "Worker" ? (
                <>
                  {/* Home */}
                  <NavLink
                    to="worker-home"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <MdHomeWork className="w-5 h-5" />

                    <span className="mx-4 font-medium">Home</span>
                  </NavLink>
                  <NavLink
                    to="worker-tasklist"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <FaThList className="w-5 h-5" />

                    <span className="mx-4 font-medium">TaskList</span>
                  </NavLink>
                  <NavLink
                    to="worker-submission"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <FaClipboardList className="w-5 h-5" />

                    <span className="mx-4 font-medium">My Submission</span>
                  </NavLink>
                  <NavLink
                    to="withdrawForm"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <PiHandWithdrawBold className="w-5 h-5" />

                    <span className="mx-4 font-medium">Withdrawals</span>
                  </NavLink>
                </>
              ) : (
                ""
              )}
              {loginUser.role === "TaskCreator" ? (
                <>
                  {/* Home */}
                  <NavLink
                    to="taskCreator-home"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
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
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
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
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <FaClipboardList className="w-5 h-5" />

                    <span className="mx-4 font-medium">MyTask’s</span>
                  </NavLink>
                  <NavLink
                    to="purchase-coin"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <PiCoins className="w-5 h-5" />

                    <span className="mx-4 font-medium">Purchase Coin</span>
                  </NavLink>
                  <NavLink
                    to="payment-history"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <HiOutlineCurrencyDollar className="w-5 h-5" />

                    <span className="mx-4 font-medium">Payment history</span>
                  </NavLink>
                </>
              ) : (
                ""
              )}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <Link to={"/login"}>
            <button
              onClick={logOut}
              className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
            >
              <GrLogout className="w-5 h-5" />

              <span className="mx-4 font-medium">Logout</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
