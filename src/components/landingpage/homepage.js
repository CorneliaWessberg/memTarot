import React, { useState, useEffect } from "react";
import axios from "axios"; 
import SessionCard from "../user/sessionCard";
import Carousel from "./carousel";
import Card from "../user/sessionCard";
import { Link } from "react-router-dom";

function Homepage() {
  const username = useState(localStorage.getItem("username"));

  const [sessions, setSessions] = useState([]);

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
          <div className="mr-4 font-bold text-right mb-28">
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
