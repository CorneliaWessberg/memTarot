import React from "react";
import { MdOutlinePayment } from "react-icons/md";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { AiFillShop } from "react-icons/ai";

//Shoppingcart component. Storing products that the user put in the cart.
//using useCart from react for shoppingcart.

function Cart() {
  const loggedIn = localStorage.getItem("jwt");
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const user = localStorage.getItem("firstname");

  if (isEmpty)
    return (
      <>
        <div>
          <h1 className="mb-4 text-3xl font-bold text-center">
            Hello <strong>{user}</strong>! 
          </h1>
          <h2 className="mb-2 text-xl text-center">Your cart is empty!</h2>
          <h2 className="flex flex-row justify-center mb-4 text-xl text-center">
            Lets go shopping - to Shop
            <Link to="/shop">
              <i>
                <AiFillShop size={25} className="ml-2" />
              </i>
            </Link>
          </h2>
        </div>
      </>
    );
  return (
    <>
      <h1 className="mb-1 -mt-6 text-3xl font-medium text-center">
        Hey <strong>{user}</strong>!
      </h1>
      <h2 className="mb-6 text-xl text-center">welcome to your shoppingcart.</h2>
      <h1 className="mb-10 text-2xl text-center">Your items: ({totalItems})</h1>

      <div className="flex flex-row flex-wrap items-center justify-around mx-10">
          {items.map((item, id) => {
            return (
              <div
                className="flex justify-center w-auto mb-20 overflow-hidden rounded-md shadow-md h-90"
                key={id}
              >
                <div className="justify-center px-4 py-4 text-center h-200">
                  <div className="font-bold text-2xl mb-2 p-3.5">
                    {item.title}
                  </div>
                  <img
                    className="object-cover w-full h-80 "
                    src={`http://localhost:1337${item.image}`}
                  />

                  <p className="p-2 text-xl font-bold text-gray-700">{item.price};- kr</p>
                  <p className="p-2 text-lg text-gray-700">
                    Quantity: ({item.quantity})
                  </p>
                  <div className="px-6 pt-4 pb-2">
                    <button
                      className="px-3 py-1 mb-2 mr-2 text-sm font-medium text-center text-white bg-pink-300 rounded-lg hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-900"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="px-2.5 py-1 mb-2 mr-2 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="px-6 py-1 mb-2 text-white rounded-lg bg-stone-600 hover:bg-stone-800 "
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
      
      <div className="flex justify-center -mt-12 text-xl font-semibold">
        <h1> Total price: {cartTotal};- Kr</h1>
      </div>
      <div className="flex justify-center">
        <button className="px-8 py-2 mt-4 mb-2 text-white rounded-md bg-stone-600 hover:bg-stone-800" onClick={() => emptyCart()}>Clear cart </button>
      </div>
      {loggedIn ? (

        <Link to="/checkout" className="flex justify-center mt-16">
          <button className="flex flex-row items-center justify-center w-1/4 p-3 text-white duration-300 bg-black rounded-md hover:bg-stone-500">
            <i>
              <MdOutlinePayment size={20} className="mt-0.4 mr-1" />
            </i>
            Go to Checkout
          </button>
        </Link>
      ) : (
        <div className="flex flex-row mt-10">
          <h1>You have to be logged in to proceed to checkout :)</h1>
          <Link to="/login" className="ml-2">
            - Login here
          </Link>
        </div>
      )}
      <h2 className="flex flex-row justify-center mt-4 text-center">
            Back to Shop
            <Link to="/shop">
              <i>
                <AiFillShop size={25} className="ml-2" />
              </i>
            </Link>
            </h2>
    </>
  );
}

export default Cart;
