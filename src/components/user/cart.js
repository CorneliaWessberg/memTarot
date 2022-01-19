import React from "react"; 
import { MdOutlinePayment } from "react-icons/md";

//Shoppingcart component. Storing products that the user put in the cart. 
function Cart() {

    const user = localStorage.getItem("firstname")

    return(
        <>
        <h1 className="mb-4 text-xl font-bold">Hello <strong>{user}</strong> , welcome to your shoppingcart. </h1>
        <h1 className="text-lg text-center ">Your items:</h1>

       <button className="flex flex-row justify-center w-full p-3 text-white duration-300 rounded-md bg-stone-400 hover:bg-stone-500"><i>< MdOutlinePayment size={20} className="mt-0.4 mr-1"/></i>Go to Checkout</button>
        
        </>
    )
}

export default Cart; 