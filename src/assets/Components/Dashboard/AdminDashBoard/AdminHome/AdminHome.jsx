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
        <div>
            <AdminStates
            user={totalUser}
            totalCoin={totalCoin}
            payment={totalPayment}
              />
            <AdminWithdrawReq />
        </div>
    );
};

export default AdminHome;