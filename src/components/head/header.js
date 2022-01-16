import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { FaRegUser, FaCalendarWeek } from "react-icons/fa";
import Searchbar from "./searchbar";

function Header() {
  //Header med logo + Login/my account button links

  //function för att logga in användare, kollar jwt och renderar beroende på inloggad eller utloggad

  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const JWT = localStorage.getItem("jwt");
    setJwt(JWT);
  }, []);

  function logoutUser() {
    localStorage.clear();
  }

  return (
    <>
      <div class="header" className="flex flex-col justify-center w-full mt-6 lg:flex-row lg:justify-between ">
        <div className="flex justify-center lg:ml-12 lg:self-start">
          <Link to="/">
            <img
              className="rounded"
              src={logo}
              width="300"
              height="300"
              alt="MemTarot"
              loading="lazy"
            />
          </Link>
        </div>

    <div className="flex justify-center mt-6 lg:ml-auto">
        <Searchbar />
        </div>
        <div className="flex justify-center mt-6 mr-10 text-center ">
          <div className="flex flex-row min-w-max">
            <FaRegUser size={20} />
            <div class="dropdown">
              <h1 className="ml-2 mr-4 text-lg hover:underline hover:text-neutral-500">
                Login/Account
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
          </div>
          <div className="flex flex-row text-center min-w-max">
            <FaCalendarWeek size={20} />
            <Link
              to="/bookings"
              className="ml-2 text-lg hover:underline hover:text-neutral-500"
            >
              My Bookings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
