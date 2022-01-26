import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { AiFillShop } from "react-icons/ai";

function Checkout() {
  const { items, totalItems, cartTotal, emptyCart } = useCart();
  return (
    <>
      <div className="flex flex-col justify-around w-full mx-2 mt-10 mb-16 md:flex-row">
        <div className="flex flex-col items-center w-full mb-8 lg:items-start lg:mr-auto">
          <h1 className="mt-4 mb-2 text-4xl text-black text-extrabold">Checkout</h1>
          <h2 className="text-xl">Total items: ({totalItems})</h2>
          <h2 className="mb-6 text-xl">Order summary: {cartTotal} ;-</h2>
          <button
            className="px-8 py-1.5 text-center w-36 mb-2 text-white bg-black rounded hover:bg-stone-500"
            onClick={() => emptyCart()}
          >
            Empty Cart
          </button>
          <Link to="/shop" className="flex flex-row mt-1 text-xl">
            <h1>Back to shop - </h1> <AiFillShop size={20} className="mt-0.5 ml-2"/>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center w-full lg:items-start">
          <h1 className="mb-4 text-3xl text-extrabold">Billing details:</h1>
          <form class="w-full">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-3/4 md:w-full lg:w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Firstname"
                ></input>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-3/4  md:w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Lastname"
                ></input>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  class="appearance-none block w-3/4  md:w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="mail@email.com"
                ></input>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Country
                </label>
                <input
                  class="appearance-none block w-3/4  md:w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Country"
                ></input>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  City
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-3/4  md:w-full  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>Stockholm</option>
                    <option>Göteborg</option>
                    <option>Malmö</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Zip
                </label>
                <input
                  class="appearance-none block w-3/4  md:w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="90210"
                ></input>
              </div>
            </div>
          </form>
          <button className="mt-10 lg:mt-4 px-8 py-1.5 text-center w-32 mb-2 text-xl text-white bg-black rounded hover:bg-stone-500">
          Pay
        </button>
        </div>
       
      </div>
    </>
  );
}

export default Checkout;
