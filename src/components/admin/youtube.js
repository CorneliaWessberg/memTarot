import React from "react";

function Youtube() {
  return (
    <>
      <div className="flex items-center flex-col mt-16">
        <div className="justify-center">
          <h1 className="text-center text-xl mb-10">Welcome to my youtube channel!</h1>
          <iframe className="mb-10"
            width="680"
            height="400"
            src="https://www.youtube.com/embed/BOAa5MpQAMM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe className="mb-10"
            width="680"
            height="400"
            src="https://www.youtube.com/embed/UZf0OrtIlVI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-center text-lg">
          if you wanna see more check out my full youtube-channel here</p>
          <p className="text-center text-lg hover:underline hover:text-xl hover:text-stone-600">https://www.youtube.com/channel/UCSFkDBop1A3xgtRG5twcL8w</p>
        </div>
      </div>
    </>
  );
}

export default Youtube;
