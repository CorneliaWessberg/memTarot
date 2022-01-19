import React from "react";
import logo from "../images/logo.jpg";

//component for information about the company/the owner.

function AboutMe() {
  return (
    <>
    <div className="flex justify-center">
      <div className="flex flex-col items-center max-w-4xl">
          <img
          className="px-2 py-2 rounded"
          src={logo}
          width="500"
          height="500"
          alt="MemTarot"
          loading="lazy"
        />
        <h1 className="mt-6 mb-8 text-xl font-bold">About me - Malin Vallmark/Mem tarot</h1>
        <p className="mx-8 text-lg leading-8 text-center lg:mx-0">
          My name is Malin and I am an Intuitive Tarot Card Reader from Sweden.
          I had my awakening in 2019 where I had a re-birth and my spiritual
          gifts came to light. I became more sensitive to energies, my intuition
          was hightened and I levelled up and healed from within in a high pace.
          I went through the dark night of the soul through out my awakening
          which has helped me get a bigger understanding about myself and my
          souls mission here on earth. I have a direct connection to spirit and
          the Universe thanks to this tough ascending process. I am still
          ascending as we constant are evolving and changing as human beings. I
          am a natural empath and attach energies from others on to my own body
          and have an deep understanding about others and their life journey as
          well. I have the ability to read peoples energies in the present time
          and guide them on how to heal and move on from their situations and I
          also sense the future outcome for my clients. I am clairsentient (you
          feel spirit with help of your body) claircognizance (Deep inner
          knowing and gut feeling) Clairvoyant (clear seeing, you see spirit and
          things from other dimensions)
        </p>
      </div>
      </div>
    </>
  );
}

export default AboutMe;
