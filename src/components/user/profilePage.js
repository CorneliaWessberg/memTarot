import React, { useState, useEffect } from "react";
import axios from "axios";

//ProfilPage, showing information about the user that is logged in.
function ProfilePage() {

  //Getting user-information from localstorage
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");
  const email = localStorage.getItem("userEmail");
  const [bookings, setBookings] = useState([]);
  const user = localStorage.getItem("firstname");
  const [token] = useState(localStorage.getItem("jwt"));


  //Fetching users booking with useEffect
  useEffect(() => {
    console.log(user);

    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/bookings?populate=products&filters[firstname][$eq]=${user}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data.data);
      setBookings(response.data.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center -mt-6">
        <div className="justify-center">
          <h1 className="mb-6 text-2xl font-bold text-center">User information</h1>
          <h1 className="text-xl text-center"><strong>Firstname:</strong> {firstname} </h1>
          <h1 className="text-xl text-center"><strong>Lastname:</strong> {lastname} </h1>
          <h1 className="text-xl text-center"><strong>Email:</strong> {email} </h1>

          <h1 className="mt-10 mb-6 text-2xl font-bold text-center">Pending sessions: </h1>

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
      </div>
    </>
  );
}

export default ProfilePage;
