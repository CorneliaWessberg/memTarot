import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";

//Card for sessions. Showing props on card.
//Booking-Modal comes up when clicking on the "request" button.
//User can make a requested booking.
function SessionCard({ id, title, description, time, price, image }) {
  const customStyles = {
    content: {
      background: "white",
      top: "15%",
      left: "45%",
      right: "auto",
      bottom: "auto",
      width: "65%",
      height: "auto",
      transform: "translate(-40%, -10%)",
    },
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    date: "",
    time: Number,
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [bookValues, setBookValues] = useState(initialValues);
  const [confirmation, setConfirmation] = useState(false);
  const [error, setError] = useState("");
  const token = localStorage.getItem("jwt");
  const userId = localStorage.getItem("userId");
  const user = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");

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

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:1337/api/bookings`,
        {
          data: {
            firstname: user,
            lastname: lastname,
            email: bookValues.email,
            date: bookValues.date,
            time: Number(bookValues.time),
            user: userId,
            products: id,
            title: title,
            price: price,
            description: description,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setConfirmation(true);
      console.log(response);
      console.log(JSON.stringify(response, null, 2));
    } catch (error) {
      setError("Something went wrong, try again");
      console.log(error);
    }
  }

  return (
    <>
      <div
        className="flex flex-col justify-center h-auto p-5 mx-10 my-4 mb-16 rounded-sm shadow-lg sm:mx-auto sm:w-3/4 lg:flex-row lg:w-5/12"
        id={id}
      >
        <img
          className="flex items-center justify-center object-cover w-full h-full lg:w-2/4"
          src={`http://localhost:1337${image.formats.small.url}`}
        />

        <div className="justify-center px-4 py-4 text-center">
          <div className="font-bold text-xl mb-2 p-3.5">{title}</div>
          <p className="p-2 text-base ">{description}</p>
          <p className="p-2 text-lg font-bold ">{price};- kr</p>
          <div className="flex items-center px-6 pt-4 pb-2">
            <button
              onClick={openModal}
              className="flex items-center justify-center w-full p-2 text-lg text-center text-white duration-300 rounded-sm bg-stone-400 hover:bg-stone-500"
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
          <div class="bg-white w-full lg:w-full md:8/12 shadow-md justify-center">
            <div class="py-4 px-8 rounded-xl">
              <button onClick={closeModal}>X</button>
              <h1>{error}</h1>
              <h1 class="font-medium text-2xl mt-3 text-center">
                Make a request with the date and time you wish
              </h1>
              <form action="" class="mt-6" onSubmit={onSubmit} method="POST">
                <div class="my-5 text-sm">
                  {/* <label class="block text-black">firstname:</label>
                  <input
                    type="text"
                    id="firstname"
                    class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                    placeholder="Firstname"
                    value={bookValues.firstname}
                    name="firstname"
                    onChange={onChange}
                  /> */}
                </div>
                <div class="my-5 text-sm">
                  {/* <label class="block text-black">lastname:</label>
                  <input
                    type="text"
                    id="lastname"
                    class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                    placeholder="Lastname"
                    value={bookValues.lastname}
                    name="lastname"
                    onChange={onChange}
                  /> */}
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
                    type="date"
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

                {token ? (
                  <button class="mx-auto block text-center text-white bg-black p-3 duration-300 rounded-md hover:bg-stone-500 w-1/2 md:w-full mb-2">
                    Confirm
                  </button>
                ) : (
                  <h1>
                    You have to be logged in to make a booking!
                    <Link to="/login">- To login</Link>
                  </h1>
                )}
              </form>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default SessionCard;
