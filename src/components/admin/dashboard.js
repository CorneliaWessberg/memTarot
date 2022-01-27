import React, { useEffect, useState } from "react";
import axios from "axios";

//component for admin dashboard. Here we fetching users
//and bookings so the owner can see how many users and bookings on the page.
function Dashboard() {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`http://localhost:1337/api/users`);
      console.log(response);

      setUsers(response.data.length);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchBookings = async () => {
      const respone = await axios.get(
        `http://localhost:1337/api/bookings?populate=*`
      );
      console.log(respone);

      setBookings(respone.data.data);
    };
    fetchBookings();
  }, []);
  return (
    <>
      <div className="w-screen">
        <h3 className="justify-center mb-6 text-xl font-semibold text-center">
          Users on website: {users} users
        </h3>
        <h3 className="justify-center mb-2 text-xl font-semibold text-center">
          Requested bookings:
        </h3>

        {bookings.map((booking) => {
          return (
            <>
              <div
                className="flex justify-center w-7/12 p-5 mx-auto my-4 mb-16 overflow-hidden leading-8 rounded-md shadow-lg max-h-150"
                id={booking.id}
              >
                <div className="justify-center px-4 py-4 text-center">
                  <div className="font-bold text-xl mb-2 p-3.5"></div>
                  <h1 className="text-xl font-bold">Costumers information:</h1>
                  <p className="p-2 text-lg text-gray-700">
                    Firstname: {booking.attributes.firstname}
                  </p>
                  <p className="p-2 text-lg text-gray-700">
                    Lastname: {booking.attributes.lastname}
                  </p>
                  <p className="p-2 text-lg text-gray-700">
                    E-mail: {booking.attributes.email}
                  </p>
                  <h1 className="mt-4 text-xl font-bold">Booking details: </h1>
                  <p className="p-2 text-lg text-gray-700">
                    Requested date: {booking.attributes.date}
                  </p>
                  <p className="p-2 text-lg text-gray-700">
                    Requested time: {booking.attributes.time}.00
                  </p>
                  <div>
                    {booking.attributes.products.data.map((product) => (
                      <>
                        <h1 className="p-2 text-lg text-gray-700">
                          Wanted Session: {product.attributes.Title}
                        </h1>
                      </>
                    ))}
                  </div>
                  <button className="block w-full p-2 mt-4 text-center text-white duration-300 bg-black rounded-md hover:bg-stone-500">
                    Accept booking
                  </button>
                </div>
              </div>
            </>
          );
        })}
        <div className="flex mt-5"></div>
      </div>
    </>
  );
}

export default Dashboard;
