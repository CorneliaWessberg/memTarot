import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SessionCard({ items }) {
  // const  { productId, title, description, time, price, image } = items;

  return (
    <>
      <div
        className="italic w-96 my-4 max-h-150 p-5 rounded-md overflow-hidden shadow-lg flex justify-center"
        
      >
        <div className="justify-center text-center px-4 py-4">
          <div className="font-bold text-xl mb-2 p-3.5">Title</div>
          <img
          />
          <p className="text-gray-700 text-base p-2">
            description
          </p>
          <p className="text-gray-700 text-base p-2">
            time
          </p>
          <p className="text-gray-700 text-base p-2">
          price
          </p>
          <div className="px-6 pt-4 pb-2">
            <Link to="/calender"><button
              className="block text-center text-white bg-stone-400 p-3 duration-300 rounded-md hover:bg-stone-500 w-full"
            >
              Book in calender
            </button></Link>

           
          </div>
        </div>
      </div>
     
    </>
  );
}

export default SessionCard;
