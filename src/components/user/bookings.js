import React from "react";

function Bookings() {
  const user = localStorage.getItem("firstname")
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="justify-center">
          <h1>Hello <strong>{user}</strong>, Here are your requested bookings, waiting for confirmation.
          You will be noticed on e-mail within 2-days if its accepted.</h1>
          <h1>CARD</h1>
        </div>
      </div>
    </>
  );
}

export default Bookings;
