import React, { useState, useEffect } from "react";
import axios from "axios";
import SessionCard from "./sessionCard";
import { FaMagic } from "react-icons/fa";

//Mapping thru all session cards.
function SessionList() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSession = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/products?populate=*`
      );
      console.log(response.data);
      setSessions(response.data.data);
    };

    fetchSession();
  }, []);
  return (
    <>
      <h1 className="flex flex-row justify-center mb-10 text-xl font-bold text-center">Make a request on my sessions here <i className="ml-2"><FaMagic size={30}/></i> </h1>
      <div className="flex flex-row flex-wrap justify-around w-screen">
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
              // products={product.attributes.booking.data}
            />
          );
        })}
      </div>
    </>
  );
}

export default SessionList;
