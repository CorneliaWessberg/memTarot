import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//Mapping thru all the bookingcards, will show the bookingcards that belongs to the userId.
function Bookings() {
  const user = localStorage.getItem("firstname");
  const [bookings, setBookings] = useState([]);
  const [userId] = useState(localStorage.getItem("userId"));
  const [token] = useState(localStorage.getItem("jwt"));

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

      setBookings(response.data.data);
    };

    fetchData();
  }, [token, bookings, userId]);

  return (
    <>
      {token ? <div className="flex flex-col items-center">
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
                  <div>
                    <div
                      className="flex justify-center p-5 my-4 overflow-hidden italic rounded-md shadow-lg w-96 max-h-150"
                      id={booking.id}
                    >
                      <div className="justify-center px-4 py-4 text-center">
                        <div className="font-bold text-xl mb-2 p-3.5"></div>
                        <p className="p-2 text-base text-gray-700">
                          Your requested date: {booking.attributes.date}
                        </p>
                        <p className="p-2 text-base text-gray-700">
                          Your requested time: {booking.attributes.time}.00
                        </p>
                        <div className="px-6 pt-4 pb-2"></div>

                        <div>
                          {booking.attributes.products.data.map((product) => (
                            <>
                              <h1 className="p-2 text-base text-gray-700">
                                Booked Session: {product.attributes.Title}
                              </h1>
                              <h1 className="p-2 text-base text-gray-700">
                                Booked Description:
                                {product.attributes.description}
                              </h1>
                              <h1 className="p-2 text-base text-gray-700">
                                Booked Price: {product.attributes.Price} kr
                              </h1>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div> : <h1>Login to see your bookings! <Link to="/login">- to Login</Link></h1>}
    </>
  );
}

export default Bookings;
