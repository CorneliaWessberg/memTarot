import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdOutlinePayments } from "react-icons/md";

//footer component, showing on all pages. Links to contact-form social media etc. 
function Footer() {
  return (
    <>
      <footer className="w-full pt-1 footer ">
        <div className="container px-6 mx-auto">
          <div className="sm:flex sm:mt-8">
            <div className="flex flex-col justify-between mt-8 sm:mt-0 sm:w-full sm:px-8 sm:flex-row">
              <div className="flex flex-col">
                <span className="mt-4 mb-2 font-bold uppercase md:mt-0">
                  Contact
                </span>
                <span className="my-2">
                  <Link
                    to="./aboutMe"
                    className="text-lg hover:text-neutral-800"
                  >
                    About Mem tarot
                  </Link>
                </span>
                <span className="my-2">
                  <Link
                    to="./contact"
                    className="text-lg hover:text-neutral-800"
                  >
                    Contact me
                  </Link>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="mt-4 mb-2 font-bold uppercase md:mt-0">
                  Social media
                </span>
                <span className="my-2">
                  <a href="https://www.instagram.com/mem__tarot/" className="text-lg hover:text-neutral-800">
                    <FontAwesomeIcon icon={["fab", "instagram"]}  className="mr-1"/> MemTarot
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="https://www.youtube.com/results?search_query=mem+tarot"
                    className="text-lg hover:text-neutral-800"
                  >
                    <FontAwesomeIcon icon={["fab", "youtube"]}  className="mr-1"/> MemTarot
                  </a>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="mt-4 mb-2 font-bold uppercase md:mt-0">
                  Payments
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-lg hover:text-neutral-800"
                  >
                    <FontAwesomeIcon icon={["fab", "paypal"]} className="mr-1" />
                    Paypal
                  </a>
                </span>
                <span className="my-2 ">
                  <a
                    href="#"
                    className="flex flex-row text-lg hover:text-neutral-800"
                  >
                    <MdOutlinePayments size={20} className="mt-1 mr-1" />
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
              <p class="text-sm font-bold mb-2">
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
