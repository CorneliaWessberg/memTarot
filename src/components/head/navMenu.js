import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavigationMenu() {
  return (
    <>
    <FontAwesomeIcon icon={['fab', 'Home']} />
      <Link to="/" className="text-xl ml-6 ">
        Home
      </Link>
      <ul className="flex flex-row justify-center mb-16 -mt-12 text-l ml-6">
        <li>
          <Link to="/aboutMe" className="mr-8">
            About me
          </Link>
        </li>
        <li>
          <Link to="/calender" className="mr-8">
            Calender
          </Link>
        </li>
        <li>
          <Link to="/youtube" className="mr-8">
            Youtube
          </Link>
        </li>
        <li>
          <Link to="/sessionList" className="">
            My sessions
          </Link>
        </li>
        <li>
        <Link to="/addSession" className="ml-8">
            Add a session/product
          </Link>
          </li>
      </ul>
    </>
  );
}

export default NavigationMenu;
