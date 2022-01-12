import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavigationMenu() {
  return (
    <>
    
      <Link to="/" className="text-xl ml-16 hover:underline hover:text-neutral-500">
        Home
      </Link>
      <ul className="flex flex-row justify-center mb-16 -mt-12 text-xl space-x-2 ml-48 ">
        <li>
          <Link to="/aboutMe" className="mr-8 hover:underline hover:text-neutral-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/calender" className="mr-8 hover:underline hover:text-neutral-500">
            Calender
          </Link>
        </li>
        <li>
          <Link to="/youtube" className="mr-8 hover:underline hover:text-neutral-500">
            Youtube
          </Link>
        </li>
        <li>
          <Link to="/sessions" className="hover:underline hover:text-neutral-500">
            My sessions
          </Link>
        </li>
        <li>
        <Link to="/addSession" className="ml-8 hover:underline hover:text-neutral-500">
            Add a session/product
          </Link>
          </li>
          <li>
              <Link to="/dashboard" className="ml-8 hover:underline hover:text-neutral-500">Dashboard</Link>
          </li>
      </ul>
    </>
  );
}

export default NavigationMenu;
