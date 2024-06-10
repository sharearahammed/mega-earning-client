import SectionTitle from "../../Hook/SectionTitle";

/* eslint-disable react/no-unescaped-entities */
const Features = () => {
  return (
    <div
      id="features"
      className="container mx-auto max-w-7xl mb-20"
    >
      <div className="flex-col items-center text-center">
        <SectionTitle 
        subHeading="Features that Make Earning Easy"
        heading="Features"
        >
        </SectionTitle>

      </div>

      <div className="mx-auto max-w-7xl grid justify-center gap-4 sm:grid-cols-2  md:grid-cols-3">
        <div data-aos="flip-left" data-aos-duration="2000" className="relative overflow-hidden rounded-lg border border-black hover:border-white bg-white select-none hover:shadow hover:shadow-[#22AB59] p-2">
          <div className="flex flex-col justify-between rounded-md p-6">
            <img className="h-20 w-20" src="https://i.ibb.co/fd7Y1QB/Earn-Coins-by-Completing-Tasks.png" alt="" />
            <div className="space-y-2">
              <h3 className="font-bold">Earn Coins by Completing Tasks</h3>
              <p className="text-sm text-muted-foreground text-justify">
              Complete a variety of tasks ranging from surveys, data entry, to small freelance projects, and earn coins that can be redeemed for rewards or cash.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="flip-left" data-aos-duration="2000" className="relative overflow-hidden rounded-lg border border-black hover:border-white bg-white select-none hover:shadow hover:shadow-[#22AB59] p-2">
          <div className="flex  flex-col justify-between rounded-md p-6">
          <img className="h-20 w-20" src="https://i.ibb.co/NZ72HWs/Create-and-Manage-Tasks.png" alt="" />
            <div className="space-y-2">
              <h3 className="font-bold">Create and Manage Tasks</h3>
              <p className="text-sm text-justify">As a task creator, easily create new tasks, set deadlines, and manage the progress of ongoing tasks, ensuring efficient completion and quality control.</p>
            </div>
          </div>
        </div>

        <div data-aos="flip-left" data-aos-duration="2000" className="relative overflow-hidden rounded-lg border border-black hover:border-white bg-white select-none hover:shadow hover:shadow-[#22AB59] p-2">
          <div className="flex  flex-col justify-between rounded-md p-6">
          <img className="h-20 w-20" src="https://i.ibb.co/Fbkp4Zq/Secure-Payments.png" alt="" />
            <div className="space-y-2">
              <h3 className="font-bold">Secure Payments</h3>
              <p className="text-sm text-muted-foreground">
              Rest assured with our secure payment system. Receive your earnings promptly and securely through various payment methods, protecting your financial information at all times.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="flip-left" data-aos-duration="2000" className="relative overflow-hidden rounded-lg border border-black hover:border-white bg-white select-none hover:shadow hover:shadow-[#22AB59] p-2">
          <div className="flex  flex-col justify-between rounded-md p-6">
          <img className="h-20 w-20" src="https://i.ibb.co/pdJGRWf/Community-Support.jpg" alt="" />
            <div className="space-y-2">
              <h3 className="font-bold">Community Support</h3>
              <p className="text-sm text-muted-foreground text-justify">
              Join a vibrant community of users and get support from fellow members and moderators. Share tips, discuss tasks, and build connections with like-minded individuals.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="flip-left" data-aos-duration="2000" className="relative overflow-hidden rounded-lg border border-black hover:border-white bg-white select-none hover:shadow hover:shadow-[#22AB59] p-2">
          <div className="flex  flex-col justify-between rounded-md p-6">
          <img className="h-20 w-20" src="https://i.ibb.co/HHPMhS4/Task-Variety1.png" alt="" />
            
            <div className="space-y-2">
              <h3 className="font-bold">Task Variety</h3>
              <p className="text-sm text-muted-foreground text-justify">
              Explore a wide range of tasks catering to diverse interests and skills. From simple data verification to creative writing, there's something for everyone.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="flip-left" data-aos-duration="2000" className="relative overflow-hidden rounded-lg border border-black hover:border-white bg-white select-none hover:shadow hover:shadow-[#22AB59] p-2">
          <div className="flex  flex-col justify-between rounded-md p-6">
          <img className="h-20 w-20" src="https://i.ibb.co/DrbdB0S/Referral-Program.png" alt="" />
            <div className="space-y-2">
              <h3 className="font-bold">Referral Program</h3>
              <p className="text-sm text-muted-foreground text-justify">
              Invite friends and earn extra rewards through our referral program. Spread the word about our platform and reap the benefits together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
