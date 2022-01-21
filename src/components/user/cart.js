import React from "react";
import { MdOutlinePayment } from "react-icons/md";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { AiFillShop } from "react-icons/ai";

//Shoppingcart component. Storing products that the user put in the cart.
//using useCart from react for shoppingcart.

function Cart() {
  const loggedIn = localStorage.getItem("jwt")
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
          <h1 className="mb-4 text-xl font-bold">
            Hello <strong>{user}</strong> , welcome to your shoppingcart.
          </h1>
          <h2 className="mb-2 text-center">Your cart is empty!</h2>
          <h2 className="flex flex-row justify-center text-center">
            Lets go shopping - to Shop{" "}
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
      <h1 className="mb-4 text-xl font-bold">
        Hello <strong>{user}</strong> , welcome to your shoppingcart.
      </h1>
      <h1 className="text-lg text-center ">Your items: ({totalItems})</h1>

      <table className="table table-light">
        <tbody>
          {items.map((item, id) => {
            return (
              <div
                className="flex justify-center overflow-hidden italic border-2 border-solid rounded-md shadow-md border-stone-200 w-96 h-150"
                key={id}
              >
                <div className="justify-center px-4 py-4 text-center h-200">
                  <div className="font-bold text-xl mb-2 p-3.5">
                    {item.title}
                  </div>
                  <img
                    className="object-cover w-full h-80 "
                    src={`http://localhost:1337${item.image.formats.small.url}`}
                  />

                  <p className="p-2 text-base text-gray-700">{item.price} kr</p>
                  <p className="p-2 text-base text-gray-700">
                    Quantity: {item.quantity}
                  </p>
                  <div className="px-6 pt-4 pb-2">
                    <button
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn btn-info ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </tbody>
      </table>
      <div>
        <h1> Total price: {cartTotal} Kr</h1>
      </div>
      <div>
        <button onClick={() => emptyCart()}>Clear cart </button>
      </div>
    {loggedIn ?
      <Link to="/checkout"><button className="flex flex-row justify-center w-full p-3 text-white duration-300 rounded-md bg-stone-400 hover:bg-stone-500">
        <i>
          <MdOutlinePayment size={20} className="mt-0.4 mr-1" />
        </i>
        Go to Checkout
      </button></Link> :
      <div className="flex flex-row mt-10"> <h1>You have to be logged in to proceed to checkout :)</h1><Link to="/login" className="ml-2">- Login here</Link></div>}
    </>
  );
}

export default Cart;
