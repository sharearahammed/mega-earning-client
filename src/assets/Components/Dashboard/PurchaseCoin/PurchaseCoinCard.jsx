/* eslint-disable react/prop-types */

import { useState } from "react";
import PurchaseModal from "../../Modal/PurchaseModal";


const PurchaseCoincart = ({cart,refetch}) => {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
      }
    return (
      <div className="bg-gradient-to-r from-white from-1% via-green-300 via-20% to-green-300 to-90% relative p-8 border border-gray-400 rounded-2xl shadow-sm flex flex-col">
      <div className="flex-1">
        <h3 className="text-xl font-semibold">TaskCreator</h3>
        <p className="mt-4 flex items-baseline">
          <span className="text-5xl font-extrabold tracking-tight">{cart?.coins}</span>
          <span className="ml-1 text-xl font-semibold">coins</span>
        </p>
        <p className="mt-6">{cart?.description}</p>
        <ul role="list" className="mt-6 space-y-6">
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span className="ml-3">{cart?.coins} coins</span>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span className="ml-3">${cart?.price}</span>
          </li>
        </ul>
      </div>
      <div>
      <button className="bg-emerald-500 text-white hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            label="Buy Now"
            onClick={() => setIsOpen(true)}
            >Buy Now</button>
          </div>
          <PurchaseModal
        isOpen={isOpen}
        closeModal={closeModal}
        cart={cart}
        refetch={refetch}
      />
      </div>

    );
};

export default PurchaseCoincart;
