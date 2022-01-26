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
      <h1 className="flex flex-row justify-center mb-4 text-2xl font-bold text-center">Tarot sessions<i className="ml-2"><FaMagic size={30}/></i> </h1>
      <h3 className="flex flex-row justify-center mx-10 mb-10 text-xl font-medium text-center">Here you can request a time and date you would like, 2 days to get a confirmation.</h3>
      <div className="flex flex-col flex-wrap justify-around w-full lg:flex-row">
        {sessions.map((product) => {
          return (
            <SessionCard
              key={product.id}
              id={product.id}
              title={product.attributes.Title}
              description={product.attributes.description}
              time={product.attributes.time}
              price={product.attributes.Price}
              image={product.attributes.img.data.attributes}
            />
          );
        })}
      </div>
    </>
  );
}

export default SessionList;
