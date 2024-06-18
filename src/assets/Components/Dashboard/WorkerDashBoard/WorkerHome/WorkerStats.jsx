/* eslint-disable react/prop-types */

import { FaCoins, FaDollarSign } from "react-icons/fa6";
import { SiVirustotal } from "react-icons/si";

const WorkerStats = ({ userCoin, submissions, totalPayableAmount }) => {
  return (
    <div className="flex items-center">
      <div className="">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          States
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-5 gap-10 sm:grid-cols-3 mt-10">
          <div className="bg-white shadow-black shadow-sm rounded-lg dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className=" text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                  Available Coin
                </dt>
                <dd className="relative  mt-1 text-3xl leading-9 font-semibold text-[#22AB59] dark:text-indigo-400 flex items-center gap-3">
                <p className="absolute p-3 shadow-black shadow-sm text-white bg-blue-500 rounded-lg -top-[75px] -right-[35px] "><FaCoins />
                </p>
                {userCoin?.coins}
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white shadow-black shadow-sm rounded-lg dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                  Total Submission
                </dt>
                <dd className="relative mt-1 text-3xl leading-9 font-semibold text-[#22AB59] dark:text-indigo-400 flex items-center gap-3">
                  <p className="absolute shadow-black shadow-sm p-3 text-white bg-black rounded-lg -top-[75px] -right-[35px]"><SiVirustotal /></p>
                
                  {submissions?.length}
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white shadow-black shadow-sm rounded-lg dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400 ">
                  {" "}
                  Total Earning
                </dt>
                <dd className="relative mt-1 text-3xl leading-9 font-semibold text-[#22AB59] dark:text-indigo-400 flex items-center gap-3">
                <p className="absolute p-3 shadow-black shadow-sm text-white bg-[#5DB161] rounded-lg -top-[75px] -right-[35px]"><FaDollarSign /></p>
                  {totalPayableAmount}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerStats;
