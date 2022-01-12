import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <footer className="footer bg-bubble-gum relative pt-1 ">
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <span className="font-bold uppercase mb-2">
                  Contact
                </span>
                <span className="my-2">
                  <Link
                    to="./aboutMe"
                    className="text-midnight  text-lg hover:text-neutral-500"
                  >
                    About Mem tarot
                  </Link>
                </span>
                <span className="my-2">
                  <Link
                    to="./contact"
                    className="text-midnight  text-lg hover:text-neutral-500"
                  >
                    Contact me
                  </Link>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold uppercase mt-4 md:mt-0 mb-2">
                  Social media
                </span>
                <span className="my-2">
                  <a href="#" className="text-lg hover:text-neutral-500">
                    <FontAwesomeIcon icon={["fab", "instagram"]} /> MemTarot
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-lg hover:text-neutral-500"
                  >
                    <FontAwesomeIcon icon={["fab", "youtube"]} /> MemTarot
                  </a>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold uppercase mt-4 md:mt-0 mb-2">
                  Payments
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-lg hover:text-neutral-500"
                  >
                    <FontAwesomeIcon icon={["fab", "paypal"]} />
                    Paypal
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="  text-lg hover:text-neutral-500"
                  >
                    Swish
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-6">
          <div class="mt-16 border-t-2 border-tahiti flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
              <p class="text-sm text-midnight font-bold mb-2">
                © 2022, Mem tarot
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* <div class="footer">
        <div>
          <h1>Contact</h1>
          <ul>
            <li>
              <Link to="./aboutMe">About me</Link>
            </li>
            <li>
              <Link to="./contact">Contact me</Link>
            </li>
            <li>
              <Link to="./reviews">Reviews</Link>
            </li>
          </ul>
        </div>

        <div>
          <h1>Social media</h1>
          <ul>
            <li>Instagram</li>
            <li>youtube</li>
            <li>Facebook?</li>
          </ul>
        </div>

        <p> &copy; Malin Vallmark, 2022 </p>
      </div> */}
    </>
  );
}

export default Footer;
