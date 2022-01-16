import React from "react";

function Dashboard() {
  return (
    <>
      <div className="h-screen w-full">
        <div className="flex">
          <div className="m-8 w-full bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
            <div id="header" className="flex">
              <div id="body" className="flex flex-col ml-5">
                <h3 id="name" className="text-xl font-semibold mb-2">
                  Users on website:
                </h3>
                <h3 id="name" className="text-xl font-semibold mb-2">
                  Upcoming bookings:
                </h3>
                <h1>CardList med alla bokade från alla Users</h1>
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
