import React, { useState, useEffect } from "react";
import axios from "axios";
import SessionCard from "../user/sessionCard";
import Carousel from "./carousel";
import ProductCard from "../user/productCard";
import { Link } from "react-router-dom";

function Homepage() {
  

  const [products, setProducts] = useState([]);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        "http://localhost:1337/api/items?populate=*&_limit=3`"
      );
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchSession = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/products?populate=*&_limit=3`
      );
      console.log(response.data);
      setSessions(response.data.data);
      console.log(JSON.stringify(response.data.data));
    };

    fetchSession();
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-col justify-center">
         <Carousel />
          <div className="flex flex-row flex-wrap justify-around w-screen mt-28">
            {products.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.attributes.img.data.attributes}
                  price={item.price}
                />
              );
            })}
          </div>
          <div className="flex flex-row flex-wrap justify-around w-screen mt-28">
            {sessions.map((product) => {
              return (
                <SessionCard
                  key={product.id}
                  poductId={product.id}
                  title={product.attributes.Title}
                  description={product.attributes.description}
                  time={product.attributes.time}
                  price={product.attributes.Price}
                  image={product.attributes.img.data.attributes}
                />
              );
            })}
          </div>
          <div className="mr-6 text-xl font-bold text-right lg:mr-28 mb-28">
            <Link to="./sessions">See all..</Link>
          </div>

          {/*Product cards,
        2-cards with 2 of the sessions. 
        Link besides "show more", links to My session side
        */}

          {/*instagram feed*/}
          <div
            loading="lazy"
            data-mc-src="30c2d221-dbb4-4808-beec-c63a46ebddfa#instagram"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
