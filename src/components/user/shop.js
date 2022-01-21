import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./productCard";

//Product page, mapping thru all products.
function Shop() {
  const [products, setProducts] = useState([]);
  const [limitPage, setLimitPage] = useState(6);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/items?populate=*&_limit=${limitPage}`
      );
      console.log(response.data);
      setProducts(response.data.data);
    };
    fetchProduct();
  }, [limitPage]);

  function loadMore() {
    let dynamic = limitPage + 3;
    setLimitPage(dynamic);
  }

  function loadLess() {
    let dynamic = limitPage - 3;
    setLimitPage(dynamic);
  }

  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-around max-w-screen">
        {products.map((item) => {
          return (
            <div>
              <ProductCard
                key={item.id}
                id={item.id}
                title={item.attributes.title}
                description={item.attributes.description}
                image={item.attributes.img.data.attributes}
                price={item.attributes.price}
              />
            </div>
          );
        })}
      </div>
      {limitPage >= products.length ? (
        <button
          class="flex m-2 justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200"
          onClick={loadMore}
        >
          Show more
        </button>
      ) : (
        <button
          class="flex m-2 justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200"
          onClick={loadLess}
        >
          Show less
        </button>
      )}
    </>
  );
}

export default Shop;
