import React from "react";
import { Link } from "react-router-dom";
import bag from "../assets/bag.svg";

const Header = () => {
  const navLinks = [
    {
      text: "O nama",
      path: "/o-nama",
    },
    {
      text: "Prodavnica",
      path: "/prodavnica",
    },
  ];

  return (
    <header className="max-w-screen-2xl flex flex-wrap center-align mx-auto lg:px-24 px-4 lg:pt-16 pt-4 items-center justify-between">
      <Link className="playfair font-bold italic text-white uppercase" to="/">Londonesse</Link>
      <nav>
        <ul className="flex gap-4 items-center">
          {navLinks.map((link, index) => (
            <Link to={link.path} key={index} className="uppercase text-xs font-semibold">
              {link.text}
            </Link>
          ))}
          <button>
            <img src={bag} alt="Korpa" />
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
