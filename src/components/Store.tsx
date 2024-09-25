import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Filters from "./Filters";
import Sorting from "./Sorting";
import { ITEMS } from "../constants/items.constant";
import { TYPES } from "../constants/types.constant";
import { BRANDS } from "../constants/brands.constant";
import cart from "../assets/cart.svg";
import Toast from "./Toast";
import OrderContext from "../OrderContext";
import { Item } from "../interfaces/item.interface";
import { SIZES } from "../constants/sizes.constant";

const Store = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");
  const [selectedSort, setSelectedSort] = useState("a-z");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [storeItems, setStoreItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState(20);
  const [shouldShowToast, setShouldShowToast] = useState(false);
  const { addItem } = useContext(OrderContext);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const type = params.get("type") || "";
    const sort = params.get("sort") || "";
    const brand = params.get("brand") || "";

    loadStoreItems(type, brand);

    setSelectedType(type);
    setSelectedSort(sort);
    setSelectedBrand(brand);
    setDisplayCount(20);
  }, [location.search]);

  const loadStoreItems = async (type: string, brand: string) => {
    setIsLoading(true);
    await fakeAsyncCall();
    const fetchedItems = ITEMS; // Simulating a fetched response

    const filteredItems = fetchedItems.filter(
      (item) =>
        (type === "" || item.type === type) &&
        (brand === "" || item.brand === brand)
    );

    setStoreItems(filteredItems);
    setIsLoading(false);
  };

  const fakeAsyncCall = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 500);
    });
  };

  const filteredAndSortedItems = () => {
    let filteredItems = [...storeItems];

    if (selectedSort === "a-z") {
      filteredItems.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSort === "highest-price") {
      filteredItems.sort((a, b) => b.price - a.price);
    } else if (selectedSort === "lowest-price") {
      filteredItems.sort((a, b) => a.price - b.price);
    }

    return filteredItems.slice(0, displayCount);
  };

  const loadMoreItems = () => {
    setTimeout(() => {
      setDisplayCount((prevCount) => prevCount + 20);
    }, 500);
  };

  const updateType = (type) => {
    const newType = selectedType === type ? "" : type;
    setSelectedType(newType);
    const params = new URLSearchParams(location.search);
    params.set("type", newType);
    params.set("sort", selectedSort);
    params.set("brand", selectedBrand);
    navigate(`${location.pathname}?${params}`, { replace: true });
  };

  const updateBrand = (brand: string) => {
    const newBrand = selectedBrand === brand ? "" : brand;
    setSelectedBrand(newBrand);
    const params = new URLSearchParams(location.search);
    params.set("type", selectedType);
    params.set("sort", selectedSort);
    params.set("brand", newBrand);
    navigate(`${location.pathname}?${params}`, { replace: true });
  };

  const updateSort = (sort) => {
    setSelectedSort(sort);
    const params = new URLSearchParams(location.search);
    params.set("type", selectedType);
    params.set("sort", sort);
    params.set("brand", selectedBrand);
    navigate(`${location.pathname}?${params}`, { replace: true });
  };

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    item: Item
  ) => {
    e.stopPropagation();
    e.preventDefault();
    setShouldShowToast(true);
    setTimeout(() => {
      setShouldShowToast(false);
    }, 2000);
    addItem({ ...item, size: SIZES[0] });
  };

  const navigateToItemsOverview = () => {
    navigate("/pregled-artikala");
  };

  return (
    <main>
      <Header />
      <section className="flex max-w-screen-xl align-start justify-start flex-col mx-auto mt-14 px-4 lg:px-14">
        <h1 className="uppercase font-bold md:text-8xl text-4xl playfair italic">
          Prodavnica
        </h1>
        <div className="flex justify-between items-center lg:mt-14 my-4 flex-wrap gap-4">
          <Filters
            onFilterChange={updateType}
            selectedType={selectedType}
            filters={TYPES}
          />
          <Sorting onSortChange={updateSort} selectedSort={selectedSort} />
        </div>
        <Filters
          onFilterChange={updateBrand}
          selectedType={selectedBrand}
          filters={BRANDS}
        />
        {isLoading && (
          <div role="status" className="mx-auto mt-14">
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-gray-200 animate-spin fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        <ul className="my-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10">
          {!isLoading &&
            filteredAndSortedItems().map((item) => (
              <li key={item.id} className="flex flex-col">
                <Link to={`./detalji/${item.id}`}>
                  <img className="w-48" src={item.image} alt={item.title} />
                  <div className="flex flex-col">
                    <h3 className="playfair italic font-medium">
                      {item.title}
                    </h3>
                    <p className="playfair italic text-xl font-medium">
                      {item.price.toLocaleString()} rsd
                    </p>
                    <button
                      disabled={shouldShowToast}
                      onClick={(e) => handleAddToCart(e, item)}
                      className="flex gap-2 items-center justify-center mt-2 text-white bg-slate-900 hover:bg-slate-950 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 focus:outline-none"
                    >
                      <img className="size-5" src={cart} alt="Dodaj u korpu" />
                      <span className="font-medium text-sm">Dodaj u korpu</span>
                    </button>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
        {!isLoading && storeItems.length === 0 && (
          <div className="mx-auto">
            <h3 className="text-white text-xl font-semibold">
              Nismo pronasli nista
            </h3>
            <p className="text-slate-300 font-medium">
              Pokušaj da promeniš filtere kako bi pronašao druge artikle
            </p>
          </div>
        )}
        {!isLoading && storeItems.length > displayCount && (
          <button
            onClick={loadMoreItems}
            className="mb-14 border bg-white text-dark text-sm font-medium flex mx-auto py-2 px-4 rounded"
          >
            Load More
          </button>
        )}
      </section>
      {shouldShowToast && (
        <Toast
          message={"Dodato u korpu"}
          buttonText={"Vidi"}
          buttonHandler={navigateToItemsOverview}
        />
      )}
    </main>
  );
};

export default Store;
