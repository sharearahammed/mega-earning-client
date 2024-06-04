import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hook/useAxiosCommon";
import PurchaseCoinCard from "./PurchaseCoinCard";

const PurchaseCoin = () => {
    const axiospublic = useAxiosCommon();
    const {
        data: cards = '',refetch
      } = useQuery({
        queryKey: ['room'],
        queryFn: async () => {
          const res = await axiospublic.get(`/purchasecoin`)
          return res.data
        },
      })
      console.log(cards)
    return (
        <div className="pt-[90px] w-full  flex flex-col justify-center items-center text-gray-800 rounded-xl">
            <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-8 mt-12 max-sm:max-w-sm max-sm:mx-auto">
            {
                cards && cards?.map(cart=><PurchaseCoinCard key={cart._id} cart={cart} refetch={refetch}/>)
            }
            </div>
        </div>
    );
};

export default PurchaseCoin;