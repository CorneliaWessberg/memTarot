import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.jpg";
import NavigationMenu from "./navMenu";

function Header() {
  //en navigation? någon meny

  //login, när användaren är inloggad byts ikonen till "my account"
  //dropdown när hover över login. Login/register knapp, my account knapp. Byts till logga ut när inloggad.
  //ska se annorlunda ut, olika menyer beroende på admin eller inte.
  //Där kan man klicka in sig på sin profil sida

  //ikon bredvid, när inloggad. bookade sessions eller varukorg.

  return (
    <>
      <div class="header" className="flex w-full gap-y-0.5">
        <div className="basis-2/4">
          <img
            className="rounded self-start py-2 px-2"
            src={logo}
            width="300"
            height="300"
            alt="MemTarot"
          />
          <Link to="/" className="text-xl ml-6 mt-10">Home</Link>
        </div>
        <Link to="/sessionCard">Card</Link>

        <div className="basis-1/2">
          <NavigationMenu />
        </div>

        <div className="flex-1 items-end basis-1/4">
          <Link to="/login">Login</Link>
          <Link to="/bookings">My Bookings</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
