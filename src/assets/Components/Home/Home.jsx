import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import FeedBack from "./Features/FeedBack/FeedBack";
import HowDoesItWork from "./HowDoesItWork/HowDoesItWork";
import TopEarner from "./TopEarner/TopEarner";

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <HowDoesItWork />
            <TopEarner />
            <FeedBack />
        </div>
    );
};

export default Home;