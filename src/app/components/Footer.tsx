import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";

function Footer() {

  return (
    <div className="bg-black overflow-x-hidden font-synonym">
      <div className="px-10 xl:px-0 xl:max-w-7xl m-auto">
        <div className="md:flex md:justify-between pt-11 xl:pt-[99px] text-white border-b-[1px] border-gray-400">
          <div>
            <div className="text-lg font-normal  leading-7">
              Our experts can provide valuable insights <br /> and assist you in
              identifying properties.
            </div>
            <div className="flex gap-5 mt-3">
              <AiFillInstagram className="w-[19px] h-[19px] cursor-pointer" />
              <BsFacebook className="w-[18px] h-[17px] cursor-pointer" />
              <BsYoutube className="w-[19px] h-[19px] cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between text-base mt-6 md:mt-0 md:justify-end md:gap-8 lg:gap-[93px] lg:text-lg pb-10">
            <div className="flex-col justify-start items-start gap-[17px] inline-flex text-white font-normal  leading-7">
              <div className="text-white text-xl font-semibold  leading-[30.40px]">
                Product
              </div>
              <div className="flex-col justify-start items-start gap-[11px] flex">
                <div className="cursor-pointer">Features</div>
                <div className="cursor-pointer">Integrations</div>
                <div className="cursor-pointer">Pricing</div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[17px] inline-flex text-white font-normal  leading-7">
              <div className="text-white text-xl font-semibold  leading-[30.40px]">
                Company
              </div>
              <div className="flex-col justify-start items-start gap-[11px] flex">
                <div className="cursor-pointer">About us</div>
                <div className="cursor-pointer">Blog</div>
                <div className="cursor-pointer">Careers</div>
                <div className="cursor-pointer">Customers</div>
                <div className="cursor-pointer">Brand</div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[17px] inline-flex text-white font-normal  leading-7">
              <div className="text-white text-xl font-semibold  leading-[30.40px]">
                Resources
              </div>
              <div className="flex-col justify-start items-start gap-[11px] flex">
                <div className="cursor-pointer">Community</div>
                <div className="cursor-pointer">Contract</div>
                <div className="cursor-pointer">DPA</div>
                <div className="cursor-pointer">Terms of services</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex text-base justify-between pt-20 pb-11 xl:pb-[99px] text-white md:text-lg font-normal  leading-7">
          <div>@2023Capella. All rights reserved</div>
          <div className="cursor-pointer mt-4 md:mt-0">Term & Condition</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
