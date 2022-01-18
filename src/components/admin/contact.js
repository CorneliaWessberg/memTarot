import React, { useState } from "react";
import emailjs, { sendForm } from "@emailjs/browser";

function Contact() {
  const [confirmation, setConfirmation] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5g2ypex",
        "template_74cht1j",
        e.target,
        "user_p1V2hetxPkeYVi63uCQKd"
      )
      .then(
        () => {
          e.target.reset();
          setConfirmation("Your E-mail was succesfully send :)");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="mb-6 text-2xl">How can I help you?</h1>
        <p className="mb-10 text-lg">
          Any questions or thoughts contact me here, I try to answer as quickly
          as possible!
        </p>
        <form onSubmit={sendEmail} className="w-full max-w-lg">
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                for="grid-first-name"
              >
                Name
              </label>
              <input
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="fullName"
                placeholder="name"
              ></input>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                for="grid-last-name"
              >
                Email
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Epost-adress@domain.se"
              ></input>
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                for="grid-password"
              >
                Message
              </label>
              <textarea
                className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                name="message"
              ></textarea>
            </div>
          </div>
          <h1 className="text-xl font-bold text-center">{confirmation}</h1>
          <div className="md:flex md:items-center">
            <div className="items-center md:w-1/3">
              <button
                className="w-2/4 p-3 text-center text-white duration-300 rounded-md shadow bg-stone-400 hover:bg-stone-500"
                type="submit"
                value="send"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
        <h1 className="mt-10 text-xl text-start">Email: memtarot@gmail.com</h1>
      </div>
    </>
  );
}

export default Contact;
