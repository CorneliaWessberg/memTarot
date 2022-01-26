import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

//Card for the products. Props showing on the cards. 
//When clicking add to cart. Item sends to shoppingcart.
function ProductCard({ id, title, description, image, price }) {
  const item = {id, title, image, description, price}
  const { addItem } = useCart();
  return (
    <>
      <div
        className="flex justify-center overflow-hidden rounded-md shadow-md w-96 h-90"
        id={id}
      >
        <div className="justify-center px-4 py-4 text-center h-200">
          <Link to={`/item/${id}`}><div className="font-bold text-xl mb-2 p-3.5">{title}</div></Link>
          <img
            className="object-cover w-full h-80 "
            src={`http://localhost:1337${image.formats.small.url}`}
          />

          <p className="p-2 text-base text-gray-700">{description}</p>

          <p className="p-2 text-base text-gray-700">{price} kr</p>
          <div className="px-6 pt-4 pb-2">
          <button
                onClick={() => addItem(item)}
                className="flex flex-row justify-center w-full p-3 text-white duration-300 rounded-md bg-stone-400 hover:bg-stone-500"
              >
                <i>
                  <AiOutlineShoppingCart size={20} className="mt-0.5 mr-2" />
                </i>
                Add to cart
              </button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
