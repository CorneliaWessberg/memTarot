import React from "react";

function Youtube() {
  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <div className="justify-center">
          <h1 className="mb-10 text-xl text-center">Welcome to my youtube channel!</h1>
          <iframe className="w-full mb-10 aspect-video"
            width="680"
            height="400"
            src="https://www.youtube.com/embed/BOAa5MpQAMM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe className="w-full mb-10 aspect-video"
            width="680"
            height="400"
            src="https://www.youtube.com/embed/UZf0OrtIlVI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <a href="https://www.youtube.com/channel/UCSFkDBop1A3xgtRG5twcL8w">See more..</a>
        </div>
      </div>
    </>
  );
}

export default Youtube;
