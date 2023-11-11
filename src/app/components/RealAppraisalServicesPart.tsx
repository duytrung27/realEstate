import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

function RealAppraisalServicesPart() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:max-w-7xl m-auto pb-16 mt-20 gap-20 border-b-[1px] border-gray-400">
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 relative">
          <div className="absolute bottom-16   left-[-27px] w-[170px] h-[118px] bg-primary" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/sub7.jpg')] bg-no-repeat bg-contain"></div>
        </div>
        <div className="bg-[url('/images/sub8.jpg')] bg-no-repeat bg-contain mt-10" />
      </div>
      <div className="m-auto lg:col-span-1">
        <div className="flex items-center justify-center lg:justify-start uppercase font-bold">
          <FiArrowDownRight className="text-primary mr-1 text-[25px]" />
          <h1 className="text-[19px]">Our value</h1>
        </div>
        <div>
          <div className="text-7xl capitalize mt-6 mb-10">
            <h2>Unlocking</h2>
            <h2>Real Appraisal</h2>
            <h2 className="text-primary"> Services</h2>
          </div>
        </div>
        <div className="grid grid-cols-3 mb-20">
          <button className="register-button col-span-1">
            Get Started Free
          </button>
          <p className="text-lg col-span-2 ml-8">
            Our experts can provide valuable insights and assist you in
            identifying properties.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RealAppraisalServicesPart;
