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
                    <h1 className="pb-5 text-[90px]">Empower Yourself</h1>
                    <p className="text-[20px]">Flexible Work, Secure Payments, Endless Possibilities</p>
                    </div>
                </div>
                <div className="hero min-h-screen rounded-none bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/KLz8dnz/Unlock-Your-Potential.jpg")',
          }}>
                   
                   <div className="bg-black h-full w-full bg-opacity-70 flex flex-col items-center justify-center text-white">
                    <h1 className="text-[90px]">Unlock Your Potential</h1>
                    <p className="text-[20px]">Join Our Platform and Start Earning Today!</p>
                    </div>
                </div>
                <div className="hero min-h-screen rounded-none bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/HX63Qsm/Seize-Opportunities.jpg")',
          }}>
                    <div className="bg-black h-full w-full bg-opacity-70 flex flex-col items-center justify-center text-white">
                    <h1 className="text-[90px]">Seize Opportunities</h1>
                    <p className="text-[20px]">Earn Rewards for Completing Simple Tasks</p>
                    </div>
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;