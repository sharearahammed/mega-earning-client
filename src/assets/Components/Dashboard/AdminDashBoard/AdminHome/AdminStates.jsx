/* eslint-disable react/prop-types */

const AdminStates = ({payment,user,totalCoin}) => {
    return (
        <div className="flex items-center">
      <div className="">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          States
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
          <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                  Total Users
                </dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-[#22AB59] dark:text-indigo-400">
                  {user ? user : ""}
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                  Total Coin
                </dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-[#22AB59] dark:text-indigo-400">
                  {totalCoin ? totalCoin : ""}
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                  {" "}
                  Total Payments
                </dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-[#22AB59] dark:text-indigo-400">
                  {payment ? payment : ""}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AdminStates;