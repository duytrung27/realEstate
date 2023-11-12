import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";
import ScrollContainer from "react-indiana-drag-scroll";

function RentalPart() {
  const items = [
    {
      image: "/images/sub4.jpg",
      title: "Forest Retreat",
      des: "Are you looking to find your dream home or invest in a lucrative property.",
    },
    {
      image: "/images/sub5.jpg",
      title: "Woodland Retreat",
      des: "When it comes to selling your property, our team is equipped with the expertise.",
    },
    {
      image: "/images/sub6.jpg",
      title: "Harmony House",
      des: "Our agents will guide you through the entire buying process, from property",
    },
    {
      image: "/images/sub4.jpg",
      title: "Aliva Priva Jardin",
      des: "If you're in need of rental services, our team can assist you in finding suitable ",
    },
    {
      image: "/images/sub6.jpg",
      title: "Harmony House",
      des: "Our agents will guide you through the entire buying process, from property",
    },
    {
      image: "/images/sub4.jpg",
      title: "Aliva Priva Jardin",
      des: "If you're in need of rental services, our team can assist you in finding suitable ",
    },
  ];

  return (
    <div className="bg-background">
      <div className="lg:max-w-7xl m-auto w-full text-center align-middle pt-32 pb-32">
        <div className="flex items-center justify-center uppercase font-bold">
          <FiArrowDownRight className="text-primary mr-1 text-[20px] md:text-[25px]" />
          <h1 className="text-[19px]">Dreamer Home</h1>
        </div>
        <div className="text-[40px] md:text-[60px] xl:text-7xl capitalize mt-6 mb-20">
          <h1>If you're in need of</h1>
          <h1>
            <span className="text-primary"> rental </span>services
          </h1>
        </div>
        <ScrollContainer className="pl-10 flex w-full text-left gap-2 md:gap-9 overflow-x-scroll no-scrollbar">
          {items.map((item, idx) => (
            <div key={idx} className="md:w-[356px] cursor-pointer">
              <img
                src={item.image}
                alt="img"
                className="h-[400px] w-[307px] md:h-[449px] md:w-[356px] object-cover rounded-[10px]"
              />
              <h2 className="text-3xl font-medium font-inter mt-[30px] w-[356px]">
                {item.title}
              </h2>
              <p className="text-lg text-noraml leading-7 font-synonym mt-[11px] mb-[18px] w-[356px]">
                {item.des}
              </p>
              <div className="flex items-center cursor-pointer">
                <h1 className="uppercase text-[19.16px] font-bold leading-[21.07px]">
                  Book now
                </h1>
                <BsArrowRightShort className="text-primary mr-1 text-[30px]" />
              </div>
            </div>
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
}

export default RentalPart;
