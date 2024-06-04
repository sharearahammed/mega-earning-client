import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Banner = () => {
    return (
        <div className="text-white">
            <Carousel>
                <div className="hero min-h-screen rounded-none bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/mt3SSC9/Empower-Yourself.jpg")',
          }}>
                    <div className="bg-black h-full w-full bg-opacity-70 flex flex-col items-center justify-center text-white">
                    <h1 className="lg:mb-10 pb-5 font-bold text-3xl lg:text-[90px]"><span className="text-[#2de677]">Empower</span> Yourself</h1>
                    <p className="lg:text-[20px]">Flexible Work, Secure Payments, Endless Possibilities</p>
                    </div>
                </div>
                <div className="hero min-h-screen rounded-none bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/KLz8dnz/Unlock-Your-Potential.jpg")',
          }}>
                   
                   <div className="bg-black h-full w-full bg-opacity-70 flex flex-col items-center justify-center text-white">
                    <h1 className="lg:mb-10 lg:px-0 px-3 pb-5 font-bold text-3xl lg:text-[90px]">Unlock Your <span className="text-[#2de677]">Potential</span></h1>
                    <p className="lg:px-0 px-4 text-[20px]">Join Our Platform and Start Earning Today!</p>
                    </div>
                </div>
                <div className="hero min-h-screen rounded-none bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/HX63Qsm/Seize-Opportunities.jpg")',
          }}>
                    <div className="bg-black h-full w-full bg-opacity-70 flex flex-col items-center justify-center text-white">
                    <h1 className="lg:mb-10 lg:px-0 *:px-5 pb-5 font-bold text-3xl lg:text-[90px]">Seize<span className="text-[#2de677]">Opportunities</span></h1>
                    <p className="text-[20px]">Earn Rewards for Completing Simple Tasks</p>
                    </div>
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;