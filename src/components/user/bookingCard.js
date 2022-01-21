import React from "react";
import axios from "axios"; 

//Card for the bookings that will show on "my bookings" page. 
//Taking props from sessions, and transfer into bookingcard.
//function for canceling your booking.
function BookingCard({ bookingId, firstname, bookedTime, date, bookedSession, bookedImage, bookedDescription, bookedPrice }) {
  function cancelBooking() {
      
    axios.delete(
      `http://localhost:1337/api/bookings${bookingId}`
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
          <div className="font-bold text-xl mb-2 p-3.5"></div>
          {/* <img
            className="object-cover w-full h-40 rounded-2xl"
            src={`http://localhost:1337${bookedImage.formats.small.url}`}
          /> */}
          <p className="p-2 text-base text-gray-700">{bookedSession}</p>
          <p className="p-2 text-base text-gray-700">{date}</p>
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
