/* eslint-disable react/prop-types */
import { AiOutlineBars } from "react-icons/ai";
// import { GrLogout, GrTask } from "react-icons/gr";
// import { MdHomeWork, MdManageAccounts, MdOutlinePostAdd } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hook/useAuth";
import { IoNotifications } from "react-icons/io5";
import { FaCoins } from "react-icons/fa";
// import { FaClipboardList, FaCoins, FaThList } from "react-icons/fa";
// import { PiCoins, PiHandWithdrawBold } from "react-icons/pi";
// import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import NotificationModal from "./NotificationModal";

const SideNavbar = ({ isActive,setActive, loginUser }) => {
  const { user, logOut } = useAuth();
  const axiosSecure = useAxiosSecure();

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

  return (
    <div>
      {/* Small Screen Navbar */}
      <div className="pt-5 fixed z-10 text-gray-800 flex justify-end w-full">
        
        <div className="flex justify-center items-center lg:mr-10">
          <div>
            {loginUser && (
              <div className="flex  flex-col">
                <div className="flex  items-center gap-4 lg:gap-6">
                  <div className="text-[10px] lg:text-[20px] flex items-center gap-2">
                    <div>
                    <img className="h-9 w-9" src="https://i.ibb.co/K0w0SRf/coin-icon-coin-thin-line-icon-101027460-removebg-preview.png" alt="" />
                    </div>
                    <div>{loginUser.coins}</div>
                  </div>
                  <div className="rounded-full">
                  <img
                    className="lg:h-14 lg:w-14 h-7 w-7 border border-gray-400 rounded-full "
                    src={loginUser.image}
                    alt=""
                  />
                  </div>
                  <div className="pl-6">
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
              <div className="text-[10px] lg:text-[20px] lg:absolute -top-3 -right-4">+{notifications.length}</div>
            </button>
          </div>
                </div>
                
                <div className="text-[10px] lg:text-[20px] flex pt-2 items-center gap-5">
                  <h1 className="">{loginUser.role}</h1> |
                  <h1 className="">{loginUser.name}</h1>
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setActive(!isActive)}
          className="lg:hidden mobile-menu-button p-2 lg:p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#D7FFDD] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          !isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-700 ease-in-out
        bg-gradient-to-r from-gray-300 to-green-500`}
      >
        <div>
          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}
            <div>
            <div className=" w-full md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto">
            <Link to={"/"} className="">
            <div className=" flex justify-center items-center gap-2 lg:text-2xl font-extrabold">
            <img className="h-9 lg:h-10" src="https://i.ibb.co/hCm3GC9/4136942-removebg-preview.png" alt="" />
              <h1>Mega<span className="bg-gradient-to-r from-[#256f43] to-[#175832] bg-clip-text text-transparent">Earning</span></h1>
            </div>
            </Link>
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
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-200 rounded-lg   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-200  text-gray-700"
                          : "text-black"
                      }`
                    }
                  >
                    {/* <MdHomeWork className="w-5 h-5" /> */}
                    <img className="w-7 h-7" src="https://i.ibb.co/cY7rt52/76d26e52172a185614e9ce4d32e00d88.png" alt="" />

                    <span className="mx-4 font-medium">Home</span>
                  </NavLink>
                  <NavLink
                    to="manage-users"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-200 rounded-lg   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-200 rounded-lg  text-gray-700"
                          : "text-black"
                      }`
                    }
                  >
                    {/* <MdManageAccounts className="w-5 h-5" /> */}
                    <img className="w-7 h-7" src="https://i.ibb.co/VJfXLBT/user-management-57.png" alt="" />

                    <span className="mx-4 font-medium">Manage Users</span>
                  </NavLink>
                  <NavLink
                    to="manage-tasks"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-200 rounded-lg   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-200 rounded-lg  text-gray-700"
                          : "text-black"
                      }`
                    }
                  >
                    {/* <GrTask className="w-5 h-5" /> */}
                    <img className="w-7 h-8" src="https://i.ibb.co/0XprJr2/images-1-removebg-preview.png" alt="" />

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
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-200 rounded-lg   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-200 rounded-lg  text-gray-700"
                          : "text-black"
                      }`
                    }
                  >
                    {/* <MdHomeWork className="w-5 h-5" /> */}
                    <img className="w-7 h-7" src="https://i.ibb.co/cY7rt52/76d26e52172a185614e9ce4d32e00d88.png" alt="" />

                    <span className="mx-4 font-medium">Home</span>
                  </NavLink>
                  <NavLink
                    to="worker-tasklist"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-200 rounded-lg   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-200 rounded-lg  text-gray-700"
                          : "text-black"
                      }`
                    }
                  >
                    {/* <FaThList className="w-5 h-5" /> */}
                    <img className="w-8 h-8" src="https://i.ibb.co/zNsxP98/pngtree-task-list-line-icon-png-image-9133765.png" alt="" />

                    <span className="mx-4 font-medium">TaskList</span>
                  </NavLink>
                  <NavLink
                    to="worker-submission"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-200 rounded-lg   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-200 rounded-lg  text-gray-700"
                          : "text-black"
                      }`
                    }
                  >
                    {/* <FaClipboardList className="w-5 h-5" /> */}
                    <img className="w-7 h-7" src="https://i.ibb.co/cTpw7rm/4301554.png" alt="" />

                    <span className="mx-4 font-medium">My Submission</span>
                  </NavLink>
                  <NavLink
                    to="withdrawForm"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-200 rounded-lg   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-200 rounded-lg  text-gray-700"
                          : "text-black"
                      }`
                    }
                  >
                    {/* <PiHandWithdrawBold className="w-5 h-5" /> */}
                    <img className="w-7 h-7" src="https://i.ibb.co/nC9JB3Z/free-withdrawal-1795307-1522572.png" alt="" />

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
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-200 rounded-lg   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-200 rounded-lg  text-gray-700"
                          : "text-black"
                      }`
                    }
                  >
                    {/* <MdHomeWork className="w-5 h-5" /> */}
                    <img className="w-7 h-7" src="https://i.ibb.co/cY7rt52/76d26e52172a185614e9ce4d32e00d88.png" alt="" />

                    <span className="mx-4 font-medium">Home</span>
                  </NavLink>
                  <NavLink
                    to="addNewTask"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-200 rounded-lg   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-200 rounded-lg  text-gray-700"
                          : "text-black"
                      }`
                    }
                  >
                    {/* <MdOutlinePostAdd className="w-5 h-5" /> */}
                    <img className="w-7 h-7" src="https://i.ibb.co/DbLk0Tj/clipboard-task-add-regular-icon-202968.png" alt="" />

                    <span className="mx-4 font-medium">Add newTasks</span>
                  </NavLink>
                  <NavLink
                    to="my-listings"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-200 rounded-lg   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-200 rounded-lg  text-gray-700"
                          : "text-black"
                      }`
                    }
                  >
                    {/* <FaClipboardList className="w-5 h-5" /> */}
                    <img className="w-9 h-7" src="https://i.ibb.co/sHhhwSr/png-clipart-computer-icons-task-management-action-item-compliance-icon-angle-text-removebg-preview.png" alt="" />

                    <span className="mx-4 font-medium">MyTask’s</span>
                  </NavLink>
                  <NavLink
                    to="purchase-coin"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-200 rounded-lg   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-200 rounded-lg  text-gray-700"
                          : "text-black"
                      }`
                    }
                  >
                    {/* <PiCoins className="w-5 h-5" /> */}
                    <img className="w-7 h-7" src="https://i.ibb.co/K0w0SRf/coin-icon-coin-thin-line-icon-101027460-removebg-preview.png" alt="" />

                    <span className="mx-4 font-medium">Purchase Coin</span>
                  </NavLink>
                  <NavLink
                    to="payment-history"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-200 rounded-lg   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-200 rounded-lg  text-gray-700"
                          : "text-black"
                      }`
                    }
                  >
                    {/* <HiOutlineCurrencyDollar className="w-5 h-5" /> */}
                    <img className="w-7 h-7" src="https://i.ibb.co/2KL6XNk/4827568.png" alt="" />

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
              className="flex w-full items-center px-4 py-2 mt-5 text-black hover:bg-gray-200 rounded-lg   hover:text-gray-700 transition-colors duration-300 transform"
            >
              {/* <GrLogout className="w-5 h-5" /> */}
              <img className="w-7 h-7" src="https://i.ibb.co/w6RTKgQ/logout-removebg-preview.png" alt="" />

              <span className="mx-4 font-medium">Logout</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
