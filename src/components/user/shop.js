import React, { useState, useEffect } from "react"; 
import axios from "axios"; 
import ProductCard from "./productCard";

function Shop() {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        const fetchProducts = async()=> {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        }
        fetchProducts();
    }, []);

    return(
        <>
        <div className="flex flex-row flex-wrap items-center justify-around w-screen">
         {products.map((product) => {
                    return (<ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                    )
                })}
        </div>

        </>
    )
}

export default Shop; 