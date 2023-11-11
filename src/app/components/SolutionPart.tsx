import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

function SolutionPart() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:max-w-7xl m-auto mt-40 mb-20 gap-10">
      <div className="m-auto lg:col-span-1">
        <div className="flex items-center justify-center lg:justify-start uppercase font-bold">
          <FiArrowDownRight className="text-primary mr-1 text-[25px]" />
          <h1 className="text-[19px]">Solutions</h1>
        </div>
        <div>
          <div className="text-7xl capitalize my-6 leading-[77.07px]">
            <h2>We assist buyers</h2>
            <h2>in finding their</h2>
            <h2 className="text-primary">dream homes.</h2>
          </div>
        </div>
        <div className="grid grid-cols-3 mb-20">
          <button className="register-button col-span-1">
            Get Started Free
          </button>
          <p className="text-lg col-span-2 ml-8">
            Our agents will guide you through the entire buying process, from
            property
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-end h-96 bg-[url('/images/sub.jpg')] bg-no-repeat bg-contain"></div>
        <div className="flex justify-center">
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
