import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import RevealOnScroll from "./RevealOnScroll";

function DreamerHome() {
  const items = [
    {
      image: "/images/sub4.jpg",
      title: "Forest Retreat",
      des: "Are you looking to find your dream home or invest in a lucrative property",
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
      <div className="lg:max-w-7xl m-auto w-full text-center align-middle py-20 xl:py-32">
        <RevealOnScroll animate="animate__flipInX">
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
        </RevealOnScroll>
        <RevealOnScroll animate="animate__flipInX">
          <div className="px-10 xl:px-0 text-left">
            <Swiper
              spaceBetween={30}
              grabCursor={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                712: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 3.5,
                },
              }}
            >
              {items.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={item.image}
                    alt="img"
                    className="oject-cover rounded-[10px] h-[434px]"
                  />
                  <div className="flex flex-col justify-between ">
                    <div>
                      <h2 className="text-3xl font-medium font-inter mt-[30px]">
                        {item.title}
                      </h2>
                      <p className="text-lg text-normal leading-7 font-synonym mt-[11px] mb-[18px]">
                        {item.des}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <h1 className="uppercase text-[19.16px] font-bold leading-[21.07px]">
                        Book now
                      </h1>
                      <BsArrowRightShort className="text-primary mr-1 text-[30px]" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default DreamerHome;
