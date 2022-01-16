import React from "react";
import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa";

function NavigationMenu() {
  return (
    <>
        {/*Condiontional rendering beroende på om man är inloggad som admin eller inte*/}
      <Link to="/" className="flex flex-row text-xl ml-16 hover:underline underline-offset-4  hover:text-neutral-500 focus:underline">
        Home <FaHome size={20} className="mt-1 ml-2" />
      </Link>
      <ul className="flex flex-row justify-center mb-16 text-xl space-x-2 w-full ">
        <li>
          <Link to="/aboutMe" className="mr-8 hover:underline underline-offset-4  ml-28 hover:text-neutral-500 focus:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/calender" className="mr-8 hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
            Calender
          </Link>
        </li>
        <li>
          <Link to="/youtube" className="mr-8 hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
            Youtube
          </Link>
        </li>
        <li>
          <Link to="/sessions" className="hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
            My sessions
          </Link>
        </li>
        <li>
        <Link to="/addSession" className="ml-8 hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
            Add a session/product
          </Link>
          </li>
          <li>
              <Link to="/dashboard" className="ml-8 hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">Dashboard</Link>
          </li>
      </ul>
    </>
  );
}

export default NavigationMenu;
