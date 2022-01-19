import React, { useEffect, useState } from "react";
import axios from "axios"; 

//component for admin dashboard. Here we fetching users 
//and bookings so the owner can see how many users and bookings on the page.
function Dashboard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`http://localhost:1337/api/users`);
      console.log(response);

      setUsers(response.data.length)
    };

    fetchUsers();
  }, [])
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex">
          <div className="w-full p-5 m-8 tracking-wide bg-white border-2 border-gray-300 rounded-md shadow-lg">
            <div id="header" className="flex">
              <div id="body" className="flex flex-col ml-5">
                <h3 id="name" className="mb-2 text-xl font-semibold">
                  Users on website: {users}
                </h3>
                <h3 id="name" className="mb-2 text-xl font-semibold">
                  Requested bookings:
                </h3>
                <h1>Purchases on site: </h1>
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
