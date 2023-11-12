import React from "react";

function ServiceSlidePart() {
  const items = [
    {
      label: "Outdoor Activities",
      icon: "/images/amenities.jpg",
    },
    {
      label: "Exclusive Amenities",
      icon: "/images/amenities.jpg",
    },
    {
      label: "Front Beach 3 Bedrooms",
      icon: "/images/bedrooms.jpg",
    },
    {
      label: "Jacuzzi 3 Bathrooms",
      icon: "/images/bathrooms.jpg",
    },
    {
      label: "Concierge 24 hours",
      icon: "/images/bathrooms.jpg",
    },
  ];

  return (
    <div className="relative border-t-2 border-b-[1px] border-gray-400 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, idx) => (
          <div className="flex font-inter mx-4 items-center" key={idx}>
            <img
              className="w-7 h-7 mx-4 object-contain"
              alt="img"
              src={item.icon}
            />
            <h1 className="text-2xl md:text-3xl">{item.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSlidePart;
