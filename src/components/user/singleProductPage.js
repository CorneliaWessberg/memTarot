import React, { useEffect, useState } from "react"; 
import axios from "axios";
import { useParams } from "react-router-dom";
import SingleProductCard from "./singleProductCard";

function SingleProduct( title, description, image, price ) {
    const item = {id, title, image, description, price}

    const {id} = useParams();

    // useEffect(() => {
    //     const fetchItem = async () => {
    //       const response = await axios.get(
    //         `http://localhost:1337/api/items/${id}?populate=*`
    //       );
    //       console.log(response.data.data);
    //       setSingleProduct(response.data.data);
    //     };
    //     fetchItem();
    //   }, []);

        
    return(
        <>
         
        <div id={id}>
      <div>
        description={item.description}
        title={title}
        price={price}
        </div>
        </div>
      </>
    )
}

export default SingleProduct; 