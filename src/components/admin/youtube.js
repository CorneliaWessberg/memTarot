import React from "react";

function Youtube() {
  return (
    <>
      <div className="flex items-center flex-col">
        <div className="justify-center">
          <h1 className="text-center">Mem-taros youtube channel</h1>
          <iframe className="mb-10"
            width="680"
            height="400"
            src="https://www.youtube.com/embed/BOAa5MpQAMM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe className="mb-10"
            width="680"
            height="400"
            src="https://www.youtube.com/embed/UZf0OrtIlVI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe className="mb-10"
            width="680"
            height="400"
            src="https://www.youtube.com/embed/e0aE98I5WTQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="text-center">
          if you wanna see more check out my full youtube-channel here - <br />
          https://www.youtube.com/channel/UCSFkDBop1A3xgtRG5twcL8w</p>
        </div>
      </div>
    </>
  );
}

export default Youtube;
