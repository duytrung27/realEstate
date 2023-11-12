import React, { useEffect, useState } from "react";

function MainBackgroundPart() {
  const [isShowText, setIsShowText] = useState(false);

  useEffect(() => {
    const timeShowText = setTimeout(() => {
      setIsShowText(true);
    }, 200);

    return () => clearTimeout(timeShowText);
  }, []);

  return (
    <div className="relative h-[894px] w-full">
      <img
        src="/images/main_bg.jpg"
        alt="main_bg"
        className="pt-20 h-full object-cover w-full"
      />
      <div
        className={`absolute top-0 left-0 text-center font-amulya text-[40px] md:text-[89px] uppercase w-full transition-opacity duration-1000 ${
          isShowText ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1>We are a leading</h1>
        <h1 className="font-semibold">
          Read estate <span className="text-primary">agency</span>
        </h1>
      </div>

      <div className="absolute left-2/4 -translate-x-2/4 top-44 xl:top-9 px-10 xl:px-0  xl:max-w-7xl w-full">
        <div className="flex justify-between">
          <div>
            <img
              alt="img"
              src="/images/bg_sub1.jpg"
              className="object-contain w-[80px] h-[40px] xl:w-[103px] xl:h-[51px] ml-[29px]"
            />
            <img
              alt="img"
              src="/images/bg_sub2.jpg"
              className="object-contain w-[80px] h-[40px] xl:w-[103px] xl:h-[51px]  mt-1"
            />
          </div>
          <img
            alt="img"
            src="/images/bg_sub4.jpg"
            className="object-contain w-[80px] h-[80px] xl:w-[103px] xl:h-[103px] mr-10"
          />
        </div>

        <div className="flex justify-between mt-[150px]">
          <img
            alt="img"
            src="/images/bg_sub3.jpg"
            className="object-contain w-[80px] h-[80px] xl:w-[103px] xl:h-[103px] ml-10"
          />
          <div>
            <img
              alt="img"
              src="/images/bg_sub5.jpg"
              className="object-contain w-[80px] h-[40px] xl:w-[103px] xl:h-[51px]  ml-[29px]"
            />
            <img
              alt="img"
              src="/images/bg_sub6.jpg"
              className="object-contain w-[80px] h-[40px] xl:w-[103px] xl:h-[51px]  mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBackgroundPart;
