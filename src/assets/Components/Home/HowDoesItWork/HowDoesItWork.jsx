
const HowDoesItWork = () => {
    return (
        <section id="works" className="relative bg-[#22AB59] py-10 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">How does it work?</h2>
            <p className="max-w-2xl mx-auto mt-4 text-base text-white leading-relaxed md:text-2xl">
                Our AI solution will help you from start to finish
            </p>
        </div>
        <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"><img alt="" loading="lazy" width="1000" height="500" decoding="async" data-nimg="1" className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"/>
            </div>
            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div
                        className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">1</span>
                    </div>
                    <h3 className="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">Register</h3>
                    <p className="mt-4 text-base text-white md:text-lg">
                    Sign up for free and create your account. Provide basic information and set up your profile to get started on the platform.
                    </p>
                </div>
                <div>
                    <div
                        className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">2</span>
                    </div>
                    <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Complete Tasks</h3>
                    <p className="mt-4 text-base text-white md:text-lg">
                    Browse through available tasks tailored to your interests and skills. Choose tasks that appeal to you, complete them according to instructions, and submit your work.
 

                    </p>
                </div>
                <div>
                    <div
                        className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">3</span>
                    </div>
                    <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Earn Rewards</h3>
                    <p className="mt-4 text-base text-white md:text-lg">
                    As you complete tasks, earn rewards in the form of coins or points. Accumulate your earnings and redeem them for a variety of rewards, including cash, gift cards, or other incentives.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
        >
    </div>
</section>
    );
};

export default HowDoesItWork;