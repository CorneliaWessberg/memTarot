import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./productCard";
import { FaMagic } from "react-icons/fa";

//Product page, mapping thru all products.
function Shop() {
  const [products, setProducts] = useState([]);
  const [limitPage, setLimitPage] = useState(6);

  //Fetching all the products with useEffect, limit the request for a simple pagination.
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/items?populate=*&pagination[start]=0&pagination[limit]=${limitPage}`
      );
      console.log(response.data.data);
      setProducts(response.data.data);
    };
    fetchProduct();
  }, [limitPage]);

  function loadMore() {
    let dynamicMore = limitPage + 6;
    setLimitPage(dynamicMore);
  }

  function loadLess() {
    
    setLimitPage(6)
  }

  return (
    <>
    <h1 className="flex flex-row justify-center mb-16 text-2xl font-bold text-center">Magic crystals <FaMagic size={30} className="ml-2 mt-0.5"/></h1>
      <div className="flex flex-row flex-wrap items-center justify-around mx-10">
        {products.map((item) => {
          return (
            <div>
              <ProductCard
                key={item.id}
                id={item.id}
                title={item.attributes.title}
                description={item.attributes.description}
                image={item.attributes.img.data.attributes.formats.small.url}
                price={item.attributes.price}
              />
            </div>
          );
        })}
      </div>
      {limitPage <= products.length ? (
        <button
          class="flex m-2 w-44 justify-center -mt-2 text-white text-xl px-6 py-2 bg-black rounded-md ml-6 sm:ml-28 hover:bg-stone-500 hover:text-white transition duration-200"
          onClick={loadMore}
        >
          Show more
        </button>
      ) : (
        <button
          class="flex m-2 w-44 justify-center -mt-2 text-white text-xl px-6 py-2 bg-black rounded-md ml-6 sm:ml-28 hover:bg-stone-500 hover:text-white transition duration-200"
          onClick={loadLess}
        >
          Show less
        </button>
      )}
    </>
  );
}

export default Shop;
