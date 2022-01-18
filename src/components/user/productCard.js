import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function ProductCard({ id, title, description, image, price }) {
  return (
    <>
      <div
        className="flex justify-center p-5 my-4 overflow-hidden italic border-black rounded-md w-96 h-150"
        id={id}
      >
        <div className="justify-center px-4 py-4 text-center h-250">
          <img className="object-cover w-full h-80 rounded-2xl" src={`http://localhost:1337${image.formats.small.url}`}/>
          <div className="font-bold text-xl mb-2 p-3.5">{title}</div>

          <p className="p-2 text-base text-gray-700">{description}</p>

          <p className="p-2 text-base text-gray-700">{price} kr</p>
          <div className="px-6 pt-4 pb-2">
            <button className="flex flex-row justify-center w-full p-3 text-white duration-300 rounded-md bg-stone-400 hover:bg-stone-500">
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
