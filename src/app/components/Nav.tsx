import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircle } from "react-icons/io";
import { useWindowScroll } from "react-use";

const items = [
  {
    label: "Home",
    active: 1,
  },
  {
    label: "Blog",

    active: 2,
  },
  {
    label: "Pricing",
    active: 3,
  },
  {
    label: "Contact",
    active: 4,
  },
];

function Nav() {
  const [activeNav, setActiveNav] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  const { y: pageYOffset } = useWindowScroll();

  const [addedClass, setAddedClass] = useState("");

  useEffect(() => {
    if (pageYOffset > 50) {
      setAddedClass("shadow-md rounded-[10px]");
    } else {
      setAddedClass("");
    }
  }, [pageYOffset]);

  return (
    <div
      className={`bg-white flex mb-10 sticky z-50 top-0 justify-between font-synonym lg:max-w-[63.625rem] md:h-[43px] m-auto p-3 md:py-[40px] items-center ${addedClass}`}
    >
      <ul className="md:flex hidden justify-around">
        {items.map((item, i) => (
          <li
            key={i}
            className={`nav-items md:first:ml-5 ${
              activeNav === item.active ? "nav-active" : ""
            }`}
            onClick={() => setActiveNav(item.active)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-start">
        <li className="mr-3 text-base cursor-pointer hover:opacity-50">
          Sign in
        </li>
        <button className="register-button">Get Started Free</button>
      </ul>
      {!openMenu && (
        <RxHamburgerMenu
          className="md:hidden"
          size={30}
          onClick={() => setOpenMenu(true)}
        />
      )}
      {/* Burger menu for mobile */}
      {openMenu && (
        <div className="relative md:hidden">
          <ul
            className={`p-10 animate__animated animate__fadeInRight flex flex-col rounded-[10px] bg-white shadow-md fixed top-0 right-0 w-3/4 h-[100vh]`}
          >
            <IoMdCloseCircle
              className="absolute top-0 right-0 mr-5 mt-5"
              size={30}
              onClick={() => setOpenMenu(false)}
            />
            {items.map((item, i) => (
              <li
                key={i}
                className={`p-5 border-b-[1px] border-gray-200 ${
                  activeNav === item.active ? "nav-active" : ""
                }`}
                onClick={() => {
                  setOpenMenu(false);
                  setActiveNav(item.active);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
