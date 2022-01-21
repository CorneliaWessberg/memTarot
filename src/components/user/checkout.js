import React from "react"; 
import { useCart } from "react-use-cart";

function Checkout() {
    const {
        items, 
        totalItems, 
        cartTotal,
        emptyCart
    } = useCart();
    return(
        <>
        <h1>Checkout</h1>
        <p>Check your items and pay</p>
        <h2>Total items: {totalItems} st</h2>
        <h2>Order summary: {cartTotal} ;-</h2>
        <h1>Billing details:</h1>
        </>
    )
}

export default Checkout; 