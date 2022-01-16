import React, { useState } from "react";
import Carousel from "./carousel";
import Card from "../user/sessionCard";
import { Link } from "react-router-dom";

function Homepage() {
  const username = useState(localStorage.getItem("username"));

  return (
    <>
      <div>
        <div className="flex flex-col justify-center">
          <Carousel />

          <div className="flex flex-row flex-wrap items-center justify-around mt-28">
            <Card />
            <Card />
            <Card />
            <Card />
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
