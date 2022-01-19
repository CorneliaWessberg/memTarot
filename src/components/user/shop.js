import React, { useState, useEffect } from "react"; 
import axios from "axios"; 
import ProductCard from "./productCard";

//Product page, mapping thru all products. 
function Shop() {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        const fetchProduct = async()=> {
            const response = await axios.get(
            `http://localhost:1337/api/items?populate=*`
            );
            console.log(response.data);
            setProducts(response.data.data);
        }
        fetchProduct();
    }, []);


    return(
        <>
        <div className="flex flex-row flex-wrap items-center justify-around w-screen">
         {products.map((item) => {
                    return (<ProductCard
                        key={item.id}
                        id={item.id}
                        title={item.attributes.title}
                        description={item.attributes.description}
                        image={item.attributes.img.data.attributes}
                        price={item.attributes.price}
                    />
                    )
                })}
        </div>

        </>
    )
}

export default Shop; 