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
        className={`absolute top-0 left-0 text-center text-[40px] md:text-[89px] uppercase w-full transition-opacity duration-1000 ${
          isShowText ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1>We are a leading</h1>
        <h1 className="font-semibold">
          Read estate <span className="text-primary">agency</span>
        </h1>
      </div>
    </div>
  );
}

export default MainBackgroundPart;
