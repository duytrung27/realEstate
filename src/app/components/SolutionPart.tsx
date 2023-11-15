import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

function SolutionPart() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:max-w-7xl m-auto mt-20 xl:mt-28 mb-20 gap-10 px-10 xl:px-0">
      <div className="m-auto lg:col-span-1">
        <div className="flex items-center justify-center md:justify-start uppercase font-bold">
          <FiArrowDownRight className="text-primary mr-1 text-[20px] md:text-[25px]" />
          <h1 className="text-[19px]">Solutions</h1>
        </div>
        <div>
          <div className="text-[40px] md:text-[60px] xl:text-7xl text-center md:text-left capitalize my-6 xl:leading-[77.07px]">
            <h2>We assist buyers</h2>
            <h2>in finding their</h2>
            <h2 className="text-primary font-bold">dream homes.</h2>
          </div>
        </div>
        <div className="relative md:grid md:grid-cols-3 mb-20">
          <button className="absolute left-2/4 -translate-x-2/4 md:relative register-button md:col-span-1">
            Get Started Free
          </button>
          <p className="pt-16 md:pt-0 font-synonym text-lg md:col-span-2 md:ml-8 text-center md:text-left">
            Our agents will guide you through the entire buying process, from
            property
          </p>
        </div>
      </div>
      <div>
        <img src="/images/sub.jpg" alt="img" className="object-contain" />
        <div className="flex justify-center mt-10 md:mt-0">
          <img
            alt="sub"
            className="object-contain w-12 h-12 cursor-pointer"
            src="/images/sub2.jpg"
          />
          <img
            alt="sub"
            src="/images/sub3.jpg"
            className="object-contain w-12 h-12 translate-x-[-20px] cursor-pointer"
          />
          <div className="flex bg-primary text-white rounded-full w-12 h-12 items-center justify-center text-lg translate-x-[-30px] cursor-pointer">
            4+
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionPart;
