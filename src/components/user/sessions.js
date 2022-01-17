import React, { useState, useEffect } from "react";
import axios from "axios";
import SessionCard from "./sessionCard";

function SessionList() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSession = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/products?populate=*`
      );
      console.log(response.data);
      setSessions(response.data.data);
      console.log(JSON.stringify(response.data.data));
    };

    fetchSession();
  }, []);
  return (
    <>
      <h1 className="text-center">My sessions</h1>
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
            />
          );
        })}
      </div>
    </>
  );
}

export default SessionList;
