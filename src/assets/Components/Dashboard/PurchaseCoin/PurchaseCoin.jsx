import { useQuery } from "@tanstack/react-query";
import PurchaseCoinCard from "./PurchaseCoinCard";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const PurchaseCoin = () => {
    const axiosSecure = useAxiosSecure();
    const {
        data: cards = '',refetch
      } = useQuery({
        queryKey: ['room'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/purchasecoin`)
          return res.data
        },
      })

    return (
        <div className="pt-[90px] pb-6 p-5 lg:pl-14 min-h-screen rounded-none bg-no-repeat bg-cover overflow-x-auto w-full flex flex-col justify-center items-center text-gray-800 bg-gray-50" style={{
          backgroundImage:
            'url("https://i.ibb.co/Fm7Bs6W/2148015628.jpg")',
        }}>
           <Helmet>
        <title>Dashboard | Purchare Coin</title>
      </Helmet>
            <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-8 mt-12 max-sm:max-w-sm max-sm:mx-auto">
            {
                cards && cards?.map(cart=><PurchaseCoinCard key={cart._id} cart={cart} refetch={refetch}/>)
            }
            </div>
        </div>
    );
};

export default PurchaseCoin;