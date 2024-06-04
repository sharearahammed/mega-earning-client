/* eslint-disable react/prop-types */

const TaskCreatorHomeStats = ({userCoin,totalTaskQuantity,totalpayment}) => {
    return (
        <div className="flex items-center">

    <div className="">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">States</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:grid-cols-3 mt-4">
            <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                <div className="px-4 py-5 sm:p-6">
                    <dl>
                        <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Available Coin</dt>
                        <dd className="mt-1 text-3xl leading-9 font-semibold text-[#22AB59] dark:text-indigo-400">{userCoin.coins}</dd>
                    </dl>
                </div>
            </div>
            <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                <div className="px-4 py-5 sm:p-6">
                    <dl>
                        <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Pending Task</dt>
                        <dd className="mt-1 text-3xl leading-9 font-semibold text-[#22AB59] dark:text-indigo-400">{totalTaskQuantity}
                        </dd>
                    </dl>
                </div>
            </div>
            <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                <div className="px-4 py-5 sm:p-6">
                    <dl>
                        <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400"> Total Payment Paid</dt>
                        <dd className="mt-1 text-3xl leading-9 font-semibold text-[#22AB59] dark:text-indigo-400">${totalpayment}</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default TaskCreatorHomeStats;