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
    console.log(user)

    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/bookings?populate=products&filters[firstname][$eq]=${user}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data.data)
      setBookings(response.data.data);
    };

    fetchData();
  }, []);

  return (
    <>
      {token ? <div className="flex flex-col content-center justify-center">
        <div className="items-center">
          <h1 className="mb-4 text-2xl text-center">
            Hello <strong>{user}</strong>! 
          </h1>
          <p className="mb-16 text-lg leading-7">Here are your requested bookings,
            waiting for confirmation. <br/>You will be noticed on e-mail within
            2-days if its accepted.</p>
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
                        <div>
                          {booking.attributes.products.data.map((product) => (
                            <>
                              <h1 className="p-2 text-base text-gray-700">
                                Booked Session: {product.attributes.Title}
                              </h1>
                              <h1 className="p-2 text-base text-gray-700">
                                Description:
                                {product.attributes.description}
                              </h1>
                              <h1 className="p-2 text-base text-gray-700">
                                Price: {product.attributes.Price} kr
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
