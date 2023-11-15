import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

function RealAppraisalServicesPart() {
  return (
    <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 max-w-7xl m-auto px-10 xl:px-0 pb-0 lg:pb-16 mt-20 gap-0 xl:gap-20 border-b-[1px] border-gray-400">
      <div className="grid grid-cols-3 gap-3 lg:order-first order-last">
        <div className="relative col-span-2 h-[383px]">
          <div className="absolute bottom-[-30px] left-[-27px] w-[170px] h-[118px] bg-primary" />
          <img
            src="/images/sub7.jpg"
            alt="img"
            className="absolute top-0 h-[383px] lg:w-[483px] left-0 object-cover rounded-[10px]"
          />
        </div>
        <div className="mt-10">
          <img src="/images/sub8.jpg" className="object-contain h-[383px]" />
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="flex items-center justify-center lg:justify-start uppercase font-bold">
          <FiArrowDownRight className="text-primary mr-1 text-[20px] lg:text-[25px]" />
          <h1 className="text-[19px]">Our value</h1>
        </div>
        <div>
          <div className="text-[40px] lg:text-[60px] xl:text-7xl text-center lg:text-left capitalize mt-6 mb-10">
            <h2>Unlocking</h2>
            <h2>Real Appraisal</h2>
            <h2 className="text-primary"> Services</h2>
          </div>
        </div>
        <div className="relative lg:grid grid-cols-3 mb-20">
          <button className="absolute left-2/4 -translate-x-2/4 lg:relative register-button lg:col-span-1">
            Get Started Free
          </button>
          <p className="pt-16 lg:pt-0 text-lg font-synonym lg:col-span-2 lg:ml-8 text-center lg:text-left">
            Our experts can provide valuable insights and assist you in
            identifying properties.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RealAppraisalServicesPart;
