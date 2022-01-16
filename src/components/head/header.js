import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { FaRegUser, FaCalendarWeek } from "react-icons/fa";
import Searchbar from "../searchbar";

function Header() {
  //Header med logo + Login/my account button links

  //function för att logga in användare, kollar jwt och renderar beroende på inloggad eller utloggad

  const [jwt, setJwt] = useState("");


  useEffect(() => {
    const JWT = localStorage.getItem("jwt");
    setJwt(JWT);
  }, []);

  function logoutUser() {
    localStorage.clear() 
  }

  return (
    <>
      <div class="header" className="flex w-full mt-6">
        <div>
          <Link to="/">
            <img
              className="rounded self-start ml-12 "
              src={logo}
              width="300"
              height="300"
              alt="MemTarot"
              loading="lazy"
            />
          </Link>
        </div>

      <Searchbar />
        <div className="flex-1  basis-1/4 text-right mt-6">
          <div class="dropdown">
            <h1 className="mr-4 text-l hover:underline hover:text-neutral-500">
            <FaRegUser size={20} /> Login/Account
            </h1>
            <div class="dropdown-content">
              <Link to="./login" id="login">
                {/*Condioniotal rendering om inloggad eller inte*/}
                Login/register
              </Link>
              <br />
              <Link to="./profilePage">My account</Link>
              <br />
              <a>Logout</a>
            </div>
          </div>
         
          <Link
            to="/bookings"
            className=" mr-32 text-l hover:underline hover:text-neutral-500"
          >
          My Bookings
          </Link>
         
        </div>
      </div>
    </>
  );
}

export default Header;
