import { BiSolidQuoteAltRight, BiSolidStar } from "react-icons/bi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { MdVerified } from "react-icons/md";

import ScrollContainer from "react-indiana-drag-scroll";

function CustomerComment() {
  const items = [
    {
      avatar: "/images/avatar2.jpg",
      name: "Sarah M.",
      job: "Property consultation",
      comment:
        "I had the pleasure of working with ABC Realty to find my dream home, and I couldn't be happier with the entire experience.  \n\nFrom the moment I walked into their office, I felt welcomed and supported by their friendly team.",
      ratting: 5,
    },
    {
      avatar: "/images/avatar1.jpg",
      name: "Esther Howard",
      job: "Property consultation",
      comment:
        "Once we found the perfect home, Sarah guided me through every step of the buying process, making it feel effortless on my part. She was an excellent negotiator, and thanks to her skills, I was able to secure a fantastic deal on my new home.",
      ratting: 5,
    },
    {
      avatar: "/images/avatar2.jpg",
      name: "Sarah M.",
      job: "Property consultation",
      comment:
        "I had the pleasure of working with ABC Realty to find my dream home, and I couldn't be happier with the entire experience.  \n\nFrom the moment I walked into their office, I felt welcomed and supported by their friendly team.",
      ratting: 3,
    },
    {
      avatar: "/images/avatar1.jpg",
      name: "Esther Howard",
      job: "Property consultation",
      comment:
        "Once we found the perfect home, Sarah guided me through every step of the buying process, making it feel effortless on my part. She was an excellent negotiator, and thanks to her skills, I was able to secure a fantastic deal on my new home.",
      ratting: 5,
    },
  ];

  return (
    <div className="pl-10 xl:pl-0 bg-background pt-[69px] pb-[77px]">
      <div className="xl:grid xl:grid-cols-5 xl:max-w-7xl m-auto gap-5">
        <div className="xl:col-span-2">
          <div className="text-[45px] md:text-[60px] xl:text-[69.42px] font-normal font-['Space Grotesk'] capitalize leading-[77.07px]">
            <h1>
              Our<span className="font-bold"> customers </span>
            </h1>
            <span>
              think we’re <br />
              the best
            </span>
          </div>
          <div className="xl:flex mt-12 hidden">
            <div className=" flex items-center justify-center bg-[#E7DFFA] w-[50px] h-[50px] rounded-full cursor-pointer mr-5">
              <BsArrowLeftShort className="text-[38px] text-primary" />
            </div>
            <div className=" flex items-center justify-center bg-primary w-[50px] h-[50px] rounded-full cursor-pointer">
              <BsArrowRightShort className="text-[38px] text-white" />
            </div>
          </div>
        </div>

        <ScrollContainer className="flex mt-10 xl:mt-0 xl:col-span-3 gap-9">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-[10px] w-[320px] h-[430px] cursor-pointer py-[20px]"
            >
              <div className="flex items-center justify-between w-[320px] px-[27px]">
                <BiSolidQuoteAltRight className="text-primary text-[40px]" />
                <div className="flex justify-start">
                  {Array.from(Array(5), (i, x) => {
                    return (
                      <BiSolidStar
                        key={x}
                        className={`text-[20px] ${
                          x < item.ratting ? "text-star" : "text-gray-600"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="text-lg font-normal font-synonym pt-3 px-[27px] whitespace-pre-line">
                {item.comment}
              </div>
              <div className="absolute w-full bottom-5 flex justify-between items-center px-10 pt-5">
                <div className="flex items-center">
                  <img src={item.avatar} alt="" className="w-[40px] h-[40px]" />
                  <div className="ml-3">
                    <div className="text-black text-lg font-semibold font-synonym">
                      {item.name}
                    </div>
                    <div className="text-black text-[15px] font-normal font-synonym leading-snug">
                      {item.job}
                    </div>
                  </div>
                </div>
                <MdVerified />
              </div>
            </div>
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
}

export default CustomerComment;
