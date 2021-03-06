import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { FaRegUser, FaCalendarWeek } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Searchbar from "./searchbar";
import { useCart } from "react-use-cart";

//Header component, showing on all sides. 
//Top-menu with dropdown login/logout functions. Conditional rendering with jwt.
//directing to shopping-cart and my bookings.
//Showing menu different on desktop and mobile.
function Header() {

  const { 
    totalItems,
    cartTotal
  } = useCart();

  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const JWT = localStorage.getItem("jwt");
    setJwt(JWT);
  }, []);

  function logoutUser() {
    localStorage.clear();
    window.location.reload()
  }

  return (
    <>
      <div class="header" className="flex flex-col justify-center w-full mt-4 lg:flex-row lg:justify-between ">
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
       
        <div className="flex flex-col items-center justify-center mt-6 text-center sm:items-start sm:flex-row sm:mr-10 ">

      {jwt ?
        (<div className="flex flex-row min-w-max">
            <FaRegUser size={20} />
            <div class="dropdown">
              <h1 className="mb-1 ml-2 mr-1 text-xl font-medium sm:text-base sm:mr-4 lg:text-lg hover:underline hover:text-neutral-500">
                Logout/Account
              </h1>
              <div class="dropdown-content">
                <Link to="./profilePage" className="text-lg">My account</Link>
                <br />
                <button onClick={logoutUser} id="logout" className="w-3/4 mt-1 mb-2 text-lg rounded-sm">Logout</button>
              </div>
            </div>
            </div>) :

         ( <div className="flex flex-row min-w-max">
            <FaRegUser size={20} />
            <div class="dropdown">
              <h1 className="mb-1 ml-2 mr-1 text-xl font-medium sm:text-base sm:mr-4 lg:text-lg hover:underline hover:text-neutral-500 ">
                Login/Account
              </h1>
              <div class="dropdown-content">
                <Link to="./login" id="login" className="w-full rounded-md">
                  {/*Condioniotal rendering om inloggad eller inte*/}
                  Login/register
                </Link>
                <br />
                <Link to="./profilePage">My account</Link>
              </div>
            </div>
          </div>)}

          <div className="flex flex-row mr-1 text-center sm:mr-4 min-w-max">
            <FaCalendarWeek size={20} />
            <Link
              to="/bookings"
              className="mb-1 ml-2 text-xl sm:text-base lg:text-lg hover:underline hover:text-neutral-500 focus:underline"
            >
              My Bookings
            </Link>
          </div>
          
          <div className="flex flex-row text-center min-w-max">
            <AiOutlineShoppingCart size={25} />
            <Link to="/cart" className="mb-1 ml-2 text-xl sm:text-base lg:text-lg hover:underline hover:text-neutral-500 focus:underline">
              Shoppingcart ({ totalItems })
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
