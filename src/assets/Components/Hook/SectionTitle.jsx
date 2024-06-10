/* eslint-disable react/prop-types */

const SectionTitle = ({ heading, subHeading }) => {
    return (
      <div className=" mx-auto text-center py-8">
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className="text-[#22AB59] lg:text-[25px] mb-4"
        >
          ---{subHeading}---
        </p>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className="flex flex-col justify-center items-center"
        >
            <h3 className="w-full font-bold text-xl lg:text-4xl uppercase ">{heading}</h3>
          
          <img className="h-[80px] w-[300px]" src="https://i.ibb.co/sjzVcCN/pngtree-black-decorative-line-divider-line-png-image-5510587-removebg-preview.png" alt="" />
        </div>
      </div>
    );
  };
  
  export default SectionTitle;
  