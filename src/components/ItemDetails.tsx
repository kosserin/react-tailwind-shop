import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { ITEMS } from "../constants/items.constant";
import { Item } from "../interfaces/item.interface";
import { SIZES } from "../constants/sizes.constant";
import { ItemSize } from "../interfaces/size.interface";

const ItemDetails = () => {
  let { id } = useParams();
  const [item, setItem] = useState<Item | undefined>(undefined);
  const [size, setSize] = useState(SIZES[0]);

  useEffect(() => {
    const loadedItem = ITEMS.find((i) => i.id === +id);
    setItem(loadedItem);
  }, [id]);

  const handleSizeChange = (s: ItemSize) => {
    setSize(s);
  };

  return (
    <main className="min-h-screen">
      <Header></Header>
      <section className="max-w-screen-xl w-full mx-auto mt-14 lg:px-14 px-4">
        <h1 className="uppercase font-bold md:text-8xl text-4xl playfair italic">
          Detalji
        </h1>
        {item && (
          <div className="flex flex-wrap gap-8 lg:mt-14 mt-4 pb-14">
            <img src={item.image} alt={item.title} />
            <div className="flex flex-col justify-between gap-4">
              <div>
                <h2 className="text-3xl playfair  italic">{item.title}</h2>
                <p className="mt-4 max-w-prose">{item.description}</p>
                <span className="block mt-4">Odaberi veličinu:</span>
                <div className="flex flex-wrap gap-4 mt-2">
                  {SIZES.map((s) => (
                    <button
                      key={s.size}
                      onClick={() => handleSizeChange(s)}
                      className={`border font-medium border-2 rounded px-4 py-2 leading-none transition duration-200
                        hover:bg-white hover:bg-opacity-20
                        ${
                          size.size === s.size &&
                          "bg-white text-black hover:bg-opacity-100"
                        }`}
                    >
                      {s.text}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl playfair italic">
                  {item.price.toLocaleString()} rsd
                </p>
                <button className="bg-black text-white py-3 px-6 font-medium w-fit">
                  Dodaj u korpu
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default ItemDetails;
