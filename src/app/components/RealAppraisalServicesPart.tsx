import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

function RealAppraisalServicesPart() {
  return (
    <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 max-w-7xl m-auto px-10 xl:px-0 pb-16 mt-20 gap-20 border-b-[1px] border-gray-400">
      <div className="grid grid-cols-3 gap-3 md:order-first order-last">
        <div className="relative col-span-2 h-[383px]">
          <div className="absolute bottom-[-30px] left-[-27px] w-[170px] h-[118px] bg-primary" />
          <img
            src="/images/sub7.jpg"
            alt="img"
            className="absolute top-0 h-[383px] md:w-[483px] left-0 object-cover rounded-[10px]"
          />
        </div>
        <div className="mt-10">
          <img src="/images/sub8.jpg" className="object-contain h-[383px]" />
        </div>
      </div>
      <div className="md:col-span-1">
        <div className="flex items-center justify-center md:justify-start uppercase font-bold">
          <FiArrowDownRight className="text-primary mr-1 text-[20px] md:text-[25px]" />
          <h1 className="text-[19px]">Our value</h1>
        </div>
        <div>
          <div className="text-[40px] md:text-[60px] xl:text-7xl text-center md:text-left capitalize mt-6 mb-10">
            <h2>Unlocking</h2>
            <h2>Real Appraisal</h2>
            <h2 className="text-primary"> Services</h2>
          </div>
        </div>
        <div className="relative md:grid grid-cols-3 mb-20">
          <button className="absolute left-2/4 -translate-x-2/4 md:relative register-button md:col-span-1">
            Get Started Free
          </button>
          <p className="pt-16 md:pt-0 text-lg font-synonym md:col-span-2 md:ml-8 text-center md:text-left">
            Our experts can provide valuable insights and assist you in
            identifying properties.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RealAppraisalServicesPart;
