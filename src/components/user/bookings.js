import React, { useState, useEffect } from "react";
import axios from "axios";
import BookingCard from "./bookingCard";

//Mapping thru all the bookingcards, will show the bookingcards that belongs to the userId.
function Bookings(title, description, price) {
  const user = localStorage.getItem("firstname");
  const [bookings, setBookings] = useState([]);
  const userId = useState(localStorage.getItem("userId"));
  const token = useState(localStorage.getItem("jwt"));

  useEffect(() => {
    console.log(userId);

    const fetchData = async () => {
      const response = await axios.get(
        // `http://localhost:1337/api/bookings?populate=*`,
        //  `http://localhost:1337/api/bookings?populate[0]=users_permissions_user.id=${userId}&populate[1]=products&populate[2]=products.title*`,
        `http://localhost:1337/api/bookings?populate=users_permissions_user.id=${userId},products`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(JSON.stringify(response, null, 2));
      setBookings(response.data.data);
    };
   

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
                <>
                <BookingCard
                  key={booking.id}
                  bookingId={booking.id}
                  firstname={booking.attributes.firstname}
                  bookedTime={booking.attributes.time}
                  lastname={booking.attributes.lastname}
                /><div>
                  {booking.attributes.products.data.map((product) => (
                    <>
                  bookedSession {product.attributes.Title}
                  bookedDescription={product.attributes.description}
                  bookedPrice={product.attributes.Price} kr
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                    
                    </> 
                    ))}
                  </div></>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookings;
