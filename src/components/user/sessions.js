import React, { useState, useEffect } from "react";
import axios from "axios";
import SessionCard from "./sessionCard";

function SessionList() {
    const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const response = await axios.get(`http://localhost:1337/products`)
      console.log(response);
      setSessions(response.data);
    };

    fetchSessions();
  }, []);
  return (
    <>
      {/*Cardlist över alla Cards med sessions, pagination? 
        Antingen "show more" eller klicka till nästa sida*/}
      <h1 className="text-center">Cardlist with all products/sessions</h1>
      <div className="flex flex-row flex-wrap justify-evenly">
        {sessions.map((product) => {
          return (
            <SessionCard
              key={product.Id}
              title={product.Title}
              description={product.Description}
              time={product.Time}
              price={product.Price}
              image={product.Img}
            />
          )
        })}
      </div>
    </>
  );
}

export default SessionList;
