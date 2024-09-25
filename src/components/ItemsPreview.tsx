import React, { useContext } from "react";
import Header from "./Header";
import OrderContext from "../OrderContext";

const ItemsPreview = () => {
  const { order, removeItem } = useContext(OrderContext);

  return (
    <React.Fragment>
      <Header />
      <section className="flex max-w-screen-xl align-start justify-start flex-col mx-auto mt-14 px-4 lg:px-14 pb-24">
        <div className="bg-white text-black px-4 py-2 rounded-3xl">
          <ul className="flex flex-col gap-8">
            {order.items.map((item) => (
              <li className="flex gap-10 items-center" key={item.id}>
                <img className="w-40" src={item.image} alt={item.title} />
                <div className="flex flex-col">
                  <div>
                    <h3 className="text-2xl playfair italic">{item.title}</h3>
                    <p className="mb-2">Veličina: {item.size.text}</p>
                    <p className="text-xl playfair">
                      {item.price.toLocaleString()} rsd
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-black border rounded w-fit mt-4 px-4 py-1"
                  >
                    Ukloni iz korpe
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-xl mt-10 border-t py-4 text-right">
            <span>Ukupan iznos: </span>
            <span className="font-semibold">
              {order.items.reduce(
                (accumulator, currentValue) => accumulator + currentValue.price,
                0
              )}
            </span>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ItemsPreview;
