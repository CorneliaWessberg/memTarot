import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "react-use-cart";

//ProductCard for showing the single product on singleProductPage
//Cart function here too, so the user can put in the shoppingbag from here.
function SingleProductCard({ id, title, description, image, price }) {
  const item = { id, title, image, description, price };
  const { addItem } = useCart();

  return (
    <>
      <div className="flex justify-center mt-20">
        <div
          className="flex flex-col items-center justify-center w-10/12 h-full lg:flex-row"
          id={id}
        >
          <img
            className="object-cover w-full h-full lg:mr-6"
            src={`http://localhost:1337${image}`}
          />
          <div className="justify-center w-full px-4 py-4 text-start">
            <div className="font-bold text-2xl mb-6 p-3.5 text-center">
              {title}
            </div>

            <p className="p-2 mb-8 text-lg leading-8 text-gray-700 ">{description}</p>

            <p className="p-2 text-xl text-center text-gray-700">
              {price};- kr
            </p>
            <div className="flex justify-center px-6 pt-4 pb-2">
              <button
                onClick={() => addItem(item)}
                className="flex flex-row justify-center w-full sm:w-2/4 p-2.5 text-white duration-300 rounded-md bg-stone-400 hover:bg-stone-500"
              >
                <i>
                  <AiOutlineShoppingCart size={20} className="mt-0.5 mr-2" />
                </i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProductCard;
