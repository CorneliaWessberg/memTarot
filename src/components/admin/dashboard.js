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

      setUsers(response.data.length)
    };
    fetchUsers();
  }, [])

  useEffect(() => {
    const fetchBookings = async () => {
      const respone = await axios.get(`http://localhost:1337/api/bookings?populate=*`);
      console.log(respone)

      setBookings(respone.data.data)
    };
    fetchBookings();
  }, [])
  return (
    <>
      <div className="max-w-screen">
        <div className="flex">
        
          <div className="p-5 m-8 ">
          <h3  className="justify-center mb-2 text-xl font-semibold text-center">
                  Users on website: {users} users
                </h3>
                <h3  className="justify-center mb-2 text-xl font-semibold text-center">
                  Requested bookings:
                </h3>
            <div className="flex">
              <div className="flex flex-row flex-wrap">
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
                        <h1>Costumers information:</h1>
                        <p className="p-2 text-base text-gray-700">Firstname: {booking.attributes.firstname}</p>
                        <p className="p-2 text-base text-gray-700">Lastname: {booking.attributes.lastname}</p>
                        <p className="p-2 text-base text-gray-700">E-mail: {booking.attributes.email}</p>
                        <h1>Booking details: </h1>
                        <p className="p-2 text-base text-gray-700">
                          Requested date: {booking.attributes.date}
                        </p>
                        <p className="p-2 text-base text-gray-700">
                          Requested time: {booking.attributes.time}.00
                        </p>
                        <div className="px-6 pt-4 pb-2"></div>
                        <div>
                          {booking.attributes.products.data.map((product) => (
                            <>
                              <h1 className="p-2 text-base text-gray-700">
                                Wanted Session: {product.attributes.Title}
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
                <div className="flex mt-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
