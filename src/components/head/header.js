import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import logo from "../images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./login";

function Header() {
  //en navigation? någon meny

  //login, när användaren är inloggad byts ikonen till "my account"
  //dropdown när hover över login. Login/register knapp, my account knapp. Byts till logga ut när inloggad.
  //ska se annorlunda ut, olika menyer beroende på admin eller inte.
  //Där kan man klicka in sig på sin profil sida

  //ikon bredvid, när inloggad. bookade sessions eller varukorg.

  const customStyles = {
    content: {
      background: "white",
      top: "20%",
      left: "47%",
      right: "auto",
      bottom: "auto",
      width: "40%",
      transform: "translate(-40%, -10%)",
    },
  };

  const [openModal, setOpenModal] = useState(false);
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const JWT = localStorage.getItem("jwt");
    setJwt(JWT);
  }, []);

  function modalOpen() {
    setOpenModal(true);
  }

  function modalClose() {
    setOpenModal(false);
  }

  return (
    <>
      <div class="header" className="flex w-full">
        <div>
          <img
            className="rounded self-start "
            src={logo}
            width="300"
            height="300"
            alt="MemTarot"
          />
        </div>

        {/*Conditional rendering, inloggad eller inte. jwt?
      Dropdown lättare med js??
      Fontawesome ikoner?*/}
        <div className="flex-1  basis-1/4 text-right mt-10">
          <div class="dropdown">
            <h1 className="mr-4 text-l">Login/My account</h1>
            <div class="dropdown-content">
              <Link to="./login">Login/register</Link>
              <br />
              <Link to="./profilePage">My account</Link>
              <br />
              <a>Logout</a>
            </div>
          </div>
          <Link to="/bookings" className="mr-20 text-l">
            My Bookings
          </Link>
        </div>
      </div>

      <Modal
        isOpen={openModal}
        onRequestClose={modalClose}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <button onClick={modalClose}>X</button>
        {/*condionital rendering så register componenten visas när klickar på register? */}
        <Login />
      </Modal>
    </>
  );
}

export default Header;
