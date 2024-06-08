import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { Helmet } from "react-helmet-async";

const WithdrawForm = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [coinToWithdraw, setCoinToWithdraw] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [paymentSystem, setPaymentSystem] = useState("Bkash");
  const [accountNumber, setAccountNumber] = useState("");
  const [loading, setLoading] = useState(false)

  const { data: userCoins = [] } = useQuery({
    queryKey: ["userCoins"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });

  const maxWithdrawableAmount = Math.floor(userCoins.coins / 20);

  const handleCoinChange = (e) => {
    const coins = parseInt(e.target.value, 10) || 0;
    setCoinToWithdraw(coins);
    setWithdrawAmount(coins / 20);
  };

  const handleSubmit = (e) => {
    try{
      setLoading(true)
    e.preventDefault();
    if (withdrawAmount > maxWithdrawableAmount) {
      toast.error(`Cannot withdraw more than ${maxWithdrawableAmount} dollars.`)
      setLoading(false)
      return ;
    }
    if(coinToWithdraw < 20){
        toast.error("Not enough coin!")
        setLoading(false)
        return;
    }
    const form = e.target;
    const worker_email = user?.email;
    const worker_name = user?.displayName;
      const withdraw_coin = parseFloat(form.withdraw_coin.value);
      const withdraw_amount = parseFloat(form.withdraw_amount.value);
      const payment_system = form.payment_system.value;
      const account_number = parseInt(form.account_number.value);
      const withdraw_time = new Date();
      const withDrawals = {
        worker_name,
        worker_email,
        withdraw_coin,
        withdraw_amount,
        payment_system,
        account_number,
        withdraw_time,
      };
      console.log(withDrawals)
      
      axiosSecure.post('/wihdraws',withDrawals)
      .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
            toast.success("Withdrawal request submitted successfully!")
            setLoading(false)
        }
      })

    // Reset form
    setCoinToWithdraw(0);
    setWithdrawAmount(0);
    setPaymentSystem("Bkash");
    setAccountNumber("");
    
    }catch(err){
      console.log(err.message)
      setLoading(false)
    }
  };
 

  return (
    <div className="pt-[90px] pb-6 p-10 lg:pl-14 min-h-screen rounded-none bg-no-repeat bg-cover overflow-x-auto w-full flex flex-col justify-center items-center text-gray-800 bg-gray-50"
    style={{
      backgroundImage:
        'url("https://i.ibb.co/Fm7Bs6W/2148015628.jpg")',
    }}>
       <Helmet>
        <title>Dashboard | Withdrawals</title>
      </Helmet>
      <div className='space-y-6'>
      <div className='space-y-1'>
      <h1 className="text-2xl font-bold">Conversion Rate: 20 Coins = 1 Dollar</h1>
      </div>
      <div className='text-xl'>
      <h1>Your Maximum Withdrawal Amount: <span className="font-bold text-black text-3xl">${maxWithdrawableAmount}</span></h1>
      </div>
      </div>
      
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mt-4 space-y-3 text-sm">
          <label>Coin to Withdraw: </label>
          <input 
          className="w-full px-4 py-3 text-gray-800 border border-[#1dd266] focus:outline-[#22AB59] rounded-md"
            type="number"
            value={coinToWithdraw}
            onChange={handleCoinChange}
            name="withdraw_coin"
            min="0"
          />
        </div>
        <div className="mt-4 space-y-3 text-sm">
          <label className="space-y-3 text-sm">Withdraw Amount: </label>
          <input
          className="w-full px-4 py-3 text-gray-800 border border-[#1dd266] focus:outline-[#22AB59] rounded-md"
            type="number"
            value={withdrawAmount}
            name="withdraw_amount"
            readOnly
          />
        </div>
        <div className="mt-4 space-y-3 text-sm">
          <label>Select Payment System: </label>
          <select 
          className="w-full px-4 py-3 text-gray-800 border border-[#1dd266] focus:outline-[#22AB59] rounded-md"
            value={paymentSystem}
            name="payment_system"
            onChange={(e) => setPaymentSystem(e.target.value)}
          >
            <option value="Bkash">Bkash</option>
            <option value="Rocket">Rocket</option>
            <option value="Nagad">Nagad</option>
          </select>
        </div>
        <div className="mt-4 space-y-3 text-sm">
          <label>Account Number: </label>
          <input
          className="w-full px-4 py-3 text-gray-800 border border-[#1dd266] focus:outline-[#22AB59] rounded-md"
            type="text"
            value={accountNumber}
            name="account_number"
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <button
          disabled={loading}
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#22AB59]'
        >
          {loading ? (
            <ImSpinner9 className='animate-spin m-auto' />
          ) : (
            ' Withdraw'
          )}
        </button>
      </form>
    </div>
  );
};

export default WithdrawForm;
