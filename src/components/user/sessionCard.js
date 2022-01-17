import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function SessionCard({ productId, title, description, time, price, image }) {
  const customStyles = {
    content: {
      background: "white",
      top: "10%",
      left: "47%",
      right: "auto",
      bottom: "auto",
      width: "80%",
      height: "80vw",
      transform: "translate(-40%, -10%)",
    },
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    date: null,
    time: null,
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [bookValues, setBookValues] = useState(initialValues);
  const [confirmation, setConfirmation] = useState(false);
  const [error, setError] = useState("");
  const token = localStorage.getItem("jwt");
  const userId = localStorage.getItem("userId");

  function openModal(e) {
    setModalOpen(true);
  }

  function closeModal(e) {
    setModalOpen(false);
  }

  function onChange(e) {
    setBookValues({ ...bookValues, [e.target.name]: e.target.value });

    console.log(bookValues);
  }

  function onSubmit() {}

  return (
    <>
      <div
        className="flex justify-center p-5 my-4 overflow-hidden italic rounded-md shadow-lg w-96 max-h-150"
        id={productId}
      >
        <div className="justify-center px-4 py-4 text-center">
          <div className="font-bold text-xl mb-2 p-3.5">{title}</div>
          <img
            className="object-cover w-full h-40 rounded-2xl"
            src={`http://localhost:1337${image.formats.small.url}`}
          />
          <p className="p-2 text-base text-gray-700">{description}</p>
          <p className="p-2 text-base text-gray-700">{time}</p>
          <p className="p-2 text-base text-gray-700">{price}</p>
          <div className="px-6 pt-4 pb-2">
            <button
              onClick={openModal}
              className="block w-full p-3 text-center text-white duration-300 rounded-md bg-stone-400 hover:bg-stone-500"
            >
              Make a request
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Booking Modal"
      >
        {confirmation ? (
          <div>
            Thanks for your request! see your pending bookings here
            <strong>
              <Link to="/bookings">HERE</Link>
            </strong>
          </div>
        ) : (
          <div class="bg-white lg:w-5/6 md:6/12 w-10/12 m-auto my-10 shadow-md">
            <div class="py-8 px-8 rounded-xl">
              <button onClick={closeModal}>X</button>
              <h1>{error}</h1>
              <h1 class="font-medium text-2xl mt-3 text-center">
                Make a request with the date and time you wish
              </h1>
              <form action="" class="mt-6" onSubmit={onSubmit} method="POST">
                <div class="my-5 text-sm">
                  <label class="block text-black">firstname:</label>
                  <input
                    type="text"
                    id="firstname"
                    class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                    placeholder="Firstname"
                    value={bookValues.firstname}
                    name="firstname"
                    onChange={onChange}
                  />
                </div>
                <div class="my-5 text-sm">
                  <label class="block text-black">lastname:</label>
                  <input
                    type="text"
                    id="lastname"
                    class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                    placeholder="Lastname"
                    value={bookValues.lastname}
                    name="lastname"
                    onChange={onChange}
                  />
                </div>
                <div class="my-5 text-sm">
                  <label class="block text-black">email:</label>
                  <input
                    type="text"
                    id="email"
                    class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                    placeholder="email"
                    value={bookValues.email}
                    name="email"
                    onChange={onChange}
                  />
                  <div class="flex justify-end mt-2 text-xs text-gray-600"></div>
                </div>
                <div class="my-5 text-sm">
                  <label class="block text-black">date:</label>
                  <input
                    type="number"
                    id="date"
                    class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                    placeholder="date"
                    value={bookValues.date}
                    name="date"
                    onChange={onChange}
                  />
                  <div class="flex justify-end mt-2 text-xs text-gray-600"></div>
                </div>
                <div class="my-5 text-sm">
                  <label class="block text-black">time:</label>
                  <input
                    type="number"
                    id="time"
                    class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                    placeholder="time"
                    value={bookValues.time}
                    name="time"
                    onChange={onChange}
                  />
                  <div class="flex justify-end mt-2 text-xs text-gray-600"></div>
                </div>

                <button class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
                  Confirm
                </button>
              </form>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default SessionCard;
