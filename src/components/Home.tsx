import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import arrowRight from "../assets/arrow-right.svg";
import mainImage from "../assets/main-image.png";
import brand1 from "../assets/brands/barbour.svg";
import brand2 from "../assets/brands/cp-company.svg";
import brand3 from "../assets/brands/f.svg";
import brand4 from "../assets/brands/luke.svg";
import brand5 from "../assets/brands/marshall-artist.svg";
import brand6 from "../assets/brands/weekend-offender.svg";

const BRANDS = [
  {
    image: brand1,
    query: "barbour",
  },
  {
    image: brand2,
    query: "cp-company",
  },
  {
    image: brand3,
    query: "f",
  },
  {
    image: brand4,
    query: "luke",
  },
  {
    image: brand5,
    query: "marshall-artist",
  },
  {
    image: brand6,
    query: "weekend-offender",
  },
];

const Home = () => {
  return (
    <main>
      <Header></Header>
      <section className="flex items-center wrap flex-wrap mx-auto w-fit mt-14 px-4 lg:px-14 xl:gap-0 gap-12">
        <div className="left-side z-10">
          <h1 className="uppercase font-bold md:text-8xl text-4xl playfair italic">
            Garderoba
          </h1>
          <p className="text-base max-w-96 w-full mt-14">
            Otkrijte ekskluzivnu garderobu iz Velike Britanije i Italije po
            izuzetnim cenama, dostupnu samo na našem sajtu. Svi komadi su
            vrhunskog kvaliteta i donose savršenu kombinaciju britanske
            elegancije i italijanske sofisticiranosti. Obogatite svoj garderober
            s najnovijim trendovima i luksuzom.
          </p>
          <Link
            className="mt-14 block flex gap-2 font-medium hover:underline"
            to={"/prodavnica"}
          >
            <span>Idi na garderobu</span>
            <img src={arrowRight} alt="Strelica" />
          </Link>
        </div>
        <div className="image-wrapper relative">
          <img
            className="size-96 max-w-full max-h-full h-auto"
            src={mainImage}
            alt="Londonesse brend"
          />
        </div>
      </section>
      <div className="bg-white mt-12 w-fit ml-auto p-4 flex gap-4 items-center">
        {BRANDS.map((brand, i) => (
          <Link to={`prodavnica/${brand.query}`} key={i}>
            <img src={brand.image} alt={brand.query} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
