import React from "react";
import axios from "axios"; 

function BookingCard({ bookingId, bookedSession, image, description, price }) {
  function cancelBooking() {
    axios.delete(
      `http://http://localhost:1337/api/bookings?populate=*${bookingId}`
    );
    window.location.reload();
  }
  return (
    <>
      <div
        className="flex justify-center p-5 my-4 overflow-hidden italic rounded-md shadow-lg w-96 max-h-150"
        id={bookingId}
      >
        <div className="justify-center px-4 py-4 text-center">
          <div className="font-bold text-xl mb-2 p-3.5">{bookedSession}</div>
          <img
            className="object-cover w-full h-40 rounded-2xl"
            src={`http://localhost:1337${image.formats.small.url}`}
          />
          <p className="p-2 text-base text-gray-700">{description}</p>
          <p className="p-2 text-base text-gray-700">{price}</p>
          <div className="px-6 pt-4 pb-2">
            <button
              onClick={cancelBooking}
              className="block w-full p-3 text-center text-white duration-300 rounded-md bg-stone-400 hover:bg-stone-500"
            >
              Cancel your request
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingCard;
