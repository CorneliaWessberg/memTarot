import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfilePage() {
  
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");
  const email = localStorage.getItem("userEmail");

 

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="justify-center">
          <h1>Firstname: {firstname} </h1>
          <h1>Lastname: {lastname} </h1>
          <h1>Email: {email} </h1>

          <h1>Upcoming session: </h1>
          <h1>My Purchases: </h1>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
