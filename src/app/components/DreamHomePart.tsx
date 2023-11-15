import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";

const items = [
  {
    image: "/images/sub9.jpg",
    price: 15000,
    location: "Strategic Location",
  },
  {
    image: "/images/sub10.jpg",
    price: 10000,
    location: "HCM Location",
  },
  {
    image: "/images/sub11.jpg",
    price: 11000,
    location: "HN Location",
  },
];

function DreamHomePart() {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div>
      <div className="px-10 xl:px-0 xl:max-w-7xl m-auto w-full text-center align-middle pt-20 pb-20 xl:pt-28">
        <div className="flex items-center justify-center uppercase font-bold">
          <FiArrowDownRight className="text-primary mr-1 text-[20px] md:text-[25px]" />
          <h1 className="text-[19px]">Our Best Home</h1>
        </div>
        <div className="text-[40px] md:text-[60px] xl:text-7xl capitalize mt-6 mb-20">
          <h1>
            Find your<span className="text-primary font-semibold"> dream </span>
          </h1>
          <h1>home here</h1>
        </div>

        <div>
          <Swiper ref={sliderRef} grabCursor={true}>
            {items.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div key={idx}>
                  <img
                    src={item.image}
                    className="object-cover w-full h-[457px] rounded-[10px]"
                  />
                  <div className="absolute md:bottom-[37px] bottom-[400px] w-full flex justify-between items-center">
                    <div className="text-white text-[16px] md:text-[21.85px] font-semibold font-synonym leading-[33.22px] ml-2 xl:ml-[47px]">
                      {item.location}
                    </div>
                    <div className="flex justify-center items-center px-5 bg-black bg-opacity-20 rounded-[3.06px] backdrop-blur-[57.08px] mr-2 xl:mr-[47px]">
                      <div className="text-white text-[16px] md:text-lg font-semibold font-synonym leading-7">
                        ${item.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <BsArrowLeftShort
                      className="text-white text-[40px] cursor-pointer absolute bottom-[43px] left-1/3 -translate-x-1/3 z-50 flex xl:left-[48%] xl:-translate-x-[48%]"
                      onClick={handlePrev}
                    />
                    <BsArrowRightShort
                      className="text-white text-[40px] cursor-pointer absolute bottom-[43px] left-3/4 -translate-x-3/4 z-50 flex xl:left-[52%] xl:-translate-x-[52%]"
                      onClick={handleNext}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="xl:grid xl:grid-cols-2 xl:gap-6">
            {items.map(
              (item, idx) =>
                idx > 0 && (
                  <div key={idx} className="relative mt-[18px]">
                    <img
                      src={item.image}
                      className="object-cover w-full h-full rounded-[10px]"
                    />
                    <div className="absolute right-5 top-5 flex items-center justify-center w-[106px] h-[34.65px] bg-black bg-opacity-20 rounded-[3.06px] backdrop-blur-[57.08px]">
                      <div className="flex items-center justify-center text-white text-lg font-semibold font-synonym leading-7">
                        ${item.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DreamHomePart;
