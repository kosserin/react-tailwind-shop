import React from "react";
import Header from "./Header";
import aboutImage from "../assets/about-image.png";

const CONTACTS = [
  {
    text: "tel:+381644610012",
    ref: "barbour",
  },
  {
    text: "kontakt@londonesse.rs",
    ref: "mailto:kontakt@londonesse.rs",
  },
  {
    text: "Njegoševa 23, Rača 34210",
    ref: "https://maps.app.goo.gl/cb5kAn78d2M411M46",
  },
];

const About = () => {
  return (
    <main>
      <Header></Header>
      <section className="flex items-center flex-col mx-auto w-fit mt-14 px-4 lg:px-14 xl:gap-0 gap-12">
        <div className="left-side z-10">
          <h1 className="uppercase font-bold md:text-8xl text-4xl playfair italic">
            O nama
          </h1>
          <p className="text-base max-w-prose mt-14">
            Osnovana u septembru 2024. godine, naša web prodavnica donosi vam
            jedinstvenu priliku da istražite i nabavite vrhunsku, firmiranu
            garderobu iz Velike Britanije i Italije. Posvećeni smo pružanju
            najboljih modnih komada koji kombinuju klasičnu britansku eleganciju
            i sofisticiranost italijanskog dizajna.
          </p>
          <div className="mt-14 py-4 border-y-2 border-white">
            <img
              className="max-w-full max-h-full h-auto"
              src={aboutImage}
              alt="Londonesse brend"
            />
          </div>
          <p className="text-base max-w-prose mt-14">
            Naša kolekcija pažljivo je odabrana kako bi zadovoljila visoke
            standarde kvaliteta i stila, omogućavajući vam da uživate u
            luksuznim i trendi komadima po izuzetno povoljnim cenama. Svaki
            artikl u našoj ponudi dolazi iz prestižnih brendova i dizajnera,
            pružajući vam pristup ekskluzivnim modnim kreacijama direktno sa
            vrhunskih evropskih tržišta. Sa ciljem da vam omogućimo da pronađete
            savršene komade za vaš garderober, posvećeni smo pružanju izuzetnog
            iskustva kupovine i najvišeg nivoa usluge.
          </p>
        </div>
        <div className=" flex-wrap p-4 flex gap-4 mt-20 mb-4">
          {CONTACTS.map((contact, i) => (
            <a
              className="font-semibold lg:text-base text-sm"
              key={i}
              href={contact.ref}
            >
              {contact.text}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
