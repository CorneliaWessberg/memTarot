import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <>
    <footer class="footer bg-bubble-gum relative pt-1 ">
    <div class="container mx-auto px-6">

        <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div class="flex flex-col">
                    <span class="font-bold text-midnight uppercase mb-2">Contact</span>
                    <span class="my-2"><Link to="./aboutMe" class="text-midnight  text-md hover:text-blue-500">About Mem tarot</Link></span>
                    <span class="my-2"><Link to="./contact" class="text-midnight  text-md hover:text-blue-500">Contact me</Link></span>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-midnight uppercase mt-4 md:mt-0 mb-2">Social media</span>
                    <span class="my-2"><a href="#" class="text-midnight text-md hover:text-blue-500"><FontAwesomeIcon icon={['fab', 'instagram']} /> Instagram</a></span>
                    <span class="my-2"><a href="#" class="text-midnight  text-md hover:text-blue-500"><FontAwesomeIcon icon={['fab', 'youtube']} />Youtube</a></span>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-midnight uppercase mt-4 md:mt-0 mb-2">Payments</span>
                    <span class="my-2"><a href="#" class="text-midnight  text-md hover:text-blue-500">  <FontAwesomeIcon icon={['fab', 'paypal']} />Paypal</a></span>
                    <span class="my-2"><a href="#" class="text-midnight  text-md hover:text-blue-500">Swish</a></span>
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
