import React, { useState, useEffect } from "react";
import axios from "axios";
import SessionCard from "../user/sessionCard";
import Carousel from "./carousel";
import ProductCard from "../user/productCard";
import { Link } from "react-router-dom";

//landingpage component. Carousel looping feautered products.
//cardlist with products with a limit.
//cardlist with sessions with a limit.
//Instagram feed with a widget.
function Homepage() {
  const [products, setProducts] = useState([]);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/items?populate=*&pagination[start]=0&pagination[limit]=2`
      );
      console.log(response.data);
      setProducts(response.data.data);
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchSession = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/products?populate=*&pagination[start]=0&pagination[limit]=2`
      );
      console.log(response.data);
      setSessions(response.data.data);
      // console.log(JSON.stringify(response.data.data));
    };

    fetchSession();
  }, []);

  return (
    <>
      <div className="-ml-4 max-w-screen">
        <div className="flex flex-col justify-center">
          {/* <Carousel /> */}
          <h1 className="text-3xl font-semibold text-center underline underline-offset-4">products</h1>
          <div className="flex flex-row flex-wrap justify-around mx-10 mt-16 mr-2">
            {products.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  title={item.attributes.title}
                  description={item.attributes.description}
                  image={item.attributes.img.data.attributes.formats.small.url}
                  price={item.attributes.price}
                />
              );
            })}
          </div>
          <div className="mr-6 -mt-6 text-xl font-bold text-right lg:mr-28 mb-28">
            <Link to="./shop">See all..</Link>
          </div>
          <h1 className="text-3xl font-semibold text-center underline underline-offset-4">Tarot sessions</h1>
          <div className="flex flex-row flex-wrap justify-around mt-16 ml-2">
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
          <div className="mr-6 -mt-4 text-xl font-bold text-right lg:mr-28 mb-28">
            <Link to="./sessions">See all..</Link>
          </div>

          {/*instagram feed*/}
          <div
            loading="lazy"
            data-mc-src="30c2d221-dbb4-4808-beec-c63a46ebddfa#instagram"
            className="ml-10 mr-6"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
