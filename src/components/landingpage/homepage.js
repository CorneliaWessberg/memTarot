import React from "react";
import Carousel from "./carousel";
import Card from "./sessionCard";

function Homepage() {
  return (
    <>
      <div className="flex justify-center flex-col">
        {/*Carousel*/}

        <div className="flex flex-row items-center ">
          <Card />
          <Card />
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
    </>
  );
}

export default Homepage;
