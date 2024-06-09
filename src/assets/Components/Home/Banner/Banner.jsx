import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="text-white rounded-lg">
      <Carousel>
        <div
          className="mt-[65px] lg:mt-[85px] hero min-h-screen bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/QPpXp1C/earn-money01.jpg")',
          }}
        >
          <div className="bg-black h-full w-full bg-opacity-55 flex flex-col items-center justify-center text-white">
            <div className="pl-5 md:pl-20 lg:pl-20 w-full text-left flex flex-col justify-start">
            <h1 className="text-white lg:mb-10 pb-5 font-bold text-xl lg:text-[60px]">
            Earn Cash for Simple Tasks!
            </h1>
            <p className="lg:text-[25px] font-extralight pb-5">
            Complete tasks, earn money, and watch your earnings grow
            </p>
            <Link to={"/login"}>
            <button className="transition-transform duration-300 ease-in-out hover:scale-110 bg-gradient-to-r from-emerald-500 from-10% via-green-500 via-50% to-green-600 to-90% lg:text-[20px] text-[10px] px-7 py-2 rounded-full mt-5">Start Earning Now</button>
            </Link>
            </div>
          </div>
        </div>
        <div
          className="mt-[57px] lg:mt-[82px] hero min-h-screen rounded-none bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/CnhWCBt/flexible.png")',
          }}
        >
          <div className="bg-black h-full w-full bg-opacity-55 flex flex-col items-center justify-center text-white">
            <div className="pl-5 md:pl-20 lg:pl-20 w-full text-left flex flex-col justify-start">
            <h1 className="text-white lg:mb-10 pb-5 font-bold text-xl lg:text-[60px]">
            Work Anytime, Anywhere
            </h1>
            <p className="lg:text-[25px] pb-5">
            Enjoy the freedom to work on your own schedule.
            </p>
            <Link to={"/login"}>
            <button className="bg-gradient-to-r from-emerald-500 from-10% via-green-500 via-50% to-green-600 to-90% lg:text-[20px] text-[10px] px-7 py-2 rounded-full mt-5 transition-transform duration-300 ease-in-out hover:scale-110">Get Started</button>
            </Link>
            </div>
          </div>
        </div>
        <div
          className="mt-[57px] lg:mt-[82px] hero min-h-screen rounded-none bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/jrjPTx7/success.jpg")',
          }}
        >
          <div className="bg-black h-full w-full bg-opacity-55 flex flex-col items-center justify-center text-white">
            <div className="pl-5 md:pl-20 lg:pl-20 w-full text-left flex flex-col justify-start">
            <h1 className="text-white lg:mb-10 pb-5 font-bold text-xl lg:text-[60px]">
            Success Stories from Our Users
            </h1>
            <p className="lg:text-[25px] pb-5">
            See how our platform is changing lives
            </p>
            <Link to={"/login"}>
            <button className="bg-gradient-to-r from-emerald-500 from-10% via-green-500 via-50% to-green-600 to-90% lg:text-[20px] text-[10px] px-7 py-2 rounded-full mt-5 transition-transform duration-300 ease-in-out hover:scale-110">Join Our Community</button>
            </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
