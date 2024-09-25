import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import bag from "../assets/bag.svg";
import OrderContext from "../OrderContext";
import { NAV_LINKS } from "../constants/nav-links.constant";

const Header = () => {
  const { order, getOrderFromStorage } = useContext(OrderContext);

  useEffect(() => {
    getOrderFromStorage();
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 bg-dark pb-4 max-w-screen-2xl flex flex-wrap center-align mx-auto lg:px-24 px-4 lg:pt-16 pt-4 items-center justify-between">
      <Link className="playfair font-bold italic text-white uppercase" to="/">
        Londonesse
      </Link>
      <nav>
        <ul className="flex gap-4 items-center">
          {NAV_LINKS.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className="uppercase text-xs font-semibold"
            >
              {link.text}
            </Link>
          ))}
          <button className="relative">
            <img src={bag} alt="Korpa" />
            <span className="absolute end-0 right-0 -translate-y-1/2 translate-x-1/4 text-xs font-medium rounded-full bg-black w-6 h-6 leading-none flex justify-center items-center">
              {order.items.length}
            </span>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
