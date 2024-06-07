import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import AdminStates from './AdminStates';
import AdminWithdrawReq from './AdminWithdrawReq';

const AdminHome = () => {

    const axiosSecure = useAxiosSecure();
    const {
        data: user = [],
      } = useQuery({
        queryKey: ['userss'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/users`)
          return res.data
        },
      })
      const totalCoin = user.reduce((total, item) => total + item.coins, 0);
      const totalUser = user?.length;

      const {
        data: payment = [],
      } = useQuery({
        queryKey: ['paymentss'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/paymentdata`)
          return res.data
        },
      })

      console.log('payment length',payment.length)
      const totalPayment = payment?.length;



    return (
        <div className='pt-[90px] pb-6 p-5 lg:pl-14 min-h-screen rounded-none bg-no-repeat bg-cover overflow-x-auto w-full flex flex-col text-gray-800 bg-gray-50' style={{
          backgroundImage:
            'url("https://i.ibb.co/Fm7Bs6W/2148015628.jpg")',
        }}>
            <div className="">
            <AdminStates
            user={totalUser}
            totalCoin={totalCoin}
            payment={totalPayment}
              />
            <div className='mt-10'>
            <AdminWithdrawReq />
            </div>
            </div>
            
        </div>
    );
};

export default AdminHome;