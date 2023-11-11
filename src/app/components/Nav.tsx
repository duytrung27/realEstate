import React from "react";
import { useState } from "react";

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

  return (
    <div className="md:flex justify-between lg:max-w-[63.625rem] md:h-[43px] m-auto my-[40px] items-center">
      <ul className="flex justify-around">
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
      <ul className="flex items-center justify-center m-10">
        <li className="mr-3 text-base cursor-pointer hover:opacity-50">
          Sign in
        </li>
        <button className="register-button">Get Started Free</button>
      </ul>
    </div>
  );
}

export default Nav;
