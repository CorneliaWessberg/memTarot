import React, { useState, useEffect } from "react";
import axios from "axios";
import BookingCard from "./bookingCard";

//Mapping thru all the bookingcards, will show the bookingcards that belongs to the userId.
function Bookings() {
  const user = localStorage.getItem("firstname");
  const [bookings, setBookings] = useState([]);
  const userId = useState(localStorage.getItem("userId"));
  const token = useState(localStorage.getItem("jwt"));

  useEffect(() => {
    console.log(userId);

    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/bookings?users_permissions_user.id=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(response.data.data);
    };
    console.log(bookings);

    fetchData();
  }, [token, bookings, userId]);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="justify-center">
          <h1>
            Hello <strong>{user}</strong>, Here are your requested bookings,
            waiting for confirmation. You will be noticed on e-mail within
            2-days if its accepted.
          </h1>
          <div>
            {bookings.map((booking) => {
              return (
                <BookingCard
                  key={booking.id}
                  bookingId={booking.id}
                  firstname={booking.attributes.firstname}
                  lastname={booking.attributes.lastname}
                  bookedSession={booking.attributes.title}
                  bookedImage={booking.attributes.img.data.attributes}
                  bookedDescription={booking.attributes.description}
                  bookedPrice={booking.attributes.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookings;
