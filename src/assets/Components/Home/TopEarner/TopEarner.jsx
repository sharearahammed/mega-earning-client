import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hook/useAxiosCommon";

const TopEarner = () => {
  const axiosPublic = useAxiosCommon();
  const { data: topearners = [] } = useQuery({
    queryKey: ["topearners"],
    queryFn: async () => {
      const res = await axiosPublic.get("/topEarners");
      return res.data;
    },
  });
  // status

  console.log("topearner", topearners);

  return (
    <section id="our-team" className="bg-gray-100 py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl mb-7">
          Top Earners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topearners?.map((topearner) => (
            <div
              key={topearner._id}
              className="bg-white rounded-lg shadow-md p-6 my-6 text-center"
            >
              <img
                src={topearner?.picture}
                alt="Worker"
                className="w-full rounded-full mb-4 lg:h-[260px]"
              />
              <h3 className="text-xl font-semibold mb-2">Total Coins : {topearner?.coins}</h3>
              <p className="text-gray-700">Completed Tasks : {topearner?.completedTasks}</p>
              <img src={topearner?.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopEarner;
