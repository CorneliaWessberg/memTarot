import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SingleProductCard from "./singleProductCard";

//SingleProduct page, showing the product with id that beeing clicked. Use Params for getting the right product id.
function SingleProduct() {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState([]);

  //Fetching the product with the id thats being clicked on from prevous page.
  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/items/${id}?populate=*`
      );
      console.log(response.data.data);
      setSingleProduct(response.data.data);
    };
    fetchItem();
  }, []);

  //Checking first if product is set, So the product can load before showing.
  return (
     <> 
      <SingleProductCard
      key={singleProduct?.id}
      id={singleProduct?.id}
      title={singleProduct?.attributes?.title}
      description={singleProduct?.attributes?.description}
      price={singleProduct?.attributes?.price}
      image={singleProduct?.attributes?.img?.data?.attributes?.formats.small.url}
      /> </>
  ) 
}

export default SingleProduct;
