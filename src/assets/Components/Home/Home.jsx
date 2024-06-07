import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import FeedBack from "./Features/FeedBack/FeedBack";
import HowDoesItWork from "./HowDoesItWork/HowDoesItWork";
import TopEarner from "./TopEarner/TopEarner";
import useAuth from "../Hook/useAuth";
import LoadingSpinner from "../Shareds/Shared";

const Home = () => {
    const {loading} = useAuth();
    if(loading) return <LoadingSpinner />
    return (
        <div>
            <Helmet>
        <title>Megaearning | Home</title>
      </Helmet>
            <Banner />
            <Features />
            <HowDoesItWork />
            <TopEarner />
            <FeedBack />
        </div>
    );
};

export default Home;