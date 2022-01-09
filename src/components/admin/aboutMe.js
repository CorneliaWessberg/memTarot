import React from "react";
import logo from "./images/logo.jpg";

function AboutMe() {
  return (
    <>
    <div className="flex justify-center mt-10">
      <div className="flex flex-col items-center max-w-4xl">
          <img
          className="rounded py-2 px-2"
          src={logo}
          width="500"
          height="500"
          alt="MemTarot"
        />
        <h1 className="mb-8 mt-6 font-OpenSans font-bold text-xl">About me - Malin Vallmark/Mem tarot</h1>
        <p className="font-OpenSans text-lg leading-8">
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
