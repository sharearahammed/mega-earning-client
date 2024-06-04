/* eslint-disable react/prop-types */

import { useState } from "react";
import Button from "../../Shareds/Button";
import PurchaseModal from "../../Modal/PurchaseModal";


const PurchaseCoincart = ({cart,refetch}) => {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
      }
    return (
        <div className="border rounded-md p-6">
          <h3 className="text-2xl font-semibold mb-1">{cart?.description}</h3>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold">Cost: ${cart?.price}</h3>
          </div>
          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-5">Total Coin: {cart?.coins}</h4>
            
            <Button
            label="Buy Now"
            onClick={() => setIsOpen(true)}
            ></Button>
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