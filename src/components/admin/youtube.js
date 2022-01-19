import React from "react";
import { FaMagic } from "react-icons/fa";

//component for showing the owners youtube channel.
function Youtube() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="justify-center">
          <h1 className="flex flex-row justify-center mb-10 text-2xl font-bold text-center">
            Welcome to my youtube channel! 
            <i className="ml-2"><FaMagic size={30}/></i>
          </h1>
          <div className="mb-16">
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/BOAa5MpQAMM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
          ></iframe>
          </div>
          <div class="youtube">
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/UZf0OrtIlVI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          </div>
          <a href="https://www.youtube.com/channel/UCSFkDBop1A3xgtRG5twcL8w">
            See more..
          </a>
        </div>
      </div>
    </>
  );
}

export default Youtube;
