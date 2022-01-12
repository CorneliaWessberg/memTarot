import React, { useState, useEffect } from "react";
import axios from "axios";


function SessionCard({title, description, time, price, image }) {

  const props = {title, description, time, price, image }

  return (
    <>
      <div className="p-20">
        <div className="bg-white rounded-lg shadow-2xl md:flex">
        <img  alt=""  className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
           
          
          <div className="p-6">
            <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">
             { title } 
            </h2>
            <p className="text-orange-700">
               {description} 
            </p>
            <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">
               {time}
            </h2>
            <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">
               {price}  kr
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default SessionCard;
