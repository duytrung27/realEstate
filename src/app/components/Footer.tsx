import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-black">
      <div className="lg:max-w-7xl m-auto">
        <div className="flex justify-between pt-[99px] text-white border-b-[1px] border-gray-400">
          <div>
            <div className="text-lg font-normal font-['Synonym'] leading-7">
              Our experts can provide valuable insights <br /> and assist you in
              identifying properties.
            </div>
            <div className="flex gap-5 mt-3">
              <AiFillInstagram className="w-[19px] h-[19px] cursor-pointer" />
              <BsFacebook className="w-[18px] h-[17px] cursor-pointer" />
              <BsYoutube className="w-[19px] h-[19px] cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-[93px] pb-10">
            <div className="flex-col justify-start items-start gap-[17px] inline-flex text-white text-lg font-normal font-['Synonym'] leading-7">
              <div className="text-white text-xl font-semibold font-['Synonym'] leading-[30.40px]">
                Product
              </div>
              <div className="flex-col justify-start items-start gap-[11px] flex">
                <div className="cursor-pointer">Features</div>
                <div className="cursor-pointer">Integrations</div>
                <div className="cursor-pointer">Pricing</div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[17px] inline-flex text-white text-lg font-normal font-['Synonym'] leading-7">
              <div className="text-white text-xl font-semibold font-['Synonym'] leading-[30.40px]">
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
            <div className="flex-col justify-start items-start gap-[17px] inline-flex text-white text-lg font-normal font-['Synonym'] leading-7">
              <div className="text-white text-xl font-semibold font-['Synonym'] leading-[30.40px]">
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
        <div className="flex justify-between pt-20 pb-[141px] text-white text-lg font-normal font-['Synonym'] leading-7">
          <div>@2023Capella. All rights reserved</div>
          <div className="cursor-pointer">Term & Condition</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
